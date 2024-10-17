import './1react-4-1'
import Child2 from './1react-4-2'
import {ref} from "vue"
import React, { useState, useEffect } from 'react';
//react组件引入需要使用大写
function myreact(){
    let a="zhu"
    const data=ref("aaa")
    //使用这个 才能是响应式
   // const [str,setStr]=useState("zzzz")
    let changeA=()=>{
        a="hui"
        data.value="bbb"
        console.log(a,data.value)
    }
    let fun=(str:any)=>{
        console.log(str)
    }
    return (
        <div>
            parent
            <button onClick={()=>{window.onShow()}}>消息</button>
            {/* <Child1></Child1> */}
            <div>父组件值:{a}</div>
            <button onClick={changeA}>父组件按钮</button>
            <Child2 callback={fun} text={data.value}></Child2>
        </div>
    )
}
export default myreact