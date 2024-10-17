import React from 'react'
import './1react-2.css'
import ReactDOM from 'react-dom/client'
const Myreact = () => {
    return (<div>消息提示</div>)
};
window.onShow = () => {
    console.log("aaa")
    const message = document.createElement('div')
    message.className = "asd"
    document.body.appendChild(message)

    // const root = ReactDOM.createRoot(message)
    // root.render(<Myreact />)

    setTimeout(() => {
    //  root.unmount()
        document.body.removeChild(message)
    }, 2000)
}

declare global {
    interface Window {
        onShow: () => void
    }
}
