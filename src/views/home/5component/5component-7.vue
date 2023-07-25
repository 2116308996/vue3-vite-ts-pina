<script setup lang='ts'>
import { ref } from 'vue'
import view22 from '@/views/home/5component/5component-6.vue'

const isshows = ref(false)
</script>
<template>
  <div class="box2">
    <el-button @click="isshows = !isshows">按钮</el-button>
    <Teleport :disabled="false" to="body">
      <div v-if="isshows" class="dialog">
       <view22></view22>
      </div>
    </Teleport>
  </div>
</template>
<style scoped lang='less'>
.box2 {
  width: 100%;
  height: 50px;
  position: relative;
}

.dialog {
  width: 500px;
  height: 200px;
  background-color: yellow;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>