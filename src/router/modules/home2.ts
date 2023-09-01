export default 
    {
        path: '/1v-model',
        name: '1v-model',
        redirect:'/1v-model',
        meta:{
            title:"Vue3语法进阶"
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
    ]
    }