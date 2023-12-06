<script setup lang='ts'>
import { ref,isRef,shallowRef,onMounted,getCurrentInstance } from 'vue'
const {proxy}:any =getCurrentInstance()
//main.ts
// app.config.globalProperties.$func=()=>{
//   return "zhuhui"
// }
const data = ref({

})
onMounted(() => {

})
</script>
<template>
  <div>
    <div>{{ proxy.$func() }}</div>
  </div>
</template>
<style scoped lang='less'>

</style>