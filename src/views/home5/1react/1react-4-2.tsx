function myreact(props:any){
    console.log(props)
    let funchild=()=>{
          props.callback(props.text)
    }
    return (
        <div>
            <div>child2</div>
            <div>子组件值：{props.text}</div>
            <button onClick={funchild}>子组件按钮 子传父</button>
        </div>
    )
}
export default myreact