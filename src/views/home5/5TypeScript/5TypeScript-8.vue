<script setup lang='ts'>
import { ref, isRef, shallowRef, onMounted } from 'vue'

import { ElMessage } from 'element-plus/lib/components/index.js'
function fun(a: number, b: number): Array<number> {
  return [a, b]
}
function fun2(a: string, b: string): Array<string> {
  return [a, b]
}
//泛型
function fun3<T>(a: T, b: T): Array<T> {
  return [a, b]
}
fun3(1, 2)
fun3<number>(1, 2)
fun3("zzz", "sss")

type A<T> = string | number | T
let a: A<boolean> = "zhuhui"
console.log(a)

interface Person<T> {
  msg: T,
  name: string,
  [propName: string]: any
}
let obj: Person<string> = {
  name: "zhuhui",
  msg: "qwe",
  sex: 1
}
function add<T = number, K = number>(a: T, b: K): Array<T | K> {
  return [a, b]
}
add(1, "qq")

const axios = {
  get<T>(url: string): Promise<T> {
    return new Promise((resolve, reject) => {
      let xhr: XMLHttpRequest = new XMLHttpRequest()
      xhr.open('get', url)
      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
          resolve(JSON.parse(xhr.responseText))
        }
      }
      xhr.send(null)
    })
  }
}
interface Data {
  message: string,
  code: number,
  data: Object
}
axios.get<Data>('/src/views/home5/5TypeScript/data.json').then(res => {
  console.log(res.data)
})
onMounted(() => {
  ElMessage({
    message: '成功',
    type: 'success'
  })
})
</script>
<template>
  <div>
  </div>
</template>
<style scoped lang='less'></style>