<script setup lang='ts'>
import { ref,isRef,shallowRef,onMounted } from 'vue'
import * as Three from "three";
//轨道控制器
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { GUI } from "three/examples/jsm/libs/lil-gui.module.min.js"
import { FlyControls } from 'three/addons/controls/FlyControls.js';
import { MapControls } from 'three/addons/controls/MapControls.js';
//加载器
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import {RGBELoader} from 'three/examples/jsm/loaders/RGBELoader.js'
import { env } from 'process';
const data = ref({

})
//创建渲染器
const render = new Three.WebGLRenderer();
var camera = new Three.PerspectiveCamera();
const canvsfun = () => {
    //设置渲染器大小
    render.setSize(document.getElementById("canvss5")?.clientWidth || 0, 600)
    //创建场景
    const scene = new Three.Scene();

    //创建相机
    camera = new Three.PerspectiveCamera(
        45,//视角
        (document.getElementById("canvss5")?.clientWidth || 0) / 600,//宽高比
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
    const geometry = new Three.BoxGeometry(3, 1, 3)
    const cril=new Three.SphereGeometry(1,32,32)
    //创建纹理加载器
    let textureLoader = new Three.TextureLoader();
    //加载纹理
    let cubetexture = textureLoader.load("/public/image/13.jpg");
    //启用3D环绕背景
    cubetexture.mapping = Three.EquirectangularReflectionMapping
    //创建材质
    const masterial = new Three.MeshBasicMaterial({
        color: 0xffffff
    });
    const masterialcril = new Three.MeshBasicMaterial({
        color: 0xff00ff
    });
    //创建网络
    const cube = new Three.Mesh(geometry,masterial)
    const cube2=new Three.Mesh(cril,masterialcril)
    //设置立方体放大
    cube.scale.set(1.5, 1.5, 1.5)
    cube.position.x=3
    cube2.position.x=-3
    //将网络添加到场景
    cube.add(cube2)
    scene.add(cube);

   scene.background=new Three.Color(0x999999)
    //添加世界坐标轴
    const axeshelper = new Three.AxesHelper(5);
    scene.add(axeshelper)
    const gridHelper = new Three.GridHelper(20, 20)
    scene.add(gridHelper)
    //导入轨道控制器
    const controls = new OrbitControls(camera, render.domElement)
   // const mapControls=new MapControls(camera,render.domElement)
    //设置带阻尼的惯性
    controls.enableDamping = true;
    //创建雾
    scene.fog=new Three.Fog(0xcccccc,0.1,50)

    const gltf=new GLTFLoader();
    gltf.load("/public/gltf/上衣.glb",(gltf)=>{
        scene.add(gltf.scene)
        console.log(gltf.scene.children[0])
        render.render(scene, camera);
    })
  //  let rgb=new RGBELoader();
    // rgb.load("/public/image/ikun.jpg",(eve)=>{
    //     eve.mapping=Three.EquirectangularReflectionMapping
    //     scene.environment=eve
    // })
    //渲染函数
    const animate = () => {
        controls.update()
        //mapControls.update()
        //渲染
        render.render(scene, camera)
        requestAnimationFrame(animate);
    }
    document.getElementById("canvss5")?.appendChild(render.domElement)
    animate();
}
onMounted(() => {
    canvsfun();
})
</script>
<template>
  <div>
    <div id="canvss5"></div>
  </div>
</template>
<style scoped lang='less'>
#canvss5 {
    width: 100%;
    height: 600px;
    background-color: yellow;
    position: relative;
}
</style>