<script setup lang='ts'>
import { ref,isRef,shallowRef,onMounted } from 'vue'
const data = ref({

})
let phone:number|string='010-795612'
let fun=function(type:number|boolean):boolean{
    return !!type
}
interface Pop{
    name:string
    age:number
}
interface Man{
    sex:number
}
const getName=(man:Pop & Man):void=>{
      console.log(man)
}
let fun2=(num:number|string):void=>{
    console.log((num as string).length)
}
interface A{
    name:string
}
interface B{
    sex:number
}
// as 类型断言，他不是类型转换，
function fun3(type:A|B):void{
   console.log((<A>type).name)
    console.log((type as A).name)
    console.log((type as any).name)
}
function fun4(type:any):boolean{
    return type as boolean
}
onMounted(() => {
    getName({name:"zhu",age:18,sex:1})
    fun2("12345")
    fun2(12345)
    fun3({sex:11})
    fun3({name:"zzz"})
})
</script>
<template>
  <div>
  </div>
</template>
<style scoped lang='less'>

</style>