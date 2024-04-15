<script setup lang='ts'>
import { ref, isRef, shallowRef, onMounted } from 'vue'
import * as Three from "three";
//轨道控制器
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
const data = ref({
  isScreen: false
})
const fullScreen = () => {
  if (data.value.isScreen) {
    document.exitFullscreen()
    data.value.isScreen = false
  } else {
    data.value.isScreen = true
    document.getElementById("canvss1")?.requestFullscreen()
      .then(() => {
        console.log("成功")
        render.setSize(document.getElementById("canvss1")?.clientWidth||0, document.getElementsByClassName("canvss")[0].clientHeight)
        //重置相机宽高比
        camera.aspect = (document.getElementById("canvss1")?.clientWidth||0) / document.getElementsByClassName("canvss")[0].clientHeight
        //更新相机投影矩阵
        camera.updateProjectionMatrix();
      })
      .catch(() => {
        console.log("失败")
      });
  }
}
//创建渲染器
const render = new Three.WebGLRenderer();
var camera = new Three.PerspectiveCamera();
const canvsfun = () => {
  //设置渲染器大小
  render.setSize(document.getElementById("canvss1")?.clientWidth||0, 600)
  //创建场景
  const scene = new Three.Scene();

  //创建相机
  camera = new Three.PerspectiveCamera(
    45,//视角
    (document.getElementById("canvss1")?.clientWidth||0) / 600,//宽高比
    0.1,//近平面
    1000//远平面
  )
  //设置相机位置
  camera.position.z = 5
  camera.position.y = 4
  camera.position.x = 4
  //设置相机看向哪里
  camera.lookAt(0, 0, 0)

  //创建立方体
  const geometry = new Three.BoxGeometry(1, 1, 1)
  //创建材质
  const masterial = new Three.MeshBasicMaterial({ color: 0x00ff00 });
  const parentMasterial = new Three.MeshBasicMaterial({ color: 0xff0000 })
  //创建网络
  const cube = new Three.Mesh(geometry, masterial)

  let parentCube = new Three.Mesh(geometry, parentMasterial)
  //设置立方体位置
  //cube.position.x=2
  cube.position.set(2, 0, 0)
  parentCube.position.set(-2, 0, 0)
  parentCube.scale.set(1, 1, 1)
  //设置旋转
  parentCube.rotation.x = Math.PI / 4
  //设置立方体放大
  cube.scale.set(1.5, 1.5, 1.5)
  //将网络添加到场景
  //scene.add(cube);
  scene.add(parentCube);
  parentCube.add(cube)
  //添加世界坐标轴
  const axeshelper = new Three.AxesHelper(5);
  scene.add(axeshelper)
  //cube.add(axeshelper)
  //导入轨道控制器
  const controls = new OrbitControls(camera, render.domElement)
  //设置带阻尼的惯性
  controls.enableDamping = true;
  //设置阻尼系数
  controls.dampingFactor = 0.05
  //设置旋转
  // controls.autoRotate=true
  //渲染函数
  const animate = () => {
    //旋转
    cube.rotation.x = cube.rotation.x + 0.01
    cube.rotation.y = cube.rotation.y + 0.01
    controls.update()
    //渲染
    render.render(scene, camera)
    requestAnimationFrame(animate);
  }
  document.getElementById("canvss1")?.appendChild(render.domElement)
  animate();
  }



onMounted(() => {
  canvsfun();
  window.addEventListener('resize', () => { 
    //渲染器随窗口改变而改变方法1
    // document.getElementById("canvss1")?.removeChild(render.domElement)
    // canvsfun();
    //渲染器销毁
    // render.dispose();
    if (window.innerHeight == window.screen.height) {
      data.value.isScreen = true
    } else {
      data.value.isScreen = false
      //渲染器随窗口改变而改变方法2
      //重置渲染器宽高比
      render.setSize(document.getElementById("canvss1")?.clientWidth||0, 600)
      console.log(document.getElementById("canvss1")?.clientWidth)
      //重置相机宽高比
      camera.aspect = (document.getElementById("canvss1")?.clientWidth||0) / 600
      //更新相机投影矩阵
      camera.updateProjectionMatrix();
    }
  })
})

</script>
<template>
  <div style="position: relative;">
    <div id="canvss1">
      <el-button @click="fullScreen()" style="position: absolute;top:0;left:0">
        <span v-if="data.isScreen">关闭全屏</span>
        <span v-else>打开全屏</span>
      </el-button>
    </div>
  </div>
</template>
<style scoped lang='less'>
#canvss1 {
  width: 100%;
  height: 600px;
  background-color: yellow;
}
</style>