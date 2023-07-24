<script setup lang='ts'>
import { ref } from 'vue'
import view1 from '@/views/home/5component/5component-1.vue'
import view2 from '@/views/home/5component/5component-2.vue'
import view3 from '@/views/home/5component/5component-3.vue'
const data = ref([
    {
        name:'A组件',
        com:view1
    },
    {
        name:'B组件',
        com:view2
    },
    {
        name:'C组件',
        com:view3
    },
])
const comId=ref(view1)
const active=ref(0)
const fun=(val:any,index:number)=>{
    comId.value=val
    active.value=index
}

</script>
<template>
  <div>
    <el-button :class="index==active?'a':'b'" v-for="(item,index) in data" @click="fun(item.com,index)">{{ item.name }}</el-button>
    <component :is="comId"></component>
  </div>
</template>
<style scoped lang='less'>
  .a{
    background-color: aqua;
  }
  .b{
    background-color: white;
  }

  .tabs{
    cursor: pointer;
  }
</style>