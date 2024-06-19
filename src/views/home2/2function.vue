<script setup>
import router from '@/router'
import {ref} from 'vue'
import view1 from '@/views/home2/2fucntion/2function-1.vue'
import viewcode1 from '@/views/home2/2fucntion/2function-1.vue?raw'
import view2 from '@/views/home2/2fucntion/text.vue'
const data = ref({
count:0
})
const views=ref(null)
watch(()=>data.value.count,(ne,ol)=>{
   views.value.data.count=ne
   console.log(ne, views.value.data.count)
})
onMounted(() => {
  
})
</script>
<template>
  <div>
    <div style="padding: 5px;">
      <text1-head :text="router.router.currentRoute.value.meta.title"></text1-head>
      <text2-head text="全局函数和变量"></text2-head>
      <text-main>
        <template #a>
            <view1></view1>
        </template>
        <template #b>
            <view-code :code="viewcode1"></view-code>
        </template>
      </text-main>
    </div>
    {{ views?.data.count }}
    <div><input type="text" v-model="data.count"></div>
    <view2 ref="views"></view2>
  </div>
</template>
<style scoped lang='less'></style>