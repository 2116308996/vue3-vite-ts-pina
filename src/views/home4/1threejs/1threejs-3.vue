<script setup lang='ts'>
import { ref,isRef,shallowRef,onMounted } from 'vue'
import * as Three from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
const data = ref({

})
const render=new Three.WebGLRenderer();
var camera=new Three.PerspectiveCamera();
const canvsfun=()=>{
    render.setSize(document.getElementById("canvss3")?.clientWidth||0,600)
    document.getElementById("canvss3")?.appendChild(render.domElement)
    const scene=new Three.Scene();
    camera=new Three.PerspectiveCamera(
        45,
        (document.getElementById("canvss3")?.clientWidth||0)/600,
        0.1,
        1000
    )
    camera.position.set(5,4,4)

    const geometry=new Three.BoxGeometry(2,1,1);
    const masterial5=new Three.MeshBasicMaterial({color:"red"})
    const masterial6=new Three.MeshBasicMaterial({color:0xcccccc})
    const masterial7=new Three.MeshBasicMaterial({color:0xccff00})
    const masterial8=new Three.MeshBasicMaterial({color:0xccffff})
    const masterial9=new Three.MeshBasicMaterial({color:0xcc00ff})
    const masterial10=new Three.MeshBasicMaterial({color:0x12aacc})
    
    const cube=new Three.Mesh(geometry,[masterial5,masterial6,masterial7,masterial8,masterial9,masterial10])
    scene.add(cube)
    
    //创建三角形
    const geometry2=new Three.BufferGeometry();
    //逆时针为正面  顺时针为反面
   // const vertices=new Float32Array([-1,-1,0,1,-1,0,1,2,0])
   const vertices=new Float32Array([
    -1,-1,0,1,-1,0,1,2,0
    ,1,2,0,-1,2,0,-1,-1,0
   ])
    geometry2.setAttribute("position",new Three.BufferAttribute(vertices,3))
    const masterial2=new Three.MeshBasicMaterial({color:"green",side:Three.DoubleSide,wireframe:true})
    const masterial4=new Three.MeshBasicMaterial({color:"white",side:Three.DoubleSide,wireframe:true})
    
    //  三角面起始点索引  包含多少个顶点  材质队列索引 
    geometry2.addGroup(0,3,0)
    geometry2.addGroup(3,3,1)
    const cube2=new Three.Mesh(geometry2,[masterial2,masterial4])
    scene.add(cube2)
    console.log(geometry2)

    //使用索引
    const vertices3=new Float32Array([-1.5,-1.5,0,1.5,-1.5,0,1.5,1.5,0,-1.5,1.5,0])
    const geometry3=new Three.BufferGeometry();
    geometry3.setAttribute("position",new Three.BufferAttribute(vertices3,3))
    const indices=new Uint16Array([0,1,2,2,3,0])
    geometry3.setIndex(new Three.BufferAttribute(indices,1))
    //设置两个顶点组形成两个材质
   geometry3.addGroup(0,3,0)
    geometry3.addGroup(3,3,1)
    const masterial3=new Three.MeshBasicMaterial({color:"yellow",side:Three.DoubleSide,wireframe:true})
   
    const cube3=new Three.Mesh(geometry3,[masterial2,masterial3])
    scene.add(cube3)


    const axeshelper=new Three.AxesHelper(5);
    scene.add(axeshelper)

    const controls=new OrbitControls(camera,render.domElement)
    controls.enableDamping=true

    const animate=()=>{
        controls.update()
        render.render(scene,camera)
        requestAnimationFrame(animate)
    }
    animate()
}
onMounted(() => {
    canvsfun();
})
</script>
<template>
  <div>
    <div id="canvss3"></div>
  </div>
</template>
<style scoped lang='less'>
    #canvss3{
        width: 100%;
        height: 600px;
        background-color: yellow;
        position: relative;
    }
</style>