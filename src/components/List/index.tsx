import { type FC } from "react"
import "./index.scss"
import { type IList } from "./interface"

const List: FC<IList> = (props) => {
    const { children, } = props

    return (
        <section className="list">
            {children}
        </section>
    )
}

export default List
