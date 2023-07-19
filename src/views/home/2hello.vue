<script setup lang='ts'>
import { onMounted, ref, reactive,readonly,shallowReactive,toRef,toRefs,toRaw } from 'vue';
import view1 from '@/views/home/2hello/2hello-1.vue?raw'
import view2 from '@/views/home/2hello/2hello-2.vue?raw'
type M = {
    name: String,
    age:Number
}
const form = reactive({
    name: "reactive",
    age: 22
})
const data = ref<M>({
    name: "ref",
    age:22
})
const name2=toRef(form,'name')
const {name,age}=toRefs(form)
const obj=reactive({name:"readonly"})
const read=readonly(obj)
const method = {
    submit: () => {
        console.log(form.name, data.value.name,read.name)
    },
    submit2:()=>{
        console.log(name2.value,form)
    }
}
function changename() {
    data.value.name = "修改名称"
}
</script>
<template>
    <div style="padding: 5px;">
        <text1-head>reactive&Ref</text1-head>
        <text2-head>基础用法</text2-head>
        <p>ref支持所有的类型,reactive支持引用类型 Array Object Map set</p>
        <p>ref取值赋值要加.value,reactive不需要</p>
        <p>readonly可以用reactive生成一个只读对象,会受到原reactive对象影响</p>
        <p>shallowReactive定义的对象浅层数据为响应式,深层数据不是响应式的</p>
        <text-main>
            <template v-slot:a>
                <form>
                    <el-input v-model="form.name"></el-input>
                    <el-input v-model="data.name"></el-input>
                    <el-input v-model="obj.name"></el-input>
                    <el-input v-model="read.name"></el-input>
                    <el-button @click="method.submit">输出</el-button>
                </form>
            </template>
            <template v-slot:b>
                <view-code :code="view1"></view-code>
            </template>
        </text-main>

        <text2-head>toRef&toRefs&toRaw</text2-head>
        <p>toref解构属性:将响应式(reactive)对象中的某个属性单独提供给外部使用,解构出来的数据改变,原数据也会被改变</p>
        <p>toraw解构属性:将响应式(reactive)对象中的某个属性单独提供给外部使用,解构出来的数据改变,原数据不会被改变</p>
        <text-main>
           <template v-slot:a>
              <el-input v-model="name2"></el-input>
              <el-button @click="method.submit2">输出</el-button>
           </template>
           <template v-slot:b>
             <view-code :code="view2"></view-code>
           </template>
        </text-main>
       
    </div>
</template>
<style scoped></style>