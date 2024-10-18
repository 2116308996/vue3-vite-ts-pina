<script setup lang='ts'>
import { useRouter } from 'vue-router'
const router = useRouter()
import { ref, isRef, shallowRef, onMounted } from 'vue'
import view1 from './2jquery/2jquery-1.vue'
import viewcode1 from './2jquery/2jquery-1.vue?raw';
import view2 from './2jquery/2jquery-2.vue'
import viewcode2 from './2jquery/2jquery-2.vue?raw';
const data = ref({

})
onMounted(() => {

})
</script>
<template>
    <div>
        <div style="padding: 5px;">
            <text1-head :text="router.currentRoute.value.meta.title"></text1-head>

            <text2-head text="方法"></text2-head>
            <div>
                <pre v-pre>
        //$(this).hide()
	//   演示 jQuery hide() 函数，隐藏当前的 HTML 元素。
	//$("#test").hide()
	//    演示 jQuery hide() 函数，隐藏 id="test" 的元素。
	//$("p").hide()
	//    演示 jQuery hide() 函数，隐藏所有 &lt;p&gt; 元素。
	//$(".test").hide()
	// 演示 jQuery hide() 函数，隐藏所有 class="test" 的元素
		
	//$("p") 选取 &lt;p&gt; 元素。
		
	//$("p.intro") 选取所有 class="intro" 的 &lt;p&gt; 元素。
		
	//$("p#demo") 选取所有 id="demo" 的 &lt;p&gt; 元素。
		
	//$("[href]") 选取所有带有 href 属性的元素。
		
	//$("[href='#']") 选取所有带有 href 值等于 "#" 的元素。
		
	//$("[href!='#']") 选取所有带有 href 值不等于 "#" 的元素。
		
	//$("[href$='.jpg']") 选取所有 href 值以 ".jpg" 结尾的元素。
		
	//下面的例子把所有 p 元素的背景颜色更改为红色：
	$("p").ready(()=>{
		$("p").css("background-color","red");	
	})
	//$(this.$refs.ppp).hide()
		
	//$(document).ready(function) 	将函数绑定到文档的就绪事件（当文档完成加载时）
	//$(selector).click(function) 	触发或将函数绑定到被选元素的点击事件
	//$(selector).dblclick(function) 	触发或将函数绑定到被选元素的双击事件
	//$(selector).focus(function) 	触发或将函数绑定到被选元素的获得焦点事件
	//$(selector).mouseover(function) 	触发或将函数绑定到被选元素的鼠标悬停事件
                </pre>
            </div>
            <text-main>
                <template #a>
                    <view1></view1>
                </template>
                <template #b>
                    <view-code :code="viewcode1"></view-code>
                </template>
            </text-main>

            <text2-head text="隐藏显示"></text2-head>
            <div>
            </div>
            <text-main>
                <template #a>
                    <view2></view2>
                </template>
                <template #b>
                    <view-code :code="viewcode2"></view-code>
                </template>
            </text-main>

            <text2-head text="动画"></text2-head>
            <div>
            </div>
            <text-main>
                <template #a>
                    <view1></view1>
                </template>
                <template #b>
                    <view-code :code="viewcode1"></view-code>
                </template>
            </text-main>

            <text2-head text="Callback和Chaning.html"></text2-head>
            <div>
            </div>
            <text-main>
                <template #a>
                    <view1></view1>
                </template>
                <template #b>
                    <view-code :code="viewcode1"></view-code>
                </template>
            </text-main>

            <text2-head text="获取"></text2-head>
            <div>
            </div>
            <text-main>
                <template #a>
                    <view1></view1>
                </template>
                <template #b>
                    <view-code :code="viewcode1"></view-code>
                </template>
            </text-main>

            <text2-head text="添加删除"></text2-head>
            <div>
            </div>
            <text-main>
                <template #a>
                    <view1></view1>
                </template>
                <template #b>
                    <view-code :code="viewcode1"></view-code>
                </template>
            </text-main>

            <text2-head text="遍历"></text2-head>
            <div>
            </div>
            <text-main>
                <template #a>
                    <view1></view1>
                </template>
                <template #b>
                    <view-code :code="viewcode1"></view-code>
                </template>
            </text-main>

        </div>
    </div>
</template>
<style scoped lang='less'></style>