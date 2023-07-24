<script setup lang='ts'>
import { ref } from 'vue'
const data = ref([{
  name:'aaaa'
},
{
  name:'bbbb'
},
{
  name:'cccc'
}])

</script>
<template>
  <div>
    zzzzzzzzzzzzzzzzzz
    <div>
      <slot name="a"></slot>
    </div>
    zzzzzzzzzzzzzzzzzz
    <div v-for="item, index in data">
      <slot :index="index" :data="item"></slot>
    </div>
    zzzzzzzzzzzzzzzzzz
    <div>
      <slot name="b"></slot>
    </div>
  </div>
</template>
<style scoped lang='less'></style>