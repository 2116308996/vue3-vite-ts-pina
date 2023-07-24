<script setup lang='ts'>
import { ref,isRef,shallowRef,onMounted,computed} from 'vue'
//js写法
// const props=defineProps({
//     name1:{
//         type:String,
//         default:null
//     },
//     modelValue: {
// 	        type: String,
// 	        default: false
// 	}
// })
//ts写法
const props2=withDefaults(defineProps<{
    name1:String,
    modelValue: String
}>(),{
    name1:()=>"zzzz",
    modelValue:()=>'zzzz'
})
//js写法
//const emit=defineEmits(['update:modelValue','changename'])
//const emit=defineEmits({})
//vue3.2 ts写法
// const emit=defineEmits<{
//     (e:"changename",val:string):void
//     (e:"update:modelValue",val:any):void
// }>()
//vue3.3 ts写法
const emit=defineEmits<{
    'changename':[val:string],
    'update:modelValue':[val:any]
}>()
const changname1=()=>{
    emit('changename','子')
}
const changname2=()=>{
   emit('update:modelValue','王五')
}
const fun1=()=>{
    console.log('我是子组件函数或对象')
}
defineExpose({
    fun1
})
const myVisible = computed({
	    get: function() {
	        return props2.modelValue
	    },
	    set: function(val) {
	        emit('update:modelValue', val)
	    }
	})
const data = ref({

})
onMounted(() => {

})
</script>
<template>
  <div>
    <p>{{ props2.name1 }}<el-button @click="changname1">给父组件传值</el-button></p>
    <p>{{ props2.modelValue }}<el-button @click="changname2">给父组件传值</el-button></p>
    <p>{{ myVisible }}<el-button @click="changname2">给父组件传值</el-button></p>
  </div>
</template>
<style scoped lang='less'>

</style>