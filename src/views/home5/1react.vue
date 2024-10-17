<script setup lang='ts'>
import {useRouter} from 'vue-router'
const router=useRouter()
import { ref, isRef, shallowRef, onMounted } from 'vue'
import view1 from './1react/1react-1.vue'
import viewcode1 from './1react/1react-1.vue?raw';
import viewcode2 from './1react/1react-2.tsx?raw';
import view3 from './1react/1react-3';
import viewcode3 from './1react/1react-3.tsx?raw';
import view4 from './1react/1react-4';
import viewcode4 from './1react/1react-4.tsx?raw';
import viewcode41 from './1react/1react-4-1.tsx?raw';
import viewcode42 from './1react/1react-4-2.tsx?raw';
const data = ref({

})
onMounted(() => {

})
</script>
<template>
    <div>
        <div style="padding: 5px;">
            <text1-head :text="router.currentRoute.value.meta.title"></text1-head>

            <text2-head text="react"></text2-head>
            <div>
                <p v-pre>1.插值语句 jsx tsx 使用{} 展示 数字 字符串 数组 元素 三元表达式 API调用, vue3中使用{{  }}</p>
                <p>2.插值语句显示对象,需要序列化JSON.stringify(obj)</p>
                <p>3.事件使用onClick 如果需要传参使用高阶函数,如果不需要则直接使用函数体</p>
                <p v-pre>4.我想支持泛型 因为他把&lt;T&gt;理解成了一个元素&lt;div&gt;应该使用&lt;T,&gt;</p>
                <p>5.如何绑定属性 id class等</p>
                <p>6.绑定多个class</p>
                <p>7.绑定style</p>
                <p>8.添加html代码片段 v-html</p>
                <p>9.遍历数组v-for 使用arr.map</p>
            </div>
            <text-main>
                <template #a>
                    <view1></view1>
                </template>
                <template #b>
                    父组件
                    <view-code :code="viewcode1"></view-code>
                    React子组件
                    <view-code :code="viewcode2"></view-code>
                </template>
            </text-main>

            <text2-head text="hooks"></text2-head>
            <div>
                <p>react项目中使用let [str2,setStr]=useState('test1')实现响应式</p>
            </div>
            <text-main>
                <template #a>
                    <view3></view3>
                </template>
                <template #b>
                    <view-code :code="viewcode3"></view-code>
                </template>
            </text-main>

            <text2-head text="组件"></text2-head>
            <div>
                <p>react项目中使用let [str2,setStr]=useState('test1')实现响应式</p>
            </div>
            <text-main>
                <template #a>
                    <view4></view4>
                </template>
                <template #b>
                    Parent
                    <view-code :code="viewcode4"></view-code>
                    Child1
                    <view-code :code="viewcode41"></view-code>
                    Child2
                    <view-code :code="viewcode42"></view-code>
                </template>
            </text-main>
        </div>
    </div>
</template>
<style scoped lang='less'>

</style>