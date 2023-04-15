import { type DetailedHTMLProps } from "react"

export interface ICard extends DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    src: string
    alt: string
}
