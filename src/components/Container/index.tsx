import { type FC } from "react"
import "./index.scss"
import { type IContainer } from "./interface"

const Container: FC<IContainer> = (props) => {
    const { children, } = props

    return (
        <main className="container">
            {children}
        </main>
    )
}

export default Container
