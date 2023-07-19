<script setup lang='ts'>
import { ref, onMounted, computed } from 'vue'
const data = ref({
    firstname: "张",
    lastname: "三"
})
const changename = () => {
    computedname.value = "李四五六"
}
//函数式写法不能修改值
const computedname2 = computed<string>(() => { return data.value.firstname + data.value.lastname })
const computedname = computed<string>({
    get() {
        return data.value.firstname + data.value.lastname
    },
    set(newval) {
        data.value.firstname = newval[0],
            data.value.lastname = newval.split("").splice(1, newval.split("").length).join("")
    }
})
onMounted(() => {

})
</script>
<template>
    <div style="padding:5px">
        <div>性：<el-input v-model="data.firstname"></el-input></div>
        <div>名：<el-input v-model="data.lastname"></el-input></div>
        <div>全名：<el-input v-model="computedname"></el-input></div>
        <el-button @click="changename">修改名字</el-button>
    </div>
</template>
<style scoped lang='less'></style>