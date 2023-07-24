<script setup lang='ts'>
import { ref,isRef,shallowRef,onMounted } from 'vue'
interface tree {
    name: string,
    checked: boolean,
    children?: tree[]
}
const props= defineProps<{
    data?: tree[]
}>()

</script>
<template>
  <div>
    <div class="tree" v-for="item in props.data">
        <el-checkbox v-model="item.checked"><el-input v-model="item.name"></el-input></el-checkbox>
        <tree-2 v-if="item.children?.length" :data="item.children"></tree-2>
    </div>
  </div>
</template>
<style scoped lang='less'>
.tree {
    margin-left: 20px;
}
</style>