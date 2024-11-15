<script setup lang='ts'>
import { ref,isRef,shallowRef,onMounted } from 'vue'
const data = ref({

})
let str="zhuhui"
type s=number[]| B
var a:s={a:"123"}
a=[1,2,3]
interface B{
   a: string
}
type num=1 extends number ? 1:0
type num2=1 extends never ? 1:0
var b:num=1
type A=void | never |number
function xm():never{
  throw new Error("错误")
}
onMounted(() => {
xm()
})
</script>
<template>
  <div>
  </div>
</template>
<style scoped lang='less'>

</style>