<script setup lang='ts'>
import { ref, isRef, shallowRef, onMounted, computed } from 'vue'
import 'animate.css'
const props = defineProps({
  modelValue: {
    type: String,
    default: null
  },
  show: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['update:show', 'update:modelValue'])
const mydata = computed<string>({
  get() {
    return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val)
  }
})
const del = () => {
  emit('update:show', false)
}
onMounted(() => {

})
</script>
<template>
  <Transition 
    leave-active-class="animate__animated animate__rotateOut"
    enter-active-class="animate__animated animate__rotateIn">
    <div class="box" v-show="props.show">
      <div class="box1">
        <el-button @click="del">关闭</el-button>
      </div>
      <el-input v-model="mydata"></el-input>
    </div>
  </Transition>
</template>
<style scoped lang='less'>
.box {
  width: 100%;
  height: 200px;
  border: 1px black solid;
  padding: 5px;
  box-sizing: border-box;
  margin-top: 10px;

  .box1 {
    float: right;
    margin-bottom: 5px;
  }
}
</style>