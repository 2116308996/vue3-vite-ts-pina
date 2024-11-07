<script setup lang='ts'>
import { ref,isRef,shallowRef,onMounted } from 'vue'
const data = ref({

})
let num:Number =new Number(1)
let date:Date=new Date()
let reg:RegExp=new RegExp(/\w/)
let error:Error=new Error('错了')
let xml:XMLHttpRequest=new XMLHttpRequest()

let div:HTMLDivElement|null=document.querySelector('div')
let input:HTMLInputElement|null=document.querySelector('input')
let list:NodeList=document.querySelectorAll('div')
let list2:NodeListOf<HTMLDivElement|HTMLElement>=document.querySelectorAll('div footer')

let local:Storage=localStorage
let lo:Location=location
let promise:Promise<number>=new Promise(resolve=>resolve(1))
promise.then(res=>{
  console.log(res)
})
let cookie:string=document.cookie //请求头里面的cookie
function initCanvas(){
  let canvas:HTMLCanvasElement =document.querySelector("#canvas") as HTMLCanvasElement
  let ctx:CanvasRenderingContext2D=canvas.getContext("2d") as  CanvasRenderingContext2D
  let str:string[]="wwsdasfas12345".split('')
  let arr=Array(Math.ceil(canvas.width/10)).fill(0)
  console.log(arr,arr.join(","))
  const rain=()=>{
    ctx.fillStyle='rgba(0,0,0,0.05)'
    ctx.fillRect(0,0,canvas.width,canvas.height)
   ctx.fillStyle='#0f0'
    arr.forEach((item,index)=>{
      ctx.fillText(str[Math.floor(Math.random()*str.length)],index*10,item+10)
      arr[index]=item>canvas.height||item>500 * Math.random()?0:item+10
    })
  }
  setInterval(rain,40)
  //!非空断言
 // console.log(screen)
 // canvas!.width=screen.availWidth 
 // canvas!.height=screen.availHeight
}

onMounted(() => {
  initCanvas()
  console.log(cookie)
})
</script>
<template>
  <div>
    <canvas id="canvas"></canvas>
  </div>
</template>
<style scoped lang='less'>
#canvas{
width: 100%;
height: 300px;
}
</style>