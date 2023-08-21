<script setup lang='ts'>
import { ref,isRef,shallowRef,onMounted } from 'vue'
import router from '@/router'
const data = ref({

})
onMounted(() => {

})
</script>
<template>
   <div style="padding: 5px;">
    <text1-head  :text="router.router.currentRoute.value.meta.title"></text1-head>
    </div>
</template>
<style scoped lang='less'>

</style>