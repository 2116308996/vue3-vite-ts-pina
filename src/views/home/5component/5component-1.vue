<script setup lang='ts'>
import { ref,isRef,shallowRef,onMounted } from 'vue'
import view2 from '@/views/home/5component/5component-2.vue'
const data = ref({
  name1:"张三",
  age1:"22",
  name2:"李四",
})
const refview2=ref()
//ts
//const refview3=ref<InstanceType<typeof view2>>()
const changename1=()=>{
    data.value.name1+='父'
}
const changename2=(val:any)=>{
    data.value.name1+=val
}
const changename3=()=>{
    data.value.name2+='父'
}
const changefun=()=>{
  refview2.value.fun1()

}
onMounted(() => {

})
</script>
<template>
  <div>
    父组件：
    <p>{{ data.name1 }}<el-button @click="changename1">给子组件传值</el-button></p>
    <p>{{ data.age1 }}<el-button @click="changefun">使用子组件函数</el-button></p>
    <p>{{ data.name2 }}<el-button @click="changename3">给子组件传值</el-button></p>
    子组件：
    <view2 ref="refview2" v-model="data.name2" :name1="data.name1" @changename="changename2"></view2>
  </div>
</template>
<style scoped lang='less'>

</style>