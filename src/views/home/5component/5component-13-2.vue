<script setup lang='ts'>
import { ref,isRef,shallowRef,onMounted,getCurrentInstance } from 'vue'
const {proxy} :any=getCurrentInstance()
proxy?.$Bus.on('on-mitt',(res:any)=>{
  data.value.color=res
})
//一次接收多条
proxy?.$Bus.on('*',(type:any,str:any)=>{
  console.log(type,str,'=====')
})
//删除指定事件
//proxy.$Bus.off('on-mitt',(res:any)=>{})
//删除全部事件
//proxy.$Bus.all.clear()
const props=defineProps({
    color:{
        type:Object,
        default:null
    }
})
const data = ref({
  color:''
})
onMounted(() => {

})
</script>
<template>
  <div>
    A传父，父再传B{{ props.color }}
    Mitt兄弟传参{{ data.color }}
  </div>
</template>
<style scoped lang='less'>

</style>