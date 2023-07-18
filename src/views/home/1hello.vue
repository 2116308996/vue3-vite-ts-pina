<script setup lang='ts'>
import { onMounted, ref } from 'vue';
import router from '@/router'
import view1 from '@/views/home/1hello/1hello-1.vue?raw'
import view2 from '@/views/home/1hello/1hello-2.vue?raw'
onMounted(() => {
  console.log(router.router.getRoutes().map(v => ({ path: v.path, name: v.name, meta: v.meta, component: v.components })))
  console.log(router.router.getRoutes())
  console.log(view1)
})
const data = ref({
  a: "click",//dbclcik
  b: '<a style="color:red;font-size:40px">ccc</a>',
  c: [1, 2, 3],
  form: null
})
//v-once  ==  v-memo="[]"
const c: string = "sadasd"
const arr: number[] = [1, 2, 3]
function click() {
  console.log("aaa")
  data.value.a = "张三"
  data.value.c[0] = 100
  data.value.c[1] = 100
}
function parent() {
  console.log("我是父级")
}
</script>
<template>
  <div style="padding: 5px;">
    <text1-head>vue3指令</text1-head>
    <text2-head>创建项目</text2-head>
    <div class="title">
      <p>vue3创建项目 vue creat projectname</p>
      <p>vue3创建vite项目 npm init vite@latest</p>
    </div>

    <text2-head>v-text&v-title</text2-head>
    <text-main>
      <template v-slot:a>
        <div v-text="data.a">
        </div>
        <div v-html="data.b">
        </div>
      </template>
      <template v-slot:b>
        <PreviewCode :code="view1"></PreviewCode>
      </template>
    </text-main>

    <text2-head>v-once&v-memo</text2-head>
    <text-main>
      <template v-slot:a>
        <div v-once>{{ data.a }}</div>
        <div v-for="item in data.c" v-memo="[item == 1]">{{ item }}</div>
        <div v-on:click="parent">
          <el-button @[data.a].stop="click">点击</el-button>
        </div>
      </template>
      <template v-slot:b>
        <PreviewCode :code="view2"></PreviewCode>
      </template>
    </text-main>

  </div>
</template>
<style scoped lang="less">
.title {
  border: 1px solid #dcdfe6;
  border-radius: 5px;
  padding: 5px;
}
</style>
