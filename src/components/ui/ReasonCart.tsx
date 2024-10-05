import { ReasonType } from "../../types"

const ReasonCart = ({
    id,
    img,
    reason,
    def
}: ReasonType) => {
    return (
        <div key={id} className="flex flex-col items-center p-4 shadow-md bg-white rounded-3xl">
            <img src={img} alt={reason} className="w-[64px] h-[64px]"/>
            <h3 className="text-2xl font-semibold my-4">{reason}</h3>
            <h4 className="text-xl text-[#666666] max-w-[340px] xm:w-[240px] break-words">{def}</h4>
        </div>
    )
}

export default ReasonCart