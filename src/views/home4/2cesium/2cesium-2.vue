<script setup lang='ts'>
import { ref, isRef, shallowRef, onMounted } from 'vue'
import * as Cesium from "cesium";
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
const data = ref({

})
// three对象
let three = {
  renderer: new THREE.WebGLRenderer({ alpha: true }),
  camera: new THREE.PerspectiveCamera(),
  scene: new THREE.Scene()
};
let controls:OrbitControls
//cesium对象

let viewer:Cesium.Viewer

// 模型定位范围
let minWGS84 = [115.56936458615716, 39.284100766866445];
let maxWGS84 = [117.10745052365716, 41.107831235616445];

// cesium 容器
let cesiumContainer = document.getElementById("cesiumContainer");
let _3Dobjects: number[] = []; // 可以是任何Three.js对象网格
// three对象
interface M {
  threeMesh: THREE.Group,
  minWGS84: number[],
  maxWGS84: number[]
}
function _3DObject() {
  //THREEJS 3DObject.mesh
  //location bounding box
  return {
    threeMesh: new THREE.Group(),
    minWGS84: [1],
    maxWGS84: [1]
  }
}
// 初始化地球
function initCesium() {
    viewer= new Cesium.Viewer("cesiumContainer", {
      timeline: false,//时间轴
      animation: false,//动画控件
      geocoder: false,//搜索按钮
      homeButton: true,//主页按钮
      sceneModePicker: true,//投影方式
      baseLayerPicker: true,//图层选择
      navigationHelpButton: false,//帮助按钮
      fullscreenButton: false,//全屏按钮
    })
  

  let center = Cesium.Cartesian3.fromDegrees(
    (minWGS84[0] + maxWGS84[0]) / 2,
    (minWGS84[1] + maxWGS84[1]) / 2 - 1,
    200000
  );
  viewer.camera.setView({
    destination: center,
    orientation: {
      heading: Cesium.Math.toRadians(0),
      pitch: Cesium.Math.toRadians(-60),
      roll: Cesium.Math.toRadians(0),
    }
  });
}

//初始化three
function initThree() {
  three.renderer.setSize(document.getElementById("ThreeContainer")?.clientWidth || 0, 600)
  let fov = 45;
  let width = document.getElementById("ThreeContainer")?.clientWidth || 0;
  let height = 600;
  let aspect = width / height;
  let near = 1;
  let far =  20000000;
  three.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    //设置相机位置
    three.camera.position.z = 500000
    three.camera.position.y = 500000
    three.camera.position.x =500000
  //设置相机看向哪里
  three.camera.lookAt(0, 0, 0)
  let Amlight = new THREE.AmbientLight(0xffffff, 2);
  three.scene.add(Amlight);
  controls = new OrbitControls(three.camera, three.renderer.domElement)
controls.enableDamping = true;

  // var ThreeContainer = document.getElementById("ThreeContainer");
  // ThreeContainer?.appendChild(three.renderer.domElement);
  const axeshelper = new THREE.AxesHelper(50000000);
  three.scene.add(axeshelper)
  const geometry = new THREE.BoxGeometry(1000000, 1000000, 1000000)
  const masterial = new THREE.MeshBasicMaterial({
        color: 0xff00ff
    });
  const cube = new THREE.Mesh(geometry,masterial)
//  cube.position.z = 2500000.0; // 在Three.js空间中平移“向上”，使网格的“底部”为句柄
        // x方向旋转版权
  //cube.rotation.x = Math.PI / 2;
  three.scene.add(cube)
  // 注意这里，直接把three容器（canvas 添加到 cesium中，在cesium的canvas之下），
  // 这样的话，两个canvas才会重叠起来。
//   viewer.cesiumWidget.canvas.parentElement?.appendChild(
//    three.renderer.domElement
//  );
  document.getElementById("ThreeContainer")?.appendChild(three.renderer.domElement);
}
// 将Cesium的场景与Three.js的场景进行关联

//创建 cesium 图形，跟three无关
function createPolygon() {
  let entity = {
    name: "Polygon",
    polygon: {
      hierarchy: Cesium.Cartesian3.fromDegreesArray([
        minWGS84[0],
        minWGS84[1],
        maxWGS84[0],
        minWGS84[1],
        maxWGS84[0],
        maxWGS84[1],
        minWGS84[0],
        maxWGS84[1],
      ]),
      material: Cesium.Color.BLUE.withAlpha(0.4),
    },
  };
  let Polygon = viewer.entities.add(entity);
}
// cesium 渲染
function renderCesium() {
  viewer.render();
}

// three.js每次刷新的操作
function renderThreeObj() {
  // register Three.js scene with Cesium
  // 镜头同步
  three.camera.position.copy(viewer.camera.position)
  // three.camera.fov = Cesium.Math.toDegrees(
  //   viewer.camera.frustum.foxy
  // ); // ThreeJS FOV is vertical
  three.camera.updateProjectionMatrix();
  let cartToVec = function (cart: any) {
    return new THREE.Vector3(cart.x, cart.y, cart.z);
  };

  // 控制下水流变化 water.position.y += 100.0;
  // water.material.uniforms["time"].value += 1.0 / 60.0;

  // Configure Three.js meshes to stand against globe center position up direction
  // 将Three.js网格配置为相对于地球仪中心位置向上
  three.camera.matrixAutoUpdate = false;
  let cvm = viewer.camera.viewMatrix;
  let civm = viewer.camera.inverseViewMatrix;

  // 注意这里，经大神博客得知，three高版本这行代码需要放在 three.camera.matrixWorld 之前
  three.camera.lookAt(0, 0, 0);

  three.camera.matrixWorld.set(
    civm[0],
    civm[4],
    civm[8],
    civm[12],
    civm[1],
    civm[5],
    civm[9],
    civm[13],
    civm[2],
    civm[6],
    civm[10],
    civm[14],
    civm[3],
    civm[7],
    civm[11],
    civm[15]
  );

  three.camera.matrixWorldInverse.set(
    cvm[0],
    cvm[4],
    cvm[8],
    cvm[12],
    cvm[1],
    cvm[5],
    cvm[9],
    cvm[13],
    cvm[2],
    cvm[6],
    cvm[10],
    cvm[14],
    cvm[3],
    cvm[7],
    cvm[11],
    cvm[15]
  );

  // 设置three宽高
  let width = document.getElementById("cesiumContainer")?.clientWidth || 0;
  let height = 600;

  let aspect = width / height;
  three.camera.aspect = aspect;
  three.camera.updateProjectionMatrix();
  three.renderer.setSize(width, height);
  three.renderer.clear();
  three.renderer.render(three.scene, three.camera);
}

// 同步
function loop() {
  requestAnimationFrame(loop);
//  renderCesium();
  controls.update()
  three.renderer.render(three.scene, three.camera)
//  three.camera.position.copy(viewer.camera.position)
//  three.camera.quaternion.copy(viewer.camera.quaternion)
  renderThreeObj();
}
onMounted(() => {
  initCesium()
  initThree()
  loop();
  createPolygon();
})
</script>
<template>
  <div class="vvxx">
    <div id="cesiumContainer"></div>
    <div id="ThreeContainer"></div>
    <div id="ssss"></div>
  </div>
</template>
<style lang='less'>
.cesium-viewer-bottom {
  display: none
}
</style>
<style scoped lang='less'>
.vvxx {
  width: 100%;
  position: relative;
}

#cesiumContainer {
  width: 100%;
  height: 600px;
  overflow: hidden;
  font-family: sans-serif;
  position: absolute;
}

#ThreeContainer {
  width: 100%;
  height: 600px;
  overflow: hidden;
  position: absolute;
  top: 0;
  font-family: sans-serif;
  pointer-events: none;
}
#ssss{
  width: 100%;
  height: 600px;
  background-color: yellow
}
</style>