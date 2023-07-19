<script setup lang='ts'>
import router from '@/router'
import viewcode1 from '@/views/home/2hello/2hello-1.vue?raw'
import viewcode2 from '@/views/home/2hello/2hello-2.vue?raw'
import view1 from '@/views/home/2hello/2hello-1.vue'
import view2 from '@/views/home/2hello/2hello-2.vue'

</script>
<template>
    <div style="padding: 5px;">
        <text1-head>{{router.router.currentRoute.value.meta.title}}</text1-head>
        <text2-head>基础用法</text2-head>
        <p>ref支持所有的类型,reactive支持引用类型 Array Object Map set</p>
        <p>ref取值赋值要加.value,reactive不需要</p>
        <p>readonly可以用reactive生成一个只读对象,会受到原reactive对象影响</p>
        <p>shallowReactive定义的对象浅层数据为响应式,深层数据不是响应式的</p>
        <text-main>
            <template v-slot:a>
                <view1></view1>
            </template>
            <template v-slot:b>
                <view-code :code="viewcode1"></view-code>
            </template>
        </text-main>

        <text2-head>toRef&toRefs&toRaw</text2-head>
        <p>toref解构属性:将响应式(reactive)对象中的某个属性单独提供给外部使用,解构出来的数据改变,原数据也会被改变</p>
        <p>toraw解构属性:将响应式(reactive)对象中的某个属性单独提供给外部使用,解构出来的数据改变,原数据不会被改变</p>
        <text-main>
           <template v-slot:a>
              <view2></view2>
           </template>
           <template v-slot:b>
             <view-code :code="viewcode2"></view-code>
           </template>
        </text-main>
       
    </div>
</template>
<style scoped></style>