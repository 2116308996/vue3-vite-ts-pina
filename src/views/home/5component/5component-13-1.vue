<script setup lang='ts'>
import { ref,isRef,shallowRef,onMounted } from 'vue'
import {getCurrentInstance} from 'vue'
const {proxy}:any=getCurrentInstance()
const data = ref({
  color:'red'
})
const emit=defineEmits(['on-click'])
const change=()=>{
  if(data.value.color){
    data.value.color=''
  }else{
    data.value.color='red'
  }
  emit('on-click',data.value.color)
}
const change2=()=>{
  if(data.value.color){
    data.value.color=''
  }else{
    data.value.color='red'
  }
  proxy?.$Bus.emit('on-mitt',data.value.color)
  proxy?.$Bus.emit('on-mitt2',data.value.color)
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