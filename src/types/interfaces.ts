export interface NavItems {
    id: string,
    name: string,
    path: string,
    active: boolean
}

type Button = "submit" | "reset" | "button" | undefined

export interface ButtonProps {
    type: Button,
    text: string,
    background: string,
    color: string,
    weight: string,
    onclick?: React.MouseEventHandler<HTMLButtonElement>
}