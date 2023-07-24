<script setup lang='ts'>
import { ref} from 'vue'
import view1 from '@/views/home/3computeds/3computeds-1.vue'
import view2 from '@/views/home/3computeds/3computeds-2.vue'
const iskeep = ref(true)
</script>
<template>
  <div>
    <el-button @click="iskeep=!iskeep">切换</el-button>
    <keep-alive>
        <view1 v-if="iskeep"></view1>
        <view2 v-else></view2>
    </keep-alive>
  </div>
</template>
<style scoped lang='less'>

</style>