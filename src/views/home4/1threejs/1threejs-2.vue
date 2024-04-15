<script setup lang='ts'>
import { ref,isRef,shallowRef,onMounted } from 'vue'
import * as Three from "three"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js"
import {GUI} from "three/examples/jsm/libs/lil-gui.module.min.js"
const data = ref({

})
//创建渲染器
const render = new Three.WebGLRenderer();
var camera = new Three.PerspectiveCamera();
const canvsfun = () => {
  //设置渲染器大小
  render.setSize(document.getElementById("canvss2")?.clientWidth||0, 600)
  //创建场景
  const scene = new Three.Scene();

  //创建相机
  camera = new Three.PerspectiveCamera(
    45,//视角
    (document.getElementById("canvss2")?.clientWidth||0) / 600,//宽高比
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
  
  //创建GUI
  const gui=new GUI();
  document.getElementById('canvss2')?.appendChild(gui.domElement)
  gui.domElement.style.position="absolute"
  // gui.domElement.style.left='0'
  gui.add(eventObj,"Fullscreen").name("全屏")
  gui.add(eventObj,"ExitFullscreen")
  let folder=gui.addFolder("立方体位置")
  folder.add(cube.position,"x",-5,5).name("立方体x轴位置")
  .onChange((val)=>{
    console.log(val)
  })
  .onFinishChange((val)=>{
    console.log(val)
  })
  folder.add(cube.position,"y",-5,5).name("立方体y轴位置")
  folder.add(cube.position,"z",-5,5).name("立方体z轴位置")
  gui.add(parentMasterial,"wireframe").name("父元素线框模式")
  gui.add(masterial,"wireframe").name("子元素线框模式")
  //gui.add(cube.position,"x").min(5).max(5).step(1).name("立方体x轴位置")

  let colorParams={
    cubeColor:"#ff0033"
  }
  gui.addColor(colorParams,"cubeColor").name("立方体颜色")
  .onChange((val)=>{
    cube.material.color.set(val)
  })
  //渲染函数
  const animate = () => {
    controls.update()
    //渲染
    render.render(scene, camera)
    requestAnimationFrame(animate);
  }
  document.getElementById('canvss2')?.appendChild(render.domElement)
  animate();
  }
const eventObj={
    Fullscreen:()=>{
        document.getElementById("canvss2")?.requestFullscreen()
        .then(() => {
        console.log("成功")
        render.setSize(document.getElementById("canvss2")?.clientWidth||0,document.getElementById("canvss2")?.clientHeight||0)
        //重置相机宽高比
        camera.aspect = (document.getElementById("canvss2")?.clientWidth||0) / (document.getElementById("canvss2")?.clientHeight||0)
        //更新相机投影矩阵
        camera.updateProjectionMatrix();
      });
    },
    ExitFullscreen:()=>{
        document.exitFullscreen();
    }
}
onMounted(() => {
    canvsfun();
    window.addEventListener('resize', () => { 
    //渲染器随窗口改变而改变方法1
    // document.getElementsByClassName('canvss')[0].removeChild(render.domElement)
    // canvsfun();
    //渲染器销毁
    // render.dispose();
    if (window.innerHeight != window.screen.height) {
      //渲染器随窗口改变而改变方法2
      //重置渲染器宽高比
      render.setSize(document.getElementById("canvss2")?.clientWidth||0, 600)
      //重置相机宽高比
      camera.aspect = (document.getElementById("canvss2")?.clientWidth||0) / 600
      //更新相机投影矩阵
      camera.updateProjectionMatrix();
    }
  })
})
</script>
<template>
    <div style="position: relative;">
      <div id="canvss2"></div>
    </div>
  </template>
  <style scoped lang='less'>
  #canvss2 {
    width: 100%;
    height: 600px;
    background-color: yellow;
    position: relative;
  }
  </style>