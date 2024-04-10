export default 
    {
        path: '/home4/1threejs',
        name: 'home4/1threejs',
        redirect:'/home4/1threejs',
        meta:{
            title:"Threejs"
        },
        component:() => import('@/views/home4/1threejs.vue'),
        children:[{
            path: '/home4/1threejs',
            name: 'home4/1threejs',
            component: () => import('@/views/home4/1threejs.vue'),
            meta: {
                title: '1threejs'
            }
        }
    ]
    }