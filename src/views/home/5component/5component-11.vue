<script setup lang='ts'>
import { ref,onMounted,watch } from 'vue'
import _ from 'lodash'
import 'animate.css'
import gsap from 'gsap'
import { provide } from 'vue';
let data = ref(Array.apply(null,{length:81} as number[]).map((item,index)=>{
    return {
        id:index,
        number:index+1
    }
}))
const random=()=>{
      data.value= _.shuffle(data.value);
}
const pushdata=()=>{
    data.value.push({id:data.value.length,number:data.value.length+1})
}
const popdata=()=>{
    data.value.pop()
}
const valuea=ref({
    count:0,
    num:0
})
watch(()=>valuea.value.count,(newval,oldval)=>{
    gsap.to(valuea.value,{
        duration:1,
        num:newval
    })
})
onMounted(() => {
  console.log(data)
})
</script>
<template>
  <div>
    <button @click="random">random</button>
    <button @click="pushdata">push</button>
    <button @click="popdata">pop</button>
    <transition-group class="wraps" tag="div"
    move-class="mmm" 
    leave-active-class="animate__animated animate__backOutDown" 
      enter-active-class="animate__animated animate__backInDown" >
        <div class="itemss" :key="item.id" v-for="item in data">{{ item.number }}</div>
    </transition-group>

    <input type="text" v-model="valuea.count">
    {{ valuea.num.toFixed(0) }}
  </div>
</template>
<style scoped lang='less'>
  .wraps{
    display: flex;
    flex-wrap: wrap;
    width: calc(27px * 9);
    .itemss{
        width: 25px;
        height: 25px;
        border: 1px black solid;
        line-height: 25px;
        text-align: center;
    }
  }
  .mmm{
    transition: all 1s;
  }
</style>