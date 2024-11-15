<script setup lang='ts'>
import { ref,isRef,shallowRef,onMounted } from 'vue'
const data = ref({

})
var list=[,,'a,b,c','d,e,f','g,h,i','j,k,l','m,n,o','p,q,r,s','t,u,v','w,x,y,z']
function fun(str1:string|undefined,str2:string|undefined){
  var a:string[]=[],b:string[]=[];
  !str1?a=[""]:a=str1?.split(",") as string[]
  !str2?b=[""]:b=str2?.split(",") as string[]
  let result=[]
  for(var i=0;i<a.length;i++){
    for(var j=0;j<b.length;j++){
      result.push(a[i]+b[j])
    }
  }
  return result.join(",");
}


//元组类型
let arr:[number,boolean]=[1,false]
arr.push(false)
let brr:readonly [x:number,y?:boolean]=[1]
let excel:[string,string,number?][]=[
  ['name','男',23],
  ['name','男',23],
  ['name','男']
]
type first=typeof arr['length']
console.log(arr['length'],typeof arr['length'])

//枚举类型
enum colors{
   red,//默认从0开始,自动加1
   green,
   blue
}
enum colors2{
   red=1,//从1开始,
   green,
   blue
}
//字符串枚举需要全部定义值
enum colors3{
   red="red1",//从1开始,
   green="green",
   blue="blue"
}
//接口枚举
enum colors4{
   red=1,//从1开始,
   green=2,
   blue
}
interface A{
  red:colors4.red
}
let obj:A={
  red:1
}
//使用const描述 ,在编译成js时不会编译成对象
const enum Types{
  success,
  fail
}
if(Types.success==0){
  console.log("yesyesyes")
}
console.log('colors',colors,colors3)
onMounted(() => {
  var input=[2,4,9,8]
  var result=input.map(t=>list[t]).reduce(fun)?.split(",")
  console.log(result)
})
</script>
<template>
  <div>
  </div>
</template>
<style scoped lang='less'>

</style>