const routes = [
    {
        name: '首页',
        path: '/home',
        component: './Home',
        layout: false
    },
    {
        name: '活动',
        path: '/acitvity',
        component: './Acitvity',
        layout: false
    },
    {
        name: '客服',
        path: '/customer',
        component: './Customer',
        layout: false
    },
    {
        name: '我的',
        path: '/mine',
        component: './Mine',
        layout: false
    }
]

export default [
    {
        path: '/',
        redirect: '/home',
    },
    {
        name: '登录',
        path: '/login',
        component: './Login',
        layout: false
    },
    ...routes
]