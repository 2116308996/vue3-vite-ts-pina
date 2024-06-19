export default 
    {
        path: '/home3/1ExcelToJson',
        name: 'home3/1ExcelToJson',
        redirect:'/home3/1ExcelToJson',
        meta:{
            title:"我的小工具"
        },
        component:() => import('@/views/home3/1ExcelToJson.vue'),
        children:[{
            path: '/home3/1ExcelToJson',
            name: 'home3/1ExcelToJson',
            component: () => import('@/views/home3/1ExcelToJson.vue'),
            meta: {
                title: '1ExcelToJson'
            }
        },
		{
		    path: '/home3/2Random',
		    name: 'home3/2Random',
		    component: () => import('@/views/home3/2Random.vue'),
		    meta: {
		        title: '2Random'
		    }
		}
    ]
    }