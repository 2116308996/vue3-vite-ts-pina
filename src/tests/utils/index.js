
// 深拷贝
export function deepClone(target) {
    // 定义一个变量
    let result
    // 如果当前需要深拷贝的是一个对象的话
    if (typeof target === 'object') {
        // 如果是一个数组的话
        if (Array.isArray(target)) {
            result = [] // 将result赋值为一个数组，并且执行遍历
            for (let i in target) {
                // 递归克隆数组中的每一项
                result.push(deepClone(target[i]))
            }
            // 判断如果当前的值是null的话；直接赋值为null
        } else if (target === null) {
            result = null
            // 判断如果当前的值是一个RegExp对象的话，直接赋值
        } else if (target.constructor === RegExp) {
            result = target
        } else {
            // 否则是普通对象，直接for in循环，递归赋值对象的所有值
            result = {}
            for (let i in target) {
                result[i] = deepClone(target[i])
            }
        }
        // 如果不是对象的话，就是基本数据类型，那么直接赋值
    } else {
        result = target
    }
    // 返回最终结果
    return result
}

// 防抖
export const debounce = (fn, delay = 300, immediate = true) => {
    let timer = null // 借助闭包
    return function() {
        if (timer) {
            clearTimeout(timer)
        }
        if (immediate) {
            let callNow = !timer
            timer = setTimeout(() => {
                timer = null
            }, delay)
            if (callNow) {
                fn.apply(this, arguments)
            }
        } else {
            timer = setTimeout(() => {
                fn.apply(this, arguments)
            }, delay)
        }
    }
}

export function debounce2(func, wait, immediate) {
    let timeout, args, context, timestamp, result
    const later = function() {
        // 据上一次触发时间间隔
        const last = +new Date() - timestamp

        // 上次被包装函数被调用时间间隔last小于设定时间间隔wait
        if (last < wait && last > 0) {
            timeout = setTimeout(later, wait - last)
        } else {
            timeout = null
            // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
            if (!immediate) {
                result = func.apply(context, args)
                if (!timeout) context = args = null
            }
        }
    }

    return function(...args) {
        context = this
        timestamp = +new Date()
        const callNow = immediate && !timeout
        // 如果延时不存在，重新设定延时
        if (!timeout) timeout = setTimeout(later, wait)
        if (callNow) {
            result = func.apply(context, args)
            context = args = null
        }
        return result
    }
}

export function runInterval(func, interval) {
    setTimeout(() => {
        func()
        runInterval(func, interval)
    }, interval)
}

// 节流
export function throttle(fn, delay = 300) {
    let valid = true
    return function() {
        if (!valid) {
            return false
        }
        // 工作时间，执行函数并且在间隔期内把状态位设为无效
        valid = false
        setTimeout(() => {
            fn.apply(this, arguments)
            valid = true
        }, delay)
    }
}

export function auth(value) {
    let auth
    if (typeof value === 'string') {
        auth = hasPermission(value)
    } else {
        auth = value.some(item => {
            return hasPermission(item)
        })
    }
    return auth
}

export function authAll(value) {
    const auth = value.every(item => {
        return hasPermission(item)
    })
    return auth
}

export function dateOnlyFormat(time) {
    if (time) {
        var date = new Date(time)
        var year = date.getFullYear()
        var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
        var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
        // 拼接
        return year + '-' + month + '-' + day
    } else {
        return ''
    }
}
export function dateTimeFormat(time) {
    if (time) {
        var date = new Date(time)
        var year = date.getFullYear()
        var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
        var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
        var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
        var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
        var seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
        // 拼接
        return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds
    } else {
        return ''
    }
}

export function formatSeconds(num) {
    let second = parseInt(num)
    let minute = 0
    let hour = 0
    if (second > 60) {
        minute = parseInt(second / 60)
        second = parseInt(second % 60)
        if (minute > 60) {
            hour = parseInt(minute / 60)
            minute = parseInt(minute % 60)
        }
    }
    let result = '' + parseInt(second) + '秒'
    if (minute > 0) {
        result = '' + parseInt(minute) + '分' + result
    }
    if (hour > 0) {
        result = '' + parseInt(hour) + '小时' + result
    }
    return result
}

const CustomLocalStorage = {
    set: function(key, value, ttl_ms) {
        var data = { value: value, expirse: new Date().getTime() + ttl_ms }
        localStorage.setItem(key, JSON.stringify(data))
    },
    get: function(key) {
        var data = JSON.parse(localStorage.getItem(key))
        if (data !== null) {
            if (data.expirse != null && data.expirse < new Date().getTime()) {
                localStorage.removeItem(key)
            } else {
                return data.value
            }
        }
        return null
    }
}
export default CustomLocalStorage
