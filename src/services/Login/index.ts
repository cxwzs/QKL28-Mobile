/**
 * 登录&注册模块
 */
import { request } from '@umijs/max'

// 注册
export const RegisterApi = (params: any) => {
    return request('/qkl/api/users/register', {
        method: 'POST',
        data: params
    })
}

// 登录
export const LoginApi = (params: any) => {
    return request('/api/users/login', {
        method: 'POST',
        data: params
    })
}