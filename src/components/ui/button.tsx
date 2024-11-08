import { ButtonProps } from "../../types"

const Button = ({ text, background, onclick }: ButtonProps) => {
    return (
        <button className={`bg-${background} px-3 py-2`} onClick={onclick}>{text}</button>
    )
}

export default Button   