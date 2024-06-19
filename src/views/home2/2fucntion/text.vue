<script setup>
import { ref,isRef,shallowRef,onMounted } from 'vue'
const data = ref({
  count:0
})
onMounted(() => {

})
defineExpose({data})
</script>
<template>
  <div>
    <input type="text" v-model="data.count">
  </div>
</template>
<style scoped lang='less'>

</style>