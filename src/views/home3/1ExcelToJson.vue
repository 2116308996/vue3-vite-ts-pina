<script setup lang='ts'>
import { ref, isRef, shallowRef, onMounted } from 'vue'
import * as xlsx from 'xlsx'
const {proxy}:any=getCurrentInstance()
const data = ref({
    fileTemp: Object(),
    jsondata:''
})
type m={   
        text:String,
        type:String,
        value:String,
        content:String,
        mianji:number,
        show:Boolean
    }
type mp={
    text:String,
    children:m[]
}
var text:mp[]=[]
text.push({
    text:'',
    children:[{
        text:"",
        type:"",
        value:"",
        content:"",
        mianji:0,
        show:true
    }]
})
onMounted(() => {

})
const openfilepick=()=>{
    proxy?.$refs.fileInput.click()
}
const readExcelFile = async (event: Event) => {
    const file = (event.target as HTMLInputElement).files?.[0]
    if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
            const datas = new Uint8Array(e.target?.result as ArrayBuffer)
            let workbook = xlsx.read(datas, { type: 'array' });
            let worksheet = workbook.Sheets[workbook.SheetNames[0]];
            var datajson = xlsx.utils.sheet_to_json(worksheet,{header:1});
            console.log(datajson);
          //  var obj=[{text:"",type:"",value:"",content:"",mianji:0,show:true}]
            var obj:m[]=[]
            datajson.forEach((item:any)=>{
               obj.push({
                text:item[0],
                type:item[1],
                value:item[2],
                content:item[3],
                mianji:0,
                show:true
            })
            })
            data.value.jsondata=JSON.stringify(obj);
            console.log(obj)
            return datajson;
        }
        reader.readAsArrayBuffer(file)
    }
}

</script>
<template>
    <div>
        <input type="file" ref="fileInput"  @change="readExcelFile">
        <button @click="openfilepick">选择文件</button>
        <div>
            {{ data.jsondata }}
        </div>
    </div>
</template>
<style scoped lang='less'></style>