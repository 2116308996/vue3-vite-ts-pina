<script setup lang='ts'>
import { ref,isRef,shallowRef,onMounted } from 'vue'
import view1 from '@/views/home/5component/5component-13-1.vue'
import view2 from '@/views/home/5component/5component-13-2.vue'
const data = ref({

})
const changea=(res:object)=>{
  data.value=res
  console.log(data)
}
onMounted(() => {

})
</script>
<template>
  <div>
    <view1 @on-click="changea"></view1>
    <view2  :color="data"></view2>
  </div>
</template>
<style scoped lang='less'>

</style>