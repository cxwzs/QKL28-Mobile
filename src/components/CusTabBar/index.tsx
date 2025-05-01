import { FC } from "react"
import { TabBar } from 'antd-mobile'

import {
    AppOutline,
    MessageOutline,
    MessageFill,
    UnorderedListOutline,
    UserOutline,
} from 'antd-mobile-icons'

interface CusTabBarProps {

}

const CusTabBar: FC<CusTabBarProps> = () => {

    const tabs = [
        {
            key: 'home',
            title: '首页',
            icon: <AppOutline />
        },
        {
            key: 'todo',
            title: '待办',
            icon: <UnorderedListOutline />
        },
        {
            key: 'message',
            title: '消息',
            icon: (active: boolean) =>
                active ? <MessageFill /> : <MessageOutline />
        },
        {
            key: 'personalCenter',
            title: '我的',
            icon: <UserOutline />,
        },
    ]

    return <TabBar>
        {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
    </TabBar>
}

export default CusTabBar