export default 
    {
        path: '/1v-model',
        name: '1v-model',
        redirect:'/1v-model',
        meta:{
            title:"Vue3进阶"
        },
        component:() => import('@/views/home2/1v-model.vue'),
        children:[{
            path: '/1v-model',
            name: '1v-model',
            component: () => import('@/views/home2/1v-model.vue'),
            meta: {
                title: 'v-model'
            }
        },
        {
            path: '/2function',
            name: '2function',
            component: () => import('@/views/home2/2function.vue'),
            meta: {
                title: 'function'
            }
        }
    ]
    }