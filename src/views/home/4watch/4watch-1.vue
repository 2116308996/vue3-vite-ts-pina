<script setup lang='ts'>
import { ref,watch } from 'vue'
const data1 = ref("张三")
const data2 = ref("李四")
const data3=ref({
  name:'王五'
})
const data4=ref({
  name:'老六',
  age:22
})
watch([data1,data2],(newval,oldval)=>{
  console.log(newval,oldval)
})
//监听对象时，返回的新值与旧值一样
watch(data3,(newval,oldval)=>{
  console.log(newval,oldval)
},{
  deep:true,//reactive深度监听不需要开启deep
  immediate:false,//为true时，会先执行一次callback,默认为false
  flush:"pre"//pre组件更新之前执行，sync同步执行，post组件更新之后执行
})
//监听单一属性
watch(()=>data4.value.name,(newval,oldval)=>{
  console.log(newval,oldval)
})
</script>
<template>
  <div>
    <el-input v-model="data1"></el-input>
    <el-input v-model="data2"></el-input>
    <el-input v-model="data3.name"></el-input>
    <el-input v-model="data4.name"></el-input>
    <el-input v-model="data4.age"></el-input>
  </div>
</template>
<style scoped lang='less'>

</style>