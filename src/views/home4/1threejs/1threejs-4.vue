<script setup lang='ts'>
import { ref, isRef, shallowRef, onMounted } from 'vue'
import * as Three from "three";
//轨道控制器
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { GUI } from "three/examples/jsm/libs/lil-gui.module.min.js"
const data = ref({
    isop: true
})
//创建渲染器
const render = new Three.WebGLRenderer();
var camera = new Three.PerspectiveCamera();
const canvsfun = () => {
    //设置渲染器大小
    render.setSize(document.getElementById("canvss4")?.clientWidth || 0, 600)
    //创建场景
    const scene = new Three.Scene();

    //创建相机
    camera = new Three.PerspectiveCamera(
        45,//视角
        (document.getElementById("canvss4")?.clientWidth || 0) / 600,//宽高比
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
    const geometry = new Three.BoxGeometry(3, 1, 20)
    //创建纹理加载器
    let textureLoader = new Three.TextureLoader();
    //加载纹理
    let texture = textureLoader.load("/public/image/ikun.jpg");
    // texture.colorSpace=Three.LinearSRGBColorSpace
    // texture.colorSpace=Three.SRGBColorSpace
    //texture.colorSpace=Three.NoColorSpace
    let cubetexture = textureLoader.load("/public/image/13.jpg");
    //启用3D环绕背景
    cubetexture.mapping = Three.EquirectangularReflectionMapping
    scene.background =  cubetexture
    //scene.background = new Three.Color(0x999999)
    //创建材质
    const masterial = new Three.MeshBasicMaterial({
        color: 0xffffff,
        map: texture,
        // envMap:texture
    });
    const masterial1 = new Three.MeshBasicMaterial({
        color: 0xffffff,
        map: textureLoader.load("/public/image/13.jpg")
    });
    const masterial2 = new Three.MeshBasicMaterial({
        color: 0xfff0ff
    });
    //创建网络
    const cube = new Three.Mesh(geometry, [masterial, masterial1, masterial2, masterial1, masterial, masterial1])
    //设置立方体放大
    cube.scale.set(1.5, 1.5, 1.5)
    //将网络添加到场景
    scene.add(cube);
    //添加世界坐标轴
    const axeshelper = new Three.AxesHelper(5);
    scene.add(axeshelper)
    const gridHelper = new Three.GridHelper(20, 20)
    scene.add(gridHelper)
    //导入轨道控制器
    const controls = new OrbitControls(camera, render.domElement)
    //设置带阻尼的惯性
    controls.enableDamping = true;
    //创建雾
    scene.fog=new Three.Fog(0xcccccc,0.1,50)
    //雾的浓度
    //scene.fog=new Three.FogExp2(0xcccccc,0.5)

    //创建GUI
    const gui = new GUI();
    document.getElementById('canvss4')?.appendChild(gui.domElement)
    gui.domElement.style.position = "absolute"
    // gui.domElement.style.left='0'
    gui.add(cubetexture, "mapping").name("映射贴图1")
    gui.add(data.value, "isop").name("映射贴图2").onChange(() => {
        if (data.value.isop) {
            cubetexture.mapping = Three.EquirectangularReflectionMapping
        } else {
            cubetexture.mapping = Three.UVMapping
        }
    })
    gui.add(texture, "colorSpace", {
        sRgb: Three.SRGBColorSpace,
        liner: Three.LinearSRGBColorSpace,
        null: Three.NoColorSpace
    })
        .onChange(() => {
            texture.needsUpdate = true
        })
    //渲染函数
    const animate = () => {
        controls.update()
        //渲染
        render.render(scene, camera)
        requestAnimationFrame(animate);
    }
    document.getElementById("canvss4")?.appendChild(render.domElement)
    animate();
}
onMounted(() => {
    canvsfun();
})
</script>
<template>
    <div>
        <div id="canvss4"></div>
    </div>
</template>
<style scoped lang='less'>
#canvss4 {
    width: 100%;
    height: 600px;
    background-color: yellow;
    position: relative;
}
</style>