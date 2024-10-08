
export default function keyMonitor() {
  setTimeout(() => {
    var trs = document.getElementsByTagName("tr")
    var inputs = document.getElementsByTagName("input")
    inputs.forEach(input => {
      input.onfocus = (e) => {
        focusInput.value = e
      }
    })
    var index = 0
    var x = 0
    var y = 0
    for (var poix = 0; poix < trs.length; poix++) {
      y = 0
      for (var poiy = 0; poiy < trs[poix].children.length; poiy++) {
        if (trs[poix].children[poiy].children.length >= 1 && trs[poix].children[poiy].ariaSelected != "false") {
          inputs[index].x = x
          inputs[index].y = y
          inputs[index].index = index
          index++
          y += 1
          x = poix
        }
      }
    }
    document.addEventListener("keydown", function inputClick(e) {
      switch (e.keyCode) {
        //上
        case 38:
          var poix = focusInput.value.originalTarget.x
          var poiy = focusInput.value.originalTarget.y
          poix -= 1
          var isfocus = false
          for (var i = 0; i < 30; i++) {
            if (!isfocus) {
              inputs.forEach(item => {
                if (item.x == poix && item.y == poiy) {
                  isfocus = true
                  item.focus()
                }
              })
              poiy-=1
              if(poiy<0){
                poix-=1
                poiy = focusInput.value.originalTarget.y
              }
            }
          }

          break;
        //下
        case 40:
          var poix = focusInput.value.originalTarget.x
          var poiy = focusInput.value.originalTarget.y
          poix += 1
          var isfocus = false
          for (var i = 0; i < 30; i++) {
            if (!isfocus) {
              inputs.forEach(item => {
                if (item.x == poix && item.y == poiy) {
                  isfocus = true
                  item.focus()
                }
              })
              poiy-=1
              if(poiy<0){
                poix+=1
                poiy = focusInput.value.originalTarget.y
              }
            }
          }
          break;
        //右
        case 39:
          var index = focusInput.value.originalTarget.index
          console.log(index)
          inputs[index + 1].focus()
          break;
        //左
        case 37:
          var index = focusInput.value.originalTarget.index
          console.log(index)
          inputs[index - 1].focus()
          break;
      }
    })
  }, 3000)
}