import { defineComponent, ref } from "vue"
// export default function(){
//      return (<div>小满</div>)
//  }

// export default defineComponent({
//      data(vm) {
//          return{
//           age:23
//          }
//      },
//      render(){
//           return(<div>{this.age}</div>)
//      }
// })
interface Props {
     name?: String
}
export default defineComponent({
     props: {
          name: String
     },
     emit: ['on-click'],
     setup(props: Props,{emit}) {
          const flag = ref(false)
          const fn = () => {
               emit('on-click', props?.name)
          }
          //return()=>(<div v-if={flag}>setup</div>)
          //return ()=>(<div>{flag.value?<div>true</div>:<div>false</div>}</div>)
          return () => (
          <div>
               <div>{props?.name}</div>
               <button onClick={fn}>事件</button>
          </div>
          )
     }
})