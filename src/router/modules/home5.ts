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
        }
    ]
    }