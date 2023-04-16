import { type FC } from "react"
import { heartSvg } from "../../assets/svg"
import "./index.scss"
import { type ICard } from "./interface"

const Card: FC<ICard> = (props) => {

    const { src, alt, like, ...otherProps } = props

    return (
        <article className="card" {...otherProps}>
            <img
                className="card__image"
                src={src}
                alt={alt}
            />
            {
                like &&
                <div
                    className="card__like"
                >
                    <img src={heartSvg} alt="like"/>
                </div>
            }
        </article>
    )
}

export default Card
