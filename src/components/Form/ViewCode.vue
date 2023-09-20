<script setup lang='ts'>
import { onMounted, computed } from 'vue'
import Prism from "prismjs";
import dark from '@/stores/dark'
const darkstore = dark()
const props = defineProps({
    code: {
        type: String,
        default: "",
    },
    type: {
        type: String,
        default: "html",
    },
    isShowlineNumbers: {
        type: Boolean,
        default: true,
    },
});
const lineNumbers = computed(() => {
    return props.isShowlineNumbers ? "line-numbers" : "";
});
const isdarkstyle=()=>{
    if(darkstore.dark){
        return {
            backgroundColor:'rgb(38, 39, 39)'
        }
    }else{
        return {
            backgroundColor:'rgb(253, 246, 227)'
        }
    }
}
onMounted(() => {
    Prism.highlightAll(); //切换菜单重新渲染
});
</script>
<template>
        <pre :style="isdarkstyle()"  :class="'hx-scroll ' + lineNumbers" data-prismjs-copy="复制文本" lang="zh-Hans-CN">
            <code :class="'language-' + type" v-html="Prism.highlight(code, Prism.languages[type], type)"></code>
        </pre>
</template>
<style scoped lang='less'>
pre {

    code {
        display: inline-block;
        padding-bottom: 20px;
        position: relative;
        top: 20px;
    }

    // &::before {
    //     content: "";
    //     position: absolute;
    //     background: red;
    //     width: 10px;
    //     height: 10px;
    //     border-radius: 50%;
    //     top: 10px;
    //     left: 15px;
    //     transform: translate(-50%);
    // }

    // &::after {
    //     content: "";
    //     position: absolute;
    //     background: sandybrown;
    //     width: 10px;
    //     height: 10px;
    //     border-radius: 50%;
    //     top: 10px;
    //     left: 30px;
    //     transform: translate(-50%);
    // }

    // code:first-child {
    //     &::after {
    //         content: "";
    //         position: absolute;
    //         background: limegreen;
    //         width: 10px;
    //         height: 10px;
    //         border-radius: 50%;
    //         top: -24px;
    //         left: -7px;
    //         transform: translate(-50%);
    //     }
    // }
}
</style>