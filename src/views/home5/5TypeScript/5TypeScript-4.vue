<script setup lang='ts'>
import { ref, isRef, shallowRef, onMounted } from 'vue'
const data = ref({

})
//class修饰符  readonly只读 private内部使用 public公有 protected 内部或子内使用
interface Options {
    el: string | HTMLElement
}
interface VueClass {
    options: Options
    init(): void
}
//虚拟Dom简单版
interface Vnode {
    tag: string
    text?: string | null
    children?: Vnode[]
}
class Dom {
    private createElement(el: string) {
        return document.createElement(el)
    }
    private setText(el: HTMLElement, text: string | null | undefined) {
        el.textContent = text as string | null
        // text? el.innerHTML = text:""
    }
    protected render(data: Vnode) {
        let root = this.createElement(data.tag)
        if (data.children && Array.isArray(data.children)) {
            data.children.forEach(item => {
                let child = this.render(item)
                root.appendChild(child)
            })
        } else {
            this.setText(root, data.text)
        }
        return root
    }
}
class Vue extends Dom implements VueClass {
    options: Options
    constructor(options: Options) {
        super()//父类的prototype.constructor.call  调用父类的构造函数
        this.options = options
        this.init()
    }
    public init(): void {
        let data: Vnode = {
            tag: "div",
            children: [{
                tag: "section",
                text: "子节点1"
            },
            {
                tag: "section",
                text: "子节点1"
            }]
        }
        let app = typeof this.options.el == 'string' ? document.querySelector(this.options.el) : this.options.el
        console.log("app", app, this.options.el)
        app?.appendChild(this.render(data))
    }
}
class Ref2{
     _value:any
    constructor(value:any){
        this._value=value
    }
    get value(){
       return this._value+"vvv"
    }
    set value(newValue){
       this._value=newValue
    }
}
let b=new Ref2('zhuhui')

//abstract 定义抽象类  只能描述,不能创建抽象类的实例,可以被继承
abstract class Person{
    name:string
    constructor(name?:string){
        this.name=name as any
    }
    getName():string{
        return this.name
    }
    abstract init(name:string):void
}
//let g=new Person() 无法创建抽象类的实例
class People extends Person{
    constructor(){
        super()
    }
    init(name: string): void {
        console.log("init",name)
    }
    setName(name:string){
        this.name=name
    }
}
let people=new People()
people.setName("zhuhuipeople")
console.log(people.init("name"),people.getName())
onMounted(() => {
    let a=new Vue({
        el: "#myApp"
    })
    b.value="sadasd"
    console.log(b._value,b.value)
})
</script>
<template>
    <div id="myApp">
    </div>
</template>
<style scoped lang='less'></style>