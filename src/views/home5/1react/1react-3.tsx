import {useState} from 'react'
import {ref,defineComponent} from 'vue'

const myReactComponentName=defineComponent({
    name:"myReactComponentName",
    setup(){
        let str="test1"
        //   let [str2,setStr]=useState('test1')
        // let [obj,setObj]=useState(()=>{
        //     let date=new Date();
        //     return {
        //         date:date,
        //         name:"zzhui"
        //     }
        // })
        //异步渲染  阻断相同渲染  解决办法 setIndex((prev)=>prev+1) setIndex((prev)=>prev+1) 
        // setObj({
        //     ...obj,
        //     name:"newZhu"
        // })
          const data=ref('test1')
          const change=()=>{
            str="test2"
            data.value="test2"
           // setStr("test2")
            console.log(str,data.value)
          }
          return ()=> (
            <div>
                <div>{str}</div>
                <div>{JSON.stringify(data.value)}</div>
                <div>{data.value}</div>
                <button onClick={change}>跟改值</button>
            </div>
          )
    }
})
export default myReactComponentName