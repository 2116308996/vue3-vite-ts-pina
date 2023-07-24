<script setup lang='ts'>
import { ref,isRef,shallowRef,onMounted } from 'vue'
const data = ref({

})
onMounted(() => {

})
</script>
<template>
  <div>
    zzzzzzzzzzzzzzzzzz
    <slot name="a"></slot>
    zzzzzzzzzzzzzzzzzz
    <slot index="index"></slot>
    zzzzzzzzzzzzzzzzzz
    <slot name="b"></slot>
  </div>
</template>
<style scoped lang='less'>

</style>