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
let Arr=[1,2,3]
map.set([1,2,3],"zhuhui")
map.set('name','ZhuHui')
console.log(set,map.get([1,2,3]))
//迭代器 可以遍历各种数组
const each=(value:any)=>{
  let It:any=value[Symbol.iterator]()
  let next:any={done:false}
  while (!next.done){
    next=It.next()
    if(!next.done){
      console.log(next.value)
    }
  }
}
each(map)
//each(set)
//each(Arr)
//迭代器 语法糖  for of   可以遍历数组，字符串，Map，Set
//对象不可以使用 for of 
for(let value of map){
  console.log(value)
}
var objj:any={
  name:"zhuhui",
  sex:1
}
var objj2:any={
  current:0,
  max:5,
  [Symbol.iterator](){
      return {
        max:this.max,
        current:this.current,
        next(){
          if(this.current==this.max){
            return {
              value:undefined,
              done:true
            }
          }else{
            return {
              value:this.current++,
              done:false
            }
          }
        }
      }
  }
}
//可以遍历对象和数组，不能遍历set和map
for(let key in objj){
  console.log("in",key,objj[key])
}
//对象手动添加iterator方法可以支持for of
for(let value of objj2){
  console.log("of",value)
}
///数组解构也是基于iterator
let x={...objj}
let y=[...objj2]
console.log(x,y,{...objj2})
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