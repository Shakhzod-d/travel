import { Steps } from "../ui"
import { StepType } from "../../types"
import { StepItems } from "../../utils"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useScrollToTop } from "../../hooks"

const Booking = () => {
    const { steps } = StepItems()
    const { t } = useTranslation()
    const {scrollToTop} = useScrollToTop()

    return (
        <div className="w-full flex flex-col items-center pt-[50px] pb-[80px] sm:pb-[50px]">
            <div className="w-full pt-8 flex justify-between">
                <div className="w-full flex justify-between 3xl:justify-evenly items-start lg:flex-col lg:items-center">
                    <div className="flex flex-col justify-between pr-5 lg:pr-0 w-[48%] lg:w-full lg:mb-4">
                        <div className="bg-[#EBEDFA] py-2 px-4 rounded-sm w-max">
                            <h3 className="uppercase font-[600] tracking-[2px] text-[20px] text-[#635AFF]">{t("howwork")}</h3>
                        </div>
                        <div className="my-5">
                            <h2 className="text-[48px] font-[800] uppercase leading-[65.57px] lg:leading-[50px]">
                                {t("steps")} 
                            </h2>
                        </div>
                        <h3 className="text-[18px] font-[500px] text-[#666666]">{t("hassle")}</h3>
                        <div className="w-full border-b-[1px] border-dashed border-black my-9"></div>
                    </div>
                    <div className="w-[48%] lg:w-full">
                        {
                            steps.map((item: StepType) => (
                                <Steps
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
                <Link to="/tours" onClick={scrollToTop} className="py-2 px-9 bg-[#0A142F] font-[600] btn w-max text-white">
                    {t("bookingnow")}
                </Link>
            </div>
        </div>
    )
}

export default Booking