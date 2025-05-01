import { defineConfig } from '@umijs/max'
import pxtorem from 'postcss-pxtorem'
import routes from './routes'

export default defineConfig({
    antd: {},
    access: {},
    model: {},
    initialState: {},
    request: {},
    layout: {
        title: 'QKL28.com',
        locale: false
    },
    routes,
    npmClient: 'yarn',
    proxy: {
        '/api': {
            target: 'http://52.199.187.237/', // 目标服务器地址
            changeOrigin: true, // 是否改变请求源
            // pathRewrite: { '^/api': '/api' }, // 路径重写
        }
    },
    extraPostCSSPlugins: [
        pxtorem({
            rootValue: 75, // 设计稿宽度 / 10，如设计稿是 750px，则为 75
            propList: ['*'], // 对所有属性生效，也可以指定特定属性如 ['font-size']
            selectorBlackList: [], // 忽略的选择器，如第三方组件库
            replace: true,
            mediaQuery: false, // 是否处理媒体查询中的 px
            minPixelValue: 2, // 最小转换像素值
        }),
    ]
})

