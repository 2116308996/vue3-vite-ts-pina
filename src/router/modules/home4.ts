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
        },     
        {
            path: '/home4/2cesium',
            name: 'home4/2cesium',
            component: () => import('@/views/home4/2cesium.vue'),
            meta: {
                title: '2cesium'
            }
        }
    ]
    }