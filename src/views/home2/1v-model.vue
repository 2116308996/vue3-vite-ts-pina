<script setup lang='ts'>
import router from '@/router'
const data = ref({

})
onMounted(() => {
  
})
</script>
<template>
  <div>
    <div style="padding: 5px;">
      <text1-head :text="router.router.currentRoute.value.meta.title"></text1-head>

      <text2-head text="v-model"></text2-head>
      <span>npm install @vitejs/plugin-vue-jsx -D</span>
      <text-main>
        <template #a>

        </template>
        <template #b>

        </template>
      </text-main>


    </div>
  </div>
</template>
<style scoped lang='less'></style>