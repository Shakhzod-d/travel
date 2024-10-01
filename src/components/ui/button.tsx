import { ButtonProps } from "../../types"

const Button = ({ type, text, background, onclick, color, weight }: ButtonProps) => {
    return (
        <button 
            type={type}
            className={`bg-[${background}] px-3 py-2 rounded-[200px] ${color} ${weight}`} 
            onClick={onclick}>
                {text}
        </button>
    )
}

export default Button