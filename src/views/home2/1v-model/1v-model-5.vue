<script setup lang='ts'>
import { ref,isRef,shallowRef,onMounted } from 'vue'
import usehooks from './hooks'
usehooks({
  el:"#img"
}).then((res)=>{
  console.log(res.baseUrl)
  data.value.imgurl=res.baseUrl
  //location.href=(res.baseUrl)
})
const data = ref({
  imgurl:''
})
onMounted(() => {

})
</script>
<template>
  <div>
    <img id="img" width="300" src="@/assets/images/1.jpg">
    <img id="img2" width="300" :src="data.imgurl">
  </div>
</template>
<style scoped lang='less'>

</style>