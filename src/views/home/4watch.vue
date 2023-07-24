<script setup lang='ts'>
import { ref,isRef,shallowRef,onMounted } from 'vue'
import view1 from '@/views/home/4watch/4watch-1.vue'
import viewcode1 from '@/views/home/4watch/4watch-1.vue?raw'
import view2 from '@/views/home/4watch/4watch-2.vue'
import viewcode2 from '@/views/home/4watch/4watch-2.vue?raw'
import router from '@/router'
onMounted(()=>{
    console.log()
})
</script>
<template>
  <div style="padding: 5px;">
    <text1-head  :text="router.router.currentRoute.value.meta.title"></text1-head>
    <text2-head  text="Watch"></text2-head>
    <text-main>
      <template v-slot:a>
        <view1></view1>
      </template>
      <template v-slot:b>
        <view-code :code="viewcode1"></view-code>
      </template> 
    </text-main>

    <text2-head  text="WatchEffect"></text2-head>
    <text-main>
      <template v-slot:a>
        <view2></view2>
      </template>
      <template v-slot:b>
        <view-code :code="viewcode2"></view-code>
      </template> 
    </text-main>
  </div>
</template>
<style scoped lang='less'>

</style>