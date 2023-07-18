<script setup lang='ts'>
import { onMounted, ref, reactive,readonly } from 'vue';
type M = {
    name: String
}
const form = reactive({
    name: "reactive",
    age: 22
})
const data = ref<M>({
    name: "ref"
})
const obj=reactive({name:"readonly"})
const read=readonly(obj)
const method = {
    submit: () => {
        console.log(form.name, data.value.name)
    }
}
</script>
<template>
    <div style="padding: 5px;">
        <form>
            <el-input v-model="form.name"></el-input>
            <el-input v-model="data.name"></el-input>
            <el-input v-model="obj.name"></el-input>
            <el-input v-model="read.name"></el-input>
            <el-button @click="method.submit">输出</el-button>
        </form>
    </div>
</template>
<style scoped></style>