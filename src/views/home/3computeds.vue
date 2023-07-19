<script setup lang='ts'>
import { ref, onMounted, computed } from 'vue'
import view1 from '@/views/home/3computeds/3computeds-1.vue?raw'
import view2 from '@/views/home/3computeds/3computeds-2.vue?raw'
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

const search=ref<string>("")
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
const searchdata=computed(()=>{
  return shoppingdata.value.filter((item:ShoppingData)=>{
    return item.name.includes(search.value)
  })
})
const allshoppingprices=computed(()=>{
   return searchdata.value.reduce((prve:number,next:ShoppingData)=>{
        return prve+next.num*next.price
  },0)
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
    <text1-head>Computed</text1-head>
    <text2-head>基础用法</text2-head>
    <text-main>
      <template v-slot:a>
        <div>性：<el-input v-model="data.firstname"></el-input></div>
        <div>名：<el-input v-model="data.lastname"></el-input></div>
        <div>全名：<el-input v-model="computedname"></el-input></div>
        <el-button @click="changename">修改名字</el-button>
      </template>
      <template v-slot:b>
        <view-code :code="view1"></view-code>
      </template>
    </text-main>

    <text2-head>案例</text2-head>
    <text-main>
      <template v-slot:a>
        <el-input v-model="search" placeholder="搜索" @click="searchdata"></el-input>
        <el-table stripe :data="searchdata">
          <el-table-column prop="name" label="物品名称"></el-table-column>
          <el-table-column prop="price" label="物品单价"></el-table-column>
          <el-table-column label="物品数量">
            <template #default="scope">
              <el-button @click="scope.row.num>1?scope.row.num--:null">-</el-button>
              <span style="width: 30px;text-align: center;display: inline-block;">{{ scope.row.num }}</span>
              <el-button @click="scope.row.num<99?scope.row.num++:null">+</el-button>
            </template>
          </el-table-column>
          <el-table-column label="物品总价">
            <template #default="scope">
            {{ scope.row.num*scope.row.price }}
            </template>
          </el-table-column>
          <el-table-column label="删除">
            <template #default="scope">
              <el-button @click="del(scope.$index)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div style="text-align: right;">所有物品价格：{{ allshoppingprices }}</div>
      </template>
      <template v-slot:b>
        <view-code :code="view2"></view-code>
      </template>
    </text-main>
  </div>
</template>
<style scoped lang='less'></style>