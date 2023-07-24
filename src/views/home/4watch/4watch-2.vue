<script setup lang='ts'>
import { ref,watchEffect,onMounted } from 'vue'
const data1 = ref({
  name:"zhuhui"
})
const data2 = ref({
  name:"ssssss"
})
const stop= watchEffect((fu)=>{
    fu(()=>{
        console.log('before')
    })
    console.log(data1.value.name)
},{
    flush:'post',
    // onTrigger(e){
    //     debugger
    // }
})
const stopwatch=()=>{
    stop()
}
onMounted(() => {

})
</script>
<template>
  <div>
    <el-input v-model="data1.name"></el-input>
    <el-input v-model="data2.name"></el-input>
    <el-button @click="stopwatch">停止监听</el-button>
  </div>
</template>
<style scoped lang='less'>

</style>