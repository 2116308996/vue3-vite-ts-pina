<script setup lang='ts'>
import {http} from '@/util/ajax'
interface Data{
    name:String
}
const  data:Data = await http.get<Data>('/src/views/home/5component/data.json')
</script>
<template>
  <div class="a">
    {{ data.name }}
  </div>
  <div>
    <img class="b" src="/public/image/ikun.jpg">
  </div>
</template>
<style scoped lang='less'>
.b{
    width: 100px;
    height: 100px;
    border: 1px solid black;
    border-radius: 50%;
    object-fit:cover;
}
</style>