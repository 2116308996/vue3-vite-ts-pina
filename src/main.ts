//import './assets/main.css'

import { createApp,ref,onMounted } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import TDesign from 'tdesign-vue-next';
import * as Cesium from 'cesium'
import 'tdesign-vue-next/es/style/index.css';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import mitt from 'mitt'
const Mit=mitt()
declare module 'vue' {
    export interface ComponentCustomProperties{
        $Bus:typeof Mit
    }
}

import Text1Head from '@/components/Form/Text1Head.vue'
import Text2Head from '@/components/Form/Text2Head.vue'
import TextMain from '@/components/Form/TextMain.vue'
import ViewCode from '@/components/Form/ViewCode.vue';
const app = createApp(App)



app.component('Text1Head',Text1Head)
app.component('Text2Head',Text2Head)
app.component('TextMain',TextMain)
app.component('ViewCode',ViewCode)

app.use(TDesign);
app.use(ElementPlus)
app.use(createPinia())
app.use(router.router)

app.config.globalProperties.$ref=ref
app.config.globalProperties.$onMounted=onMounted
app.config.globalProperties.$Bus=Mit

app.config.globalProperties.$func=()=>{
    return "zhuhui"
}
Cesium.Ion.defaultAccessToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkZTgxYWNiMS00ODc3LTQ1ZWMtYTAzNC1hYmJhMjUxZjEyNmEiLCJpZCI6MjA4NjY4LCJpYXQiOjE3MTMxNDUzNzl9.WXdyvESJ0qZVUigsv46uc-Lbw7JAfTXwEiaW4gvMxyQ'
// Cesium.Ion.defaultAccessToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1NWMxYzE3ZC1kYjhmLTRjNzctYTljZS01ZGQxNGQzMTVmMTYiLCJpZCI6MjA4NjY4LCJpYXQiOjE3MTMxNDUyMTF9.tgUCDcte_MUd0dsjJQz8jKF2TjPoIkjwRXG0g9FzL-E'

//全局注册异步组件
// const modules=import.meta.glob("@/views/experimental/testdata/recode/tables/*.vue")
// console.log("modules",modules)
// for(const item in modules){
//     const reslut=item.match(/.*\/(.+).vue$/)
//     app.component(reslut[1],defineAsyncComponent(modules[item]))
// }

app.mount('#app')

