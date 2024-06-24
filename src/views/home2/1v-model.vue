<script setup lang='ts'>
	import router from '@/router'
	import view1 from '@/views/home2/1v-model/1v-model-1.vue'
	import viewcode1 from '@/views/home2/1v-model/1v-model-1.vue?raw'
	import viewcode2 from '@/views/home2/1v-model/1v-model-1-1.vue?raw'
	import view2 from '@/views/home2/1v-model/1v-model-2.vue'
	import viewcode3 from '@/views/home2/1v-model/1v-model-2.vue?raw'
	import viewcode4 from '@/views/home2/1v-model/1v-model-2-1.vue?raw'
	import viewcode42 from '@/views/home2/1v-model/1v-model-2-2.vue?raw'
	import view3 from '@/views/home2/1v-model/1v-model-3.vue'
	import viewcode5 from '@/views/home2/1v-model/1v-model-3.vue?raw'
	import view4 from '@/views/home2/1v-model/1v-model-4.vue'
	import viewcode6 from '@/views/home2/1v-model/1v-model-4.vue?raw'
	import view5 from '@/views/home2/1v-model/1v-model-5.vue'
	import viewcode7 from '@/views/home2/1v-model/1v-model-5.vue?raw'
	import viewcode8 from '@/views/home2/1v-model/hooks.ts?raw'
	import view6 from '@/views/home2/1v-model/1v-model-6.vue'
	import viewcode9 from '@/views/home2/1v-model/1v-model-6.vue?raw'
	import viewcode10 from '@/views/home2/1v-model/hooks6.ts?raw'
	const data = ref({

	})
	onMounted(() => {

	})
</script>
<template>
	<div>
		<div style="padding: 5px;">
			<text1-head :text="router.router.currentRoute.value.meta.title"></text1-head>

			<text2-head text="v-model"></text2-head>
			<div>
				<span>npm install @vitejs/plugin-vue-jsx -D</span>
			</div>
			<div>
				<span>自动导入ref onMounted 等</span>
			</div>
			<text-main>
				<template #a>
					<view1></view1>
				</template>
				<template #b>
					父组件
					<view-code :code="viewcode1"></view-code>
					子组件
					<view-code :code="viewcode2"></view-code>
				</template>
			</text-main>

			<text2-head text="指令"></text2-head>
			<div>
				<span></span>
			</div>
			<text-main>
				<template #a>
					<view2></view2>
				</template>
				<template #b>
					父组件
					<view-code :code="viewcode3"></view-code>
					子组件
					<view-code :code="viewcode4"></view-code>
					<view-code :code="viewcode42"></view-code>
				</template>
			</text-main>

			<text2-head text="图片懒加载"></text2-head>
			<div>
				<span></span>
			</div>
			<text-main>
				<template #a>
					<view3></view3>
				</template>
				<template #b>
					<view-code :code="viewcode5"></view-code>
				</template>
			</text-main>

			<text2-head text="分页"></text2-head>
			<div>
				<span></span>
			</div>
			<text-main>
				<template #a>
					<view4 widthx='10' widthy='40'>
						<template #a>
							<div style="width: 80%;background-color: violet;margin: 0 auto;">aaaa</div>
						</template>
						<template #b>
							<div style="width: 80%;background-color:blue;margin: 0 auto;">bbbb</div>
						</template>
					</view4>
				</template>
				<template #b>
					<view-code :code="viewcode6"></view-code>
				</template>
			</text-main>

			<text2-head text="自定义hooks"></text2-head>
			<div>
				<span></span>
			</div>
			<text-main>
				<template #a>
					<view5></view5>
				</template>
				<template #b>
					<view-code :code="viewcode7"></view-code>
					<view-code :code="viewcode8"></view-code>
				</template>
			</text-main>

			<text2-head text="hooks与指令的运用"></text2-head>
			<div>
				<span></span>
			</div>
			<text-main>
				<template #a>
					<view6></view6>
				</template>
				<template #b>
					<view-code :code="viewcode9"></view-code>
					<view-code :code="viewcode10"></view-code>
				</template>
			</text-main>
			
			<text2-head text="CSS去除元素点击时出现的小竖杠"></text2-head>
			<div>
				<span>
					user-select: none;
					-webkit-user-select: none;
					-moz-user-select: none;
					-ms-user-select: none;
				</span>
			</div>

		</div>
	</div>
</template>
<style scoped lang='less'></style>