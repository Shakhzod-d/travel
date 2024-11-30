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
        <div key={id} className="flex flex-col items-center p-7 shadow-md bg-white rounded-3xl md:w-full">
            <img src={image} alt={title} className="w-[64px] h-[64px]"/>
            <h3 className="text-[36px] font-[700] text-[#0C141D] my-4 break-words">{title}</h3>
            <h4 className="text-[24px] font-[500] text-[#666666] max-w-[340px] w-full break-words">{sanitize(content)}</h4>
        </div>
    )
}

export default ReasonCart