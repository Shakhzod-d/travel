import { ReasonType } from "../../types"
import { useSanitize } from "../../hooks"

const ReasonCart = ({
    id,
    image,
    title,
    content
}: ReasonType) => {
    const { sanitize } = useSanitize()
    return (
        <div key={id} className="flex flex-col items-center p-4 shadow-md bg-white rounded-3xl">
            <img src={image} alt={title} className="w-[64px] h-[64px]"/>
            <h3 className="text-2xl font-semibold my-4">{title}</h3>
            <h4 className="text-xl text-[#666666] max-w-[340px] break-words">{sanitize(content)}</h4>
        </div>
    )
}

export default ReasonCart