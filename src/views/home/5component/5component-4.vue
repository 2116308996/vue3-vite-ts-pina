<script setup lang='ts'>
import {ref} from 'vue'
import view5 from '@/views/home/5component/5component-5.vue'
const name=ref('a')
</script>
<template>
  <div>
    <view5>
      <!-- <template v-slot:a>aaaaaaaaaaa</template>
      <template v-slot="{data,index}">{{ data }}--{{ index }}</template>
      <template v-slot:b>bbbbbbbbbbbb</template> -->
       <!-- 简写 -->
      <template #[name]>aaaaaaaaaaa</template>
      <template #default="{data,index}">{{ data }}--{{ index }}</template>
      <template #b>bbbbbbbbbbbb</template>
    </view5>
  </div>
</template>
<style scoped lang='less'>

</style>