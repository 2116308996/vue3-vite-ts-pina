<script setup lang='ts'>
import { ref,isRef,shallowRef,onMounted } from 'vue'
const data = ref({

})
//Symbol唯一的
let a1:symbol=Symbol(1)
let a2:symbol=Symbol(1)
//for全局symbol有没有注册过这个key，如果有直接拿来用，不会创建新的，如果没有就创建一个。
console.log(a1,a2,a1===a2,Symbol.for('zhuhui')===Symbol.for('zhuhui'))
let obj={
  name:1,
  [a1]:111,
  [a2]:222
}
console.log(obj)
//for in 不能读到symbol
//Object.keys()也不能
//Object.getOwnPropertyNames()也不能
//Object.getOwnPropertySymbols只能取symbol
//Reflect.ownKeys(obj)能都取到
console.log(Object.keys(obj),Object.getOwnPropertyNames(obj),
Object.getOwnPropertySymbols(obj),Reflect.ownKeys(obj),obj[Reflect.ownKeys(obj)[2] as any])
for(let key in obj){
  console.log(key)
}

//生成器
function* gen(){
  yield "zhuhui"//同步或者异步
  yield Promise.resolve("zhuhui2")
}
const man=gen()

console.log(man.next())
console.log(man.next())
console.log(man.next())

//迭代器
let set:Set<number>=new Set([1,1,2,2,3,3])//天然去重的
let map:Map<any,any>=new Map()
map.set([1,2,3],"zhuhui")
console.log(set,map.get([1,2,3]))

function aaa(a:any){
  console.log("arguments",a,arguments)
}
onMounted(() => {
aaa(123)
})
</script>
<template>
  <div>
  </div>
</template>
<style scoped lang='less'>

</style>