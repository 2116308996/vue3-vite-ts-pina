<script setup lang="ts">
import router from '@/router';
import { onMounted, ref, computed } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import util from '@/util/util';
const data = ref({
    activeIndex: "1",
    numName:window.location.href.split('/')[window.location.href.split('/').length - 1].split('#')[0],
    texts: [''],
    router: [{
        path: String(),
        name: String(),
        meta: {
            title: String()
        },
        redirect: String(),
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
    data.value.router = router.asyncRoutes
})
const funtexts = () => {
    for (let i = 0; i < util.length; i++) {
        if (data.value.numName == util[i].name) {
            data.value.texts = util[i].text
        }
    }
}
function handleOpen(key: any, keyPath: any) {
    // console.log(key, keyPath)
}
function handleClose(key: any, keyPath: any) {
    // console.log(key, keyPath)
}
function handleSelect(key: any, keyPath: any) {
    // console.log(key, keyPath)
}
const handleClick = (tab: any) => {
    window.location.hash = data.value.texts[tab]
    console.log(tab)
}
function gorouter(child: any) {
    console.log(child)
    data.value.numName = child.name
    funtexts()
    router.router.push({
        path: child.path
    })
}
onMounted(() => {
    funtexts()
})
</script>
<template>
    <div style="width: 100%;margin-top: 8px;">
        <el-row>
            <div class="box left">
                <div style="width: 80%;float: right;">
                    <h2>VUE3-VITE-TS-PINA</h2>
                    <el-menu :default-active="data.activeIndex" class="el-menu-vertical-demo" @select="handleSelect"
                        @open="handleOpen" @close="handleClose">
                        <template v-for="item,index in data.router">
                            <el-sub-menu :index="index + 1">
                                <template #title>
                                    <i class="el-icon-location"></i>
                                    <span>{{ item.meta.title }}</span>
                                </template>
                                <template v-for="child,childindex in item.children">
                                    <el-menu-item @click="gorouter(child)" :index="index + 1 + '-' + (childindex + 1)">{{
                                        child.meta.title }}</el-menu-item>
                                </template>
                            </el-sub-menu>
                        </template>
                    </el-menu>
                </div>
            </div>
            <div class="box center">
                <div class="center-1">
                    <RouterView />
                </div>
            </div>
            <div class="box right">
                <el-tabs tab-position="left" class="demo-tabs" @tab-change="handleClick">
                    <el-tab-pane v-for="item, index in data.texts" :label="item">
                    </el-tab-pane>
                </el-tabs>
            </div>
        </el-row>
    </div>
</template>
<style lang="less" scoped>
.box {
    overflow: auto;

}

.left {
    width: 20%;
}

.center {
    width: calc(100vw - 20% - 20px);
    height: calc(100vh - 20px);
    margin-left: 20px;
}

.center-1 {
    width: 70%;
}

.right {
    padding-left: 20px;
    width: 20%;
    position: absolute;
    right: 0px;
}

::-webkit-scrollbar {
    display: none;
}

@media screen and (max-width:1600px) and (min-width: 1024px) {
    .right {
        width: 0;
    }

    .center-1 {
        width: 90%;
    }
}

@media screen and (max-width: 1024px) {
    .left {
        width: 0px;
        height: 0px;
    }

    .right {
        width: 0;
    }
    .center{
        width: 100%;
    }
    .center-1 {
        width: 90%;
        margin: 0 auto;
    }
}</style>