<script setup lang='ts'>
import { ref, isRef, shallowRef, onMounted } from 'vue'
import QRCode from 'qrcode'
const data = ref({

})
const QRCodeId = ref(null)
const initCode = () => {
    QRCode.toCanvas(QRCodeId.value,"hello",(error)=>{
        console.log(error)
    })
}
onMounted(() => {
    initCode()
})
</script>
<template>
    <div>
        <canvas ref="QRCodeId" id="QRCodeId"></canvas>
    </div>
</template>
<style scoped lang='less'>
.QRCodeId{
    width: 300px;
    height: 300px;
}
</style>