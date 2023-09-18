import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const darkstore = defineStore('dark', () => {
  const dark = ref(false)
  function isdark() {
    dark.value=!dark.value
  }
  return { dark,isdark }
})
export default darkstore
