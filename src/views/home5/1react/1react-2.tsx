import React from 'react'
function myReactComponentName(props:any){
  console.log("props",props)
  const {name}=props
  function childClickHandle(){
    props.onMyEvent('React子组件')
  }
  return (
    <div>
        <h2>{name}</h2>
        <button onClick={childClickHandle}>向Vue项目传递React子组件的数据</button>
    </div>
  )
}
export default myReactComponentName