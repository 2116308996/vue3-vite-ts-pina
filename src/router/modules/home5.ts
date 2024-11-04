export default 
    {
        path: '/home5/1react',
        name: 'home5/1react',
        redirect:'/home5/1react',
        meta:{
            title:"其他JS框架"
        },
        component:() => import('@/views/home5/1react.vue'),
        children:[{
            path: '/home5/1react',
            name: 'home5/1react',
            component: () => import('@/views/home5/1react.vue'),
            meta: {
                title: 'React'
            }
        },
        {
            path: '/home5/2jquery',
            name: 'home5/2jquery',
            component: () => import('@/views/home5/2jquery.vue'),
            meta: {
                title: 'jquery'
            }
        },
        {
            path: '/home5/3qrcode',
            name: 'home5/3qrcode',
            component: () => import('@/views/home5/3qrcode.vue'),
            meta: {
                title: 'QRCode'
            }
        },
        {
            path: '/home5/4unocss',
            name: 'home5/4unocss',
            component: () => import('@/views/home5/4unocss.vue'),
            meta: {
                title: 'unoCss'
            }
        },
        {
            path: '/home5/5TypeScript',
            name: 'home5/5TypeScript',
            component: () => import('@/views/home5/5TypeScript.vue'),
            meta: {
                title: 'TypeScript'
            }
        }
    ]
    }