import { StepType } from "../../types"

const Steps = ({ id, step, def }: StepType) => {
    return (
        <div className={`w-full flex  lg:justify-normal items-center sm:flex-col ${id !== 3 && 'mb-1 sm:mb-4'}`}>
            <div className="w-[100px] h-[100px] flex items-center sm:w-max sm:h-max">
               <div className="w-[68px] h-[68px] flex justify-center items-center sm:mb-2 mr-4 sm:mr-0 rounded-full bg-[#0C141D] text-[32px] text-white font-semibold">{id}</div>
            </div>
            <div className="text-center w-full sm:w-full flex flex-col items-start sm:items-center">
                <h3 className="text-[28px] font-semibold mb-1">{step}</h3>
                <h4 className="text-[18px] text-[#666666] font-[500px] w-full text-start sm:text-center">{def}</h4>
            </div>
        </div>
    )
}

export default Steps