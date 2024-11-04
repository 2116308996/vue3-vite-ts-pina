<script setup lang='ts'>
import { ref,isRef,shallowRef,onMounted } from 'vue'
const data = ref({

})
let str:string="朱荟"
let notANumber:number=NaN;
let num:number=123;
let infinityNumber:number=Infinity;
let decimal:number=6;
let hex:number=0xf00d;//16进制
let binary:number=0b1010;//2进制
let octal:number=0o744;//8进制
let b1:Boolean=true;
let n:null=null;
let b2:undefined=undefined;
let v2:void=undefined;
function myFun():void{
    
}
//any 任意类型 unknow 不知道类型
//1.top type 顶级类型 any unknow
//2.Object
//3.Number String Boolean
//4.number string boolean
//5.1 "string"  false
//6.never
//unknow 只能赋值给自身和any类型  没办法读取任何属性 方法也不可以调用
let a:any=[]
a=1
a="sdas"
a=false
a=Symbol(1)
let un:unknown=5
let b3:number=5
a=b3
un=b3
b3=a
//b3=un
let obj:unknown={a:"sad",open:()=>123}
//obj.a obj.open

//object不包含原始类型 Object包含所有类型 {}与new Object相同，支持所有类型
let obj1:Object={}
let obj2:Object=1
let obj3:Object="123"
let obj4:object=[]
let obj5:object={}
let obj6:object=()=>{}
let obj7:{}=1
let obj8:{}={age:18}
let obj9:Object={age:18}
//都无法识别age属性  obj9.age=1

//interface重名会重合
//interface定义函数类型
//[propName:string]:any 索引签名定义其他任意属性
//?可有可没有
interface BBB{
    type:number
}
interface Person extends BBB{
    name:string,
    age?:number
    [propName:string]:any
    fun:()=>boolean
    readonly getAge:()=>number|undefined
}

interface Person{
    name:string,
    sex:boolean
}
let person:Person={
    name:"朱荟",
    age:24,
    sex:true,
    a:1,
    type:1,
    fun:()=>{
        return true
    },
    getAge:()=>{
        return person.age
    }
}
console.log(person.getAge())

interface Fn{
    (name:string):number[]
}
const fn:Fn=(name:string)=>{
    return [1]
}
let arr:number[]=[1,2,3,4,5]
let arr2:Array<boolean>=[true,false]
interface X{
    name:string,
}
let arr3:X[]=[{name:"zhuhui"},{name:"zhuhui2"}]
let arr4:number[][]=[[1,6],[2,5],[3,4]]
let arr5:Array<Array<number>>=[[1,6],[2,5],[3,4]]
let arr6:any[]=[1,"sdsad",{}]
let arr7:[number,string,object]=[1,"sdsad",{}]
function fun(...args:any[]){
   console.log(args,arguments)
   let  a:IArguments=arguments
}
onMounted(() => {

})
</script>
<template>
  <div class="flex red m-5">
    123
  </div>
</template>
<style scoped lang='less'>

</style>