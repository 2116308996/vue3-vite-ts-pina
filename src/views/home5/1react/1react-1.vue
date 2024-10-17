<script setup lang='ts'>
import { ref,isRef,shallowRef,onMounted } from 'vue'
import myReactComponentName from './1react-2';
const data = ref({
  name:"zhuhui"
})
onMounted(() => {

})
function parentClickHandle(data:any){
  console.log(data);
}
</script>
<template>
  <div>
    123456
    <myReactComponentName :name="data.name" @MyEvent="parentClickHandle"></myReactComponentName>
  </div>
</template>
<style scoped lang='less'>
.aaa{
  background-color: red;
}
</style>