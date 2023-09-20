<script setup lang='ts'>
import { ref, isRef, shallowRef, onMounted } from 'vue'
const props = defineProps({
  widthx: {
    type: String,
    default: 0
  },
  widthy: {
    type: String,
    default: 100
  }
})
const vMove = (...e: any) => {
  const moveElement = e[0]
  const moveElementa: HTMLElement = document.querySelector('#aaa') as HTMLElement
  const moveElementb: HTMLElement = document.querySelector('#bbb') as HTMLElement
  const moveElementmain: HTMLElement = document.querySelector('#main') as HTMLElement
  const widthx = moveElementmain.offsetWidth * parseInt(props.widthx)/100
  const widthy = moveElementmain.offsetWidth * parseInt(props.widthy)/100
  // console.log(widthx,widthy)
  // console.log(moveElementa)
  // console.log(moveElementb)
  const mouseDown = (el: MouseEvent) => {

    moveElementmain.style.cursor='e-resize'

    let x = el.clientX
    let awidth = moveElementa.offsetWidth
    let bwidth = moveElementb.offsetWidth
    const move = (es: MouseEvent) => {
      if (es.clientX - x + awidth > widthx && es.clientX - x + awidth < widthy) {
        moveElement.style.left = 0 + 'px'
        moveElementa.style.width = es.clientX - x + awidth + 'px'
        moveElementb.style.width = bwidth - (es.clientX - x) + 'px'
      }
    }
    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup', () => {
      moveElementmain.style.cursor='default'
      document.removeEventListener('mousemove', move)
    })
  }
  moveElement.addEventListener('mousedown', mouseDown)
}
onMounted(() => {

})
</script>
<template>
  <div>
    <div id="main">
      <div id="aaa">
        <slot name="a"></slot>
      </div>
      <div class="lines" v-move></div>
      <div id="bbb">
        <slot name="b"></slot>
      </div>
    </div>
  </div>
</template>
<style scoped lang='less'>
#main {
  display: flex;
  justify-content: left;

  #aaa {
    width: 20%;
    height: 300px;
  }

  .lines {
    width: 4px;
    height: 300px;
    border-left: #ccc solid 1px;
    position: relative;
  }

  .lines:hover {
    cursor: e-resize;
  }

  #bbb {
    width: calc(100% - 20% - 5px);
    height: 300px;
  }
}
</style>