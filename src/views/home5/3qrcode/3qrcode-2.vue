<script setup lang='ts'>
import { ref, isRef, shallowRef, onMounted } from 'vue'
import QRCode from 'qrcode'
const data = ref({
   url:""
})
const initCode = () => {
    QRCode.toDataURL("https://www.bilibili.com/",(error,url)=>{
        console.log(error)
        data.value.url=url
    })
}
onMounted(() => {
    initCode()
})
</script>
<template>
    <div>
        <img id="QRCodeId" :src="data.url"/>
    </div>
</template>
<style scoped lang='less'>
.QRCodeId{
    width: 300px;
    height: 300px;
}
</style>