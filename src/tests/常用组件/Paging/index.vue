<script setup>
import { ref, isRef, shallowRef, onMounted } from 'vue'
const props = defineProps({
  widthDefault: {
    type: String,
    default: 15
  },
  widthx: {
    type: String,
    default: 10
  },
  widthy: {
    type: String,
    default: 60
  }
})
const open = ref(true)
const fun = () => {
  document.querySelector('#aaa').style.width = props.widthDefault + '%'
  document.querySelector('#bbb').style.width = 'calc(100% - ' + props.widthDefault + '% - 5px)'
}
const vMove = (...e) => {
  const moveElement = e[0]
  const moveElementa = document.querySelector('#aaa')
  const moveElementb = document.querySelector('#bbb')
  const moveElementmain = document.querySelector('#main')
  const widthx = moveElementmain.offsetWidth * parseInt(props.widthx) / 100
  const widthy = moveElementmain.offsetWidth * parseInt(props.widthy) / 100
  // console.log(widthx,widthy)
  // console.log(moveElementa)
  // console.log(moveElementb)
  const mouseDown = (el) => {

    moveElementmain.style.cursor = 'e-resize'

    let x = el.clientX
    let awidth = moveElementa.offsetWidth
    let bwidth = moveElementb.offsetWidth
    const move = (es) => {
      if (es.clientX - x + awidth > widthx && es.clientX - x + awidth < widthy) {
        moveElement.style.left = 0 + 'px'
        moveElementa.style.width = es.clientX - x + awidth + 'px'
        moveElementb.style.width = bwidth - (es.clientX - x) + 'px'
      }
    }
    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup', () => {
      moveElementmain.style.cursor = 'default'
      document.removeEventListener('mousemove', move)
    })
  }
  moveElement.addEventListener('mousedown', mouseDown)
}
onMounted(() => {
  fun()
})
const views = (item) => {
  let awidth = document.querySelector('#aaa')
  let bwidth = document.querySelector('#bbb')
  if (item) {
    awidth.style.width = '0px'
    bwidth.style.width = 'calc(100% - 4px)'
    open.value = false
  } else {
    awidth.style.width = props.widthDefault + '%'
    bwidth.style.width = 'calc(100% - ' + props.widthDefault + '% - 5px)'
    open.value = true
  }
}
</script>
<template>
  <div>
    <div id="main">
      <div id="aaa">
        <slot name="a"></slot>
      </div>
      <div class="lines" v-move>
        <div v-if="open" class="linesbutton" @click="views(true)">
          <el-icon>
            <ArrowLeft />
          </el-icon>
        </div>
        <div v-else class="linesbutton" @click="views(false)">
          <el-icon>
            <ArrowRight />
          </el-icon>
        </div>
      </div>
      <div id="bbb">
        <slot name="b"></slot>
      </div>
    </div>
  </div>
</template>
<style scoped lang='scss'>
#main {
  display: flex;
  justify-content: left;

  #aaa {
    width: 20%;
    min-height: 300px;
    overflow: hidden;
  }

  .lines {
    width: 4px;
    min-height: 300px;
    border-left: #ccc solid 1px;
    position: relative;
    display: flex;
    justify-content: left;
    align-items: center;

    .linesbutton {
      position: relative;
      z-index: 100;
      background-color: rgb(68, 126, 217);
      border-radius: 0px 5px 5px 0px;
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      color: white;
    }
  }

  .linesbutton:hover {
    cursor: pointer;
  }

  .lines:hover {
    cursor: e-resize;
  }

  #bbb {
    width: calc(100% - 20% - 5px);
    min-height: 300px;
  }
}
</style>