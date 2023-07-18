<script setup lang="ts">
import router from '@/router';
import { onMounted, ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
const data = ref({
    activeIndex: "1",
    router: [{
        path: String(),
        name: String(),
        meta: {
            title: String()
        },
        redirect:String(),
        component: () => { },
        children: [{
            path: String(),
            name: String(),
            meta: {
                title: String()
            },
            component: () => { },
        }]
    }]
})
onMounted(() => {
    data.value.router=router.asyncRoutes
   
})
function handleOpen(key: any, keyPath: any) {
    // console.log(key, keyPath)
}
function handleClose(key: any, keyPath: any) {
    // console.log(key, keyPath)
}
function handleSelect(key: any, keyPath: any) {
    // console.log(key, keyPath)
}
function gorouter(child: any) {
    console.log(child)
    router.router.push({
        path:child.path
    })
}
</script>
<template>
    <div style="width: 100%;">
        <el-row>
            <el-col :span="4"></el-col>
            <el-col :span="4">
                <h2>菜单</h2>
                <el-menu :default-active="data.activeIndex" class="el-menu-vertical-demo" @select="handleSelect"
                    @open="handleOpen" @close="handleClose">
                    <template v-for="item, index in data.router">
                        <el-sub-menu :index="index + 1">
                            <template #title>
                                <i class="el-icon-location"></i>
                                <span>{{ item.meta.title }}</span>
                            </template>
                            <template v-for="child, childindex in item.children">
                                <el-menu-item @click="gorouter(child)" :index="index + 1 + '-' + (childindex + 1)">{{
                                    child.meta.title }}</el-menu-item>
                            </template>
                        </el-sub-menu>
                    </template>
                </el-menu>
            </el-col>
            <el-col :span="12">
                <RouterView />
            </el-col>
            <el-col :span="4"></el-col>
        </el-row>
    </div>
</template>
<style></style>