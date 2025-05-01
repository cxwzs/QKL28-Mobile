/**
 * BasicLayout
*/
import { FC } from "react"
import Styles from './index.module.less'
import { SafeArea } from 'antd-mobile'
import Header from '@/components/Header'
import CusTabBar from '@/components/CusTabBar'

interface BasicLayoutProps {
    children: any
    showHeader?: boolean
    showBar?: boolean
}

const BasicLayout: FC<BasicLayoutProps> = ({ children, showHeader = true, showBar = true }) => {

    return <div className={Styles.container}>
        <div style={{ background: '#ace0ff' }}>
            <SafeArea position='top' />
        </div>
        <div className={Styles.box}>
            {
                showHeader && <Header />
            }
            <div className={Styles.content}>
                {children}
            </div>
            {
                showBar && <CusTabBar />
            }
        </div>
        <div style={{ background: '#ffcfac' }}>
            <SafeArea position='bottom' />
        </div>
    </div>
}

export default BasicLayout
