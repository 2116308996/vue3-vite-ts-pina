<script setup lang="ts">
import { onMounted, ref } from 'vue';
const data = ref({
    a: "click",//dbclcik
    c: [1, 2, 3],
})
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
    <div v-once>{{ data.a }}</div>
    <div v-for="item in data.c" v-memo="[item == 1]">{{ 'item' }}</div>
    <div v-on:click="parent">
        <el-button @[data.a].stop="click">点击</el-button>
    </div>
</template>
