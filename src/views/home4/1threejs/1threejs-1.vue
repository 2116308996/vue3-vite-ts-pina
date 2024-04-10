<script setup lang='ts'>
import { ref, isRef, shallowRef, onMounted } from 'vue'
import * as Three from "three";
//轨道控制器
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js"
import { threadId } from 'worker_threads';
const data = ref({

})
//创建渲染器
const render = new Three.WebGLRenderer();
const canvsfun = () => {
  //设置渲染器大小
  render.setSize(document.getElementsByClassName("canvss")[0].clientWidth, 600)
  //创建场景
  const scene = new Three.Scene();

  //创建相机
  const camera = new Three.PerspectiveCamera(
    45,//视角
    document.getElementsByClassName("canvss")[0].clientWidth / 600,//宽高比
    0.1,//近平面
    1000//远平面
  )
  //设置相机位置
  camera.position.z = 5
  camera.position.y=4
  camera.position.x=4
  //设置相机看向哪里
  camera.lookAt(0, 0, 0)

  //创建立方体
  const geometry = new Three.BoxGeometry(1,1,1)
  //创建材质
  const masterial = new Three.MeshBasicMaterial({ color: 0x00ff00 });
  //创建网络
  const cube = new Three.Mesh(geometry, masterial)
  //将网络添加到场景
  scene.add(cube);
  
  //添加世界坐标轴
  const axeshelper=new Three.AxesHelper(5);
  scene.add(axeshelper)
  //导入轨道控制器
  const controls=new OrbitControls(camera,render.domElement)
  //设置带阻尼的惯性
  controls.enableDamping=true;
  //设置阻尼系数
  controls.dampingFactor=0.05
  //设置旋转
  controls.autoRotate=true
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
  document.getElementsByClassName('canvss')[0].appendChild(render.domElement)
  animate();
}



onMounted(() => {
  canvsfun();
  window.onresize = () => {
    document.getElementsByClassName('canvss')[0].removeChild(render.domElement)
    // render.dispose();
    canvsfun();
  }
})

</script>
<template>
  <div>
    <div class="canvss"></div>
  </div>
</template>
<style scoped lang='less'>
.canvss {
  width: 100%;
  height: 600px;
  background-color: yellow;
}
</style>