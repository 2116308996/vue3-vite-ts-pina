<script setup lang='ts'>
import { ref,isRef,shallowRef,onMounted } from 'vue'

const data = ref({
  color:'red'
})
const emit=defineEmits(['on-click'])
const change=()=>{
  emit('on-click',data.value)
}
onMounted(() => {

})
</script>
<template>
  <div>
    {{ data.color }}
    <button @click="change">事件</button>
  </div>
</template>
<style scoped lang='less'>

</style>