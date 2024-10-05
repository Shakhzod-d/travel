import { Step } from "../ui"
import { StepType } from "../../types"
import { steps } from "../../utils"

const Booking = () => {
    return (
        <div className="w-full flex flex-col items-center pb-[80px] sm:pb-[50px]">
            <div className="w-full pt-8 flex justify-between">
                <div className="w-full flex justify-between items-start lg:flex-col lg:items-center">
                    <div className="flex flex-col justify-between pr-5 lg:pr-0 w-[50%] lg:w-full lg:mb-4">
                        <div className="bg-[#EBEDFA] p-3 rounded-sm w-max">
                                <h3 className="uppercase text-[20px] text-[#635AFF]">how we work</h3>
                        </div>
                        <div className="my-5">
                            <h2 className="text-[48px] font-semibold leading-[65.57px] lg:leading-[50px]">
                                Book tickets easily with just a few steps 
                            </h2>
                        </div>
                        <h3 className="text-[18px] font-[500px] text-[#666666]">The solution for those of you who don't want the hassle of ordering travel tickets, with just 3 steps you can travel anywhere you want.</h3>
                        <div className="w-full border-b-[1px] border-dashed border-black my-9"></div>
                    </div>
                    <div className="w-[50%] lg:w-full">
                        {
                            steps.map((item: StepType) => (
                                <Step
                                    key={item.id}
                                    id={item.id}
                                    step={item.step}
                                    def={item.def}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-start sm:justify-center lg:mt-4">
                <button className="py-2 px-9 bg-[#0A142F] round w-max text-white">Booking now</button>
            </div>
        </div>
    )
}

export default Booking