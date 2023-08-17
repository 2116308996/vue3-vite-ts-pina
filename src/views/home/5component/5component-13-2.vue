<script setup lang='ts'>
import { ref,isRef,shallowRef,onMounted } from 'vue'
const props=defineProps({
    color:{
        type:Object,
        default:null
    }
})
const data = ref({

})
onMounted(() => {

})
</script>
<template>
  <div>
    {{ props.color.color }}
  </div>
</template>
<style scoped lang='less'>

</style>