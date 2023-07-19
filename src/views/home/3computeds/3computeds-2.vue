<script setup lang='ts'>
import { ref, onMounted, computed } from 'vue'

const search = ref<string>("")
type ShoppingData = {
    name: String,
    price: number,
    num: number
}
const shoppingdata = ref<ShoppingData[]>([
    {
        name: "兰博基尼第六元素",
        price: 12000000,
        num: 1
    },
    {
        name: "Apollo IE",
        price: 18000000,
        num: 1
    },
    {
        name: "AE86",
        price: 40000,
        num: 10
    }
])
const searchdata = computed(() => {
    return shoppingdata.value.filter((item: ShoppingData) => {
        return item.name.includes(search.value)
    })
})
const allshoppingprices = computed(() => {
    return searchdata.value.reduce((prve: number, next: ShoppingData) => {
        return prve + next.num * next.price
    }, 0)
})
const del=(index:number)=>{
  console.log(index)
  shoppingdata.value.splice(index,1)
}
onMounted(() => {

})
</script>
<template>
    <div style="padding:5px">
        <el-input v-model="search" placeholder="搜索" @click="searchdata"></el-input>
        <el-table :data="searchdata">
            <el-table-column prop="name" label="物品名称"></el-table-column>
            <el-table-column prop="price" label="物品单价"></el-table-column>
            <el-table-column label="物品数量">
                <template #default="scope">
                    <el-button @click="scope.row.num > 1 ? scope.row.num-- : null">-</el-button>
                    <span style="width: 30px;text-align: center;display: inline-block;">{{ scope.row.num }}</span>
                    <el-button @click="scope.row.num < 99 ? scope.row.num++ : null">+</el-button>
                </template>
            </el-table-column>
            <el-table-column label="物品总价">
                <template #default="scope">
                    {{ scope.row.num * scope.row.price }}
                </template>
            </el-table-column>
            <el-table-column label="删除">
            <template #default="scope">
              <el-button @click="del(scope.$index)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div style="text-align: right;">所有物品价格：{{ allshoppingprices }}</div>
    </div>
</template>
<style scoped lang='less'></style>