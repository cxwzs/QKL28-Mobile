import { FC } from "react"

interface BasicLayoutProps {
    children: any
}

const BasicLayout: FC<BasicLayoutProps> = ({ children }) => {

    return <>
        <div>陈晓文</div>
        {children}
    </>
}

export default BasicLayout