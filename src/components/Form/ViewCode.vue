<script setup lang='ts'>
import { onMounted, computed } from 'vue'
import Prism from "prismjs";
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
onMounted(() => {
    Prism.highlightAll(); //切换菜单重新渲染
});
</script>
<template>
    <pre :class="'hx-scroll ' + lineNumbers">
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