type options={
    el:HTMLElement,
    callback:Function
}
function useResize(options:options){
    let resize=new ResizeObserver((enteries)=>{
        options.callback(enteries[0].contentRect)
    })
    resize.observe(options.el)
}
// const install =(app:App)=>{
//     app.directive('resize',{
//         mounted(el,binding){
//             useResize(el.binding.value)
//         }
//     })
// }
// useResize.install=install
export default useResize