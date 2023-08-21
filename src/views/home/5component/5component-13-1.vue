<script setup lang='ts'>
import { ref,isRef,shallowRef,onMounted } from 'vue'
import {getCurrentInstance} from 'vue'
const instance=getCurrentInstance()
const data = ref({
  color:'red'
})
const emit=defineEmits(['on-click'])
const change=()=>{
  emit('on-click',data.value)
}
const change2=()=>{
  instance?.proxy?.$bus.emit('on-mitt',data.value)
}
onMounted(() => {

})
</script>
<template>
  <div>
    {{ data.color }}
    <button @click="change">事件</button>
    <button @click="change2">事件2</button>
  </div>
</template>
<style scoped lang='less'>

</style>