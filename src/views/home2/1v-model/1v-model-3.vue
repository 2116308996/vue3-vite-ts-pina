<script setup lang='ts'>
import type { Directive } from 'vue';
import { ref,isRef,shallowRef,onMounted } from 'vue'
//glob 懒加载
//globEager 静态加载
let imagelist:Record<string,{default:string}>=import.meta.glob('@/assets/images/*.*',{eager:true})
const data = ref({
  imagelist:[]
})
data.value.imagelist=Object.values(imagelist).map(v=>v.default) as []
const vLazy:Directive<HTMLImageElement,string>=async (el,bindstring)=>{
    const def=await import('@/assets/logo.svg')
    el.src=def.default
    const observer=new IntersectionObserver((enr)=>{
      //  console.log(enr)
        if(enr[0].intersectionRatio>0){
            setTimeout(() => {
                el.src=bindstring.value
            }, 2000);
            observer.unobserve(el)
        }
    })
    observer.observe(el)
}
onMounted(() => {
  
})
</script>
<template>
  <div class="box">
    <div class="box1">
        <img v-lazy="item" width="560" v-for="item in data.imagelist" />
    </div>
  </div>
</template>
<style scoped lang='less'>
.box{
    width: 100%;
    height: 600px;
    overflow: scroll;
    .box1{
        margin: 0 auto;
        text-align: center;
    }
}
</style>