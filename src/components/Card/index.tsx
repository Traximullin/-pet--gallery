import { type FC } from "react"
import "./index.scss"
import { type ICard } from "./interface"

const Card: FC<ICard> = (props) => {

    const { src = "https://via.placeholder.com/600/92c952", alt = "img", ...otherProps } = props

    return (
        <article className="card" {...otherProps}>
            <img
                className="card__image"
                src={src}
                alt={alt}
            />
        </article>
    )
}

export default Card
