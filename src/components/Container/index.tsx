import { type FC } from "react"
import "./index.scss"
import { type IContainer } from "./interface"

const Container: FC<IContainer> = (props) => {
    const { children, } = props

    return (
        <div className="container">
            {children}
        </div>
    )
}

export default Container
