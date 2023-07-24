<script setup lang='ts'>
import { ref,isRef,shallowRef,onMounted } from 'vue'
import view2 from '@/views/home/5component/5component-6.vue'

const isshow=ref(false)
</script>
<template>
  <div class="box2">
    <el-button @click="isshow=!isshow">按钮</el-button>
    <Teleport :disabled="false" to="#headbox">
      <div class="dialog" v-if="isshow">
    <view2></view2>
    </div>
    </Teleport>
  </div>
</template>
<style scoped lang='less'>
.box2{
    width: 100%;
    height: 50px;
    position: relative;
}
.dialog{
    width: 500px;
    height: 200px;
    background-color: yellow;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
</style>