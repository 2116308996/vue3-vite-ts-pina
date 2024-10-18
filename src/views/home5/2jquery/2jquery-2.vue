<script setup lang='ts'>
import { ref,isRef,getCurrentInstance,onMounted } from 'vue'
import $ from 'jquery'
const {proxy}:any=getCurrentInstance()
const data = ref({
  isshow:true
})
const clickp=()=>{
  $("p").hide()
}
const ppp:any=ref(null)

onMounted(() => {
//   $("button").click(()=>{
//       data.value.isshow=!data.value.isshow
//       if(data.value.isshow){
//         $(document.getElementsByClassName("pp")).show()
//         console.log(proxy.$refs.ppp,ppp.value)
//         $(ppp.value).css("background-color","red")
//       }else{
//         $(document.getElementsByClassName("pp")).hide()
//       }
					
// 	})
})
</script>
<template>
  <div>
    <p @click="clickp">If you click on me, I will disappear.</p>
		<p class="pp" ref="ppp">ipisadas</p>
		<button type="button">click me</button>
  </div>
</template>
<style scoped lang='less'>

</style>