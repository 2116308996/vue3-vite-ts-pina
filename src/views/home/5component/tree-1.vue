<script setup lang='ts'>
import { ref, isRef, shallowRef, onMounted } from 'vue'
import Tree from '@/views/home/5component/tree-2.vue'

interface tree {
    name: string,
    checked: boolean,
    children?: tree[]
}
const data = ref<tree[]>([
    {
        name: '1',
        checked: false,
        children: [{
            name: '1-1',
            checked: false,
            children: [
                {
                    name: '1-1-1',
                    checked: false,
                }
            ]
        },
        {
            name: '1-2',
            checked: true
        }
        ]
    },
    {
        name: '2',
        checked: false,
    }
]
)
const treefun = () => {
    console.log(data.value)
}
</script>
<template>
    <div>
        <Tree :data="data"></Tree>
        <el-button @click="treefun">输出</el-button>
    </div>
</template>
<style scoped lang='less'></style>