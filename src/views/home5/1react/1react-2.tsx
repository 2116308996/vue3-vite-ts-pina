import React from 'react'
import './1react-2.css'
function myReactComponentName(props:any){
  console.log("props",props)
  const {name}=props
  const a={name:"zzz"}
  const pi=3.1415926
  function childClickHandle(){
    props.onMyEvent('React子组件')
  }
  function fun(param:string,e:MouseEvent){
    console.log(param,e)
  }
  const fun2=<T,>(params:T)=>{
      console.log(params)
  }
  const id="divh"
  const ls="lscla"
  const styles={color:"red"}
  let html=`<h2>我是html</h2>`
  let arr=[1,2,3,4,5]
  return (
    <div>
        <h2  class={`${ls} aaa bbb ccc`} style={{color:"blue"}}>{name}</h2>
        <h2  class={ls +' aaa bbb ccc'}>{a}</h2>
        <h2 class={'aaa bbb ccc'} style={styles}>{JSON.stringify(a)}</h2>
        <h2 id={id} class={ls}>{pi.toFixed(2)}</h2>
        <button onClick={(e)=>fun('点我',e)}>点我</button>
        <button onClick={childClickHandle}>向Vue项目传递React子组件的数据</button>
        {/* <div dangerouslySetInnerHtml={{__html:html}}></div> */}
        <div v-html={html}></div>
        <div>
           {arr.map(v=>{
            return (<div id={v.toString()} key={v}>{v}</div>)
           })}
        </div>
    </div>
  )
}
export default myReactComponentName