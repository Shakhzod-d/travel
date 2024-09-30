export interface NavItems {
    id: string,
    name: string,
    path: string,
    active: boolean
}

export interface ButtonProps {
    text: string,
    background: string,
    onclick?: React.MouseEventHandler<HTMLButtonElement>
}