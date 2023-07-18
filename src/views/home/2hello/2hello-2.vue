<script setup lang='ts'>
import {  ref, reactive,readonly,shallowReactive,toRef,toRefs,toRaw } from 'vue';

const form = reactive({
    name: "reactive",
    age: 22
})
const name2=toRef(form,'name')
const {name,age}=toRefs(form)
const method = {
    submit2: () => {
        console.log(name2.value, form)
    }
}
</script>
<template>
    <div style="padding: 5px;">
        <form>
            <el-input v-model="name2"></el-input>
            <el-button @click="method.submit2">输出</el-button>
        </form>
    </div>
</template>
<style scoped></style>