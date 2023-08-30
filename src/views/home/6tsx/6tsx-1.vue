<script setup lang='ts'>
import tsxapp from '@/tsx/App'
const data = ref({

})
const change=function(e:any){
console.log(e)
}
onMounted(() => {
  
})
</script>
<template>
  <div>
    <tsxapp name="zhuhui" @on-click="change"></tsxapp>
  </div>
</template>
<style scoped lang='less'>

</style>