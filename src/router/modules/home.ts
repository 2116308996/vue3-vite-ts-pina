export default 
    {
        path: '/1hello',
        name: '1hello',
        redirect:'/1hello',
        meta:{
            title:"Vue3基础"
        },
        component:() => import('@/views/home/1hello.vue'),
        children:[{
            path: '/1hello',
            name: '1hello',
            component: () => import('@/views/home/1hello.vue'),
            meta: {
                title: 'vue3指令'
            }
        },
        {
            path: '/2hello',
            name: '2hello',
            component: () => import('@/views/home/2hello.vue'),
            meta: {
                title: 'Reactive&Ref'
            }
        },
        {
            path:'/3computed',
            name:'3computed',
            component:()=>import('@/views/home/3computeds.vue'),
            meta:{
                title:'Computed'
            }
        },
        {
            path:'/4watch',
            name:'4watch',
            component:()=>import('@/views/home/4watch.vue'),
            meta:{
                title:'Watch&WatchEffect'
            }
        },
        {
            path:"/5component",
            name:'5component',
            component:()=>import('@/views/home/5component.vue'),
            meta:{
                title:'组件'
            }
        },
        {
            path:"/6tsx",
            name:'6tsx',
            component:()=>import('@/views/home/6tsx.vue'),
            meta:{
                title:'TSX'
            }
        }
    ]
    }