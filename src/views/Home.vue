<script setup lang="ts">
import router from '@/router';
import dark from '@/stores/dark'
const darkstore = dark()
import { onMounted, ref, computed } from 'vue';
import { RouterLink, RouterView,useRouter,useRoute } from 'vue-router'
import util from '@/util/util';
const router2=useRouter();
const route=useRoute();
console.log(router2,route)
const data = ref({
    switch: false,
    colorisdark:'black',
    backgroundcolorisdark:'white',
    activeIndex: "1",
    numName: window.location.href.split('/')[window.location.href.split('/').length - 1].split('#')[0],
    texts: ['创建项目', 'v-text&v-title', 'v-once&v-memo', '生命周期','JSON字符串与对象之间的转换'],
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
const toggleDark = () => {
    darkstore.isdark()
    if(darkstore.dark){
      data.value.colorisdark='white'
      data.value.backgroundcolorisdark='black'
    }else{
        data.value.colorisdark='black'
        data.value.backgroundcolorisdark='white'
    }
}
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
}
function gorouter(child: any) {
    data.value.numName = child.name
    funtexts()
    router.router.push({
        path: child.path
    })
}
const isdark = () => {
    if (darkstore.dark == true) {
        return 'dark'
    } else {
        return 'light'
    }
}
onMounted(() => {
    funtexts()
})
</script>
<template>
    <div style="width: 100%;" :class="isdark()">
        <el-row>
            <div class="box left">
                <div style="display: flex;justify-content: center;">
                    <el-switch v-model="data.switch" @change="toggleDark()">按钮</el-switch>
                </div>
                <div style="width: 80%;float: right;">
                    <h2>VUE3-VITE-TS-PINIA</h2>
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
<style lang="less">
.t-collapse-panel__header{
    color: v-bind('data.colorisdark') !important;
    background-color: v-bind('data.backgroundcolorisdark')!important;
}
.t-collapse-panel__content{
    color: v-bind('data.colorisdark') !important;
    background-color: v-bind('data.backgroundcolorisdark')!important;
}
.el-tabs__item {
    color: v-bind('data.colorisdark') !important;
    opacity: 1;
}
.el-tabs__item:hover {
    color: rgb(64, 158, 255) !important;
    opacity: 1;
}
.el-tabs__item.is-active{
    color: rgb(64, 158, 255) !important;
    opacity: 1;
}
.el-menu-item {
    color: v-bind('data.colorisdark') !important;
    background-color: v-bind('data.backgroundcolorisdark')!important;
    opacity: 1;
}
.el-menu-item:hover {
    color: rgb(64, 158, 255) !important;
    opacity: 1;
}
.el-sub-menu__title{
    color: v-bind('data.colorisdark') !important;
    background-color: v-bind('data.backgroundcolorisdark')!important;
}
.el-menu-item.is-active{
    color: rgb(64, 158, 255) !important;
    opacity: 1;
}
</style>
<style lang="less" scoped>
.dark {
    background-color: black;
    color: white;
}

.light {
    background-color: white;
    color: black;
}

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

    .center {
        width: 100%;
    }

    .center-1 {
        width: 90%;
        margin: 0 auto;
    }
}</style>