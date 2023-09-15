<script setup lang='ts'>
import { ref,isRef,shallowRef,onMounted } from 'vue'
import view1 from '@/views/home2/1v-model/1v-model-1-1.vue'
const data = ref({
   isshow:false,
   data:'aaaa'
})
const open=()=>{
  data.value.isshow=!data.value.isshow
}
const conslogdata=()=>{
    console.log(data.value.data)
}
onMounted(() => {
   
})
</script>
<template>
  <div>
    <el-button @click="open">打开</el-button>
    <el-button @click="conslogdata">输出data</el-button>
    <view1 v-model:show="data.isshow" v-model="data.data"/>
  </div>
</template>
<style scoped lang='less'>

</style>