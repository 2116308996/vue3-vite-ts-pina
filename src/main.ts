//import './assets/main.css'

import { createApp,ref,onMounted } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import TDesign from 'tdesign-vue-next';
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

app.mount('#app')
app.config.globalProperties.$ref=ref
app.config.globalProperties.$onMounted=onMounted
app.config.globalProperties.$Bus=Mit