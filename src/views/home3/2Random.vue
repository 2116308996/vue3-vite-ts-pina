<template>
	<div>
		<el-row :gutter="20">
			<el-col :span="8">
				<el-form-item label="样本数量">
				    <el-input v-model="data.num"></el-input>
				</el-form-item>
			</el-col>
			<el-col :span="8">
				<el-form-item label="S级单抽概率">
				    <el-input v-model="data.s"></el-input>
				</el-form-item>
			</el-col>
			<el-col :span="8">		
				<el-form-item label="A级单抽概率">
				    <el-input v-model="data.a"></el-input>
				</el-form-item>
			</el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :span="8">
				<el-form-item label="S级增幅需要抽数">
				    <el-input v-model="data.zs"></el-input>
				</el-form-item>
			</el-col>
			<el-col :span="8">
				<el-form-item label="S级增幅概率">
				    <el-input v-model="data.zl"></el-input>
				</el-form-item>
			</el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :span="8">
				<el-form-item label="保底S级抽数">
				    <el-input v-model="data.bs"></el-input>
				</el-form-item>
			</el-col>
			<el-col :span="8">
				<el-form-item label="保底A级抽数">
				    <el-input v-model="data.ba"></el-input>
				</el-form-item>
			</el-col>
			<el-col :span="8">
				<el-form-item label="S级是否占用A级保底">
				    <el-radio v-model="data.bb" :label="true">是</el-radio>
				    <el-radio v-model="data.bb" :label="false">否</el-radio>
				</el-form-item>
			</el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :span="8">
				<button @click="fun">计算</button>
			</el-col>
			<el-col :span="8">
				S级综合概率：{{data.numsvalue}}
			</el-col>
			<el-col :span="8">
				A级综合概率：{{data.numavalue}}
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="8">
				<button @click="fun2('asd')">点击</button>
			</el-col>
		</el-row>
	</div>
</template>

<script setup>
import util from '@/util/index.ts'
	const data=ref({
		num:1000000,
		s:0.008,
		a:0.06,
		bs:80,
		ba:10,
		zl:0.06,
		zs:80,
		bb:true,
        nums:0,
		numa:0,
		numavalue:0,
		numbvalue:0
	})
	/* watch(()=>data,(nerValue,oldValue)=>{
		fun()
	},{deep:true}) */
	const fun=()=>{
		console.log(data.value)
		data.value.nums=0
		data.value.numa=0
		var si=1,ai=1;
		if(data.value.zs>=data.value.bs){
			data.value.zs=data.value.bs
		}
		for(var i=1;i<=data.value.num;i++){
			var random=Math.floor(Math.random()*10000) 
			if(si<data.value.zs){
				if(random<data.value.s*10000){
					data.value.nums++
					si=1
					data.value.bb?ai=1:""
				}else{
					si++
				}
			}else if(si<data.value.bs){
				if(random<(data.value.s*10000+(si-data.value.zs)*data.value.zl*10000)){
					data.value.nums++
					si=1
					data.value.bb?ai=1:""
				}else{
					si++
				}
			}else{
				data.value.nums++
				data.value.bb?ai=1:""
				si=1
			}
			if(ai<data.value.ba){
				if(random>=data.value.s*10000&&random<(data.value.s*1.0+data.value.a*1.0)*10000){
					data.value.numa++
					ai=1
				}
				else{
					ai++
				}
			}else{
				data.value.numa++
				ai=1
			}
			
		}
		data.value.numavalue=data.value.numa/data.value.num
		data.value.numsvalue=data.value.nums/data.value.num
	}
	fun()
	const aaa=(vl)=>{
		console.log(vl)
	}
    const fun2=util.useThrottle(aaa,2000);
		// util.useThrottle(aaa,2000)();
		// util.useDebounce(aaa,2000);
	
</script>

<style lang="scss">
	
	
</style>