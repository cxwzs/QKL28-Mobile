/**
 * 登录&注册
 */
import { Button, Form, Input } from 'antd-mobile'
import Styles from './index.module.less'
import {
    RegisterApi,
    LoginApi
} from '@/services/Login'

const Login = () => {

    const [form] = Form.useForm()

    const onRegister = () => {
        form.validateFields().then(formRes => {
            console.log(formRes)
            RegisterApi(formRes).then(res => {

            })
        })
    }

    const onLogin = () => {
        form.validateFields().then(formRes => {
            console.log(formRes)
            LoginApi(formRes).then(res => {

            })
        })
    }

    return <div className={Styles.container}>
        <Form form={form} initialValues={{
            username: 'admin',
            email: '2358936549@qq.com',
            password: 'admin123456'
        }}>
            <Form.Item label='账户' name='username'>
                <Input placeholder='请输入' />
            </Form.Item>
            {/* <Form.Item label='邮箱' name='email'>
                <Input placeholder='请输入' />
            </Form.Item> */}
            <Form.Item label='密码' name='password'>
                <Input placeholder='请输入' />
            </Form.Item>
        </Form>
        <Button color='primary' onClick={onLogin}>注册</Button>
    </div>
}

export default Login