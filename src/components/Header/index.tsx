import { FC, ReactNode, useMemo } from "react"
import { NavBar } from 'antd-mobile'
import routes from '../../../config/routes'

interface HeaderProps {
    centerRender?: string | ReactNode
}

const Header: FC<HeaderProps> = ({ centerRender }) => {

    const filterPathTitle = (routeArr: any[]) => {
        return routeArr.find(item => {
            const { routes, path } = item
            if (Array.isArray(item.routes)) {
                filterPathTitle(item.routes)
            }
            return path === location.pathname
        })
    }

    const title = useMemo(() => {
        const { name } = filterPathTitle(routes)

        return name || '错误页面'
    }, [location.pathname])

    const back = () => {

    }

    return <NavBar onBack={back}>
        {centerRender ? centerRender : title}
    </NavBar>

}
export default Header