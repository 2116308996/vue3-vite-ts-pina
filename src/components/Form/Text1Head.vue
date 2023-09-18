<script setup lang='ts'>
import dark from '@/stores/dark'
const darkstore=dark()
const props = defineProps({
  text: {
    type: String,
    default: ""
  }
})
const aaa = () => {
  if (darkstore.dark == true) {
    return 'text2'
  } else {
    return 'text1'
  }
}
onMounted(() => {

})
</script>
<template>
  <div :class="aaa()" :id="props.text">
    {{ props.text }}
  </div>
</template>
<style scoped>
.text1 {
  font-size: 2.2rem;
  font-weight: 600;
  font-family: '微软雅黑';
  color: rgb(96, 98, 102);
  margin-bottom: 12px;
}

.text2 {
  font-size: 2.2rem;
  font-weight: 600;
  font-family: '微软雅黑';
  color: white;
  margin-bottom: 12px;
}
</style>