<script setup lang="ts">
import { ref, isRef, shallowRef, onMounted } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
//导入tween
import TWEEN from "three/examples/jsm/libs/tween.module.js";
import gsap from 'gsap';
const data = ref({

})
let three = {
    render: new THREE.WebGLRenderer(),
    camera: new THREE.PerspectiveCamera(),
    scene: new THREE.Scene()
}
let controls:any=null;
function initthree() {
    const canvss6 = document.getElementById("canvss6")
    three.render.setSize(canvss6?.clientWidth || 0, canvss6?.clientHeight || 0)
    three.camera = new THREE.PerspectiveCamera(
        45,
        (canvss6?.clientWidth || 0) / (canvss6?.clientHeight || 0),
        0.1,
        1000
    )
    three.camera.position.set(10, 10, 10)
    three.camera.lookAt(0, 0, 0)
    const axeshelper = new THREE.AxesHelper(10)
    three.scene.add(axeshelper)
    controls = new OrbitControls(three.camera, three.render.domElement)
    controls.enableDamping = true

    //创建射线
    const raycaster = new THREE.Raycaster();
    //创建鼠标向量
    const mouse = new THREE.Vector2();
    //事件
    canvss6?.addEventListener("click", (event) => {
        var box = document.getElementById('canvss6')
        var rect = box?.getBoundingClientRect();
        mouse.x = (event.clientX - (rect?.left || 0)) / canvss6.clientWidth * 2 - 1;
        mouse.y = -((event.clientY - (rect?.top || 0)) / canvss6.clientHeight * 2) + 1
        raycaster.setFromCamera(mouse, three.camera)
        //计算物体和射线的焦点
        const intersects:any = raycaster.intersectObjects(three.scene.children);
        if (intersects[0].object.isselect) {
            intersects[0].object.isselect=false
            intersects[0].object.material.color.set(intersects[0].object.orcolor)
        } else {
            intersects[0].object.isselect=true
            intersects[0].object.orcolor=intersects[0].object.material.color.getHex(),
            intersects[0].object?.material.color.set(0x12ff00)
        }
    })
    canvss6?.appendChild(three.render.domElement)
}
function threeAddBox() {
    var group = new THREE.Group()
    const geometry1 = new THREE.BoxGeometry(1)
    const material1 = new THREE.MeshBasicMaterial({ color: 0xff0000 })
    const material2 = new THREE.MeshBasicMaterial({ color: 0xffff00 })
    const material3 = new THREE.MeshBasicMaterial({ color: 0xff00ff })
    const cube1 = new THREE.Mesh(geometry1, material1)
    group.add(cube1)

    const geometry2 = new THREE.BoxGeometry(2)

    const cube2 = new THREE.Mesh(geometry2, material2)
    cube2.position.set(4, 0, 0)
    group.add(cube2)

    const geometry3 = new THREE.BoxGeometry(2)

    const cube3 = new THREE.Mesh(geometry3, material3)
    cube3.position.set(0, 4, 2)
    group.add(cube3)
    three.scene.add(group)

    const tween=new TWEEN.Tween(cube1.position)
    tween.to({x:4},1000)
    tween.start();

    gsap.to(cube3.position,{
        x:4
    })
}
function animation() {
    TWEEN.update();
    controls.update()
    three.render.render(three.scene, three.camera)
    requestAnimationFrame(animation)
}
onMounted(() => {
    initthree()
    threeAddBox()
    animation()
})
</script>
<template>
    <div>
        <div id="canvss6"></div>
    </div>
</template>
<style scoped lang='less'>
#canvss6 {
    width: 100%;
    height: 600px;
    background-color: yellow;
    position: relative;
}
</style>