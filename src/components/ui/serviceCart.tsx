import { ServiceCartType } from "../../types"
import { useSanitize } from "../../hooks"
import { useDispatch } from "react-redux"
import { openBookingModal, handleServiceId } from "../../store/main-slice"
import { useTranslation } from "react-i18next"

const ServiceCart = ({ image, title, content, id }: ServiceCartType) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const { sanitize } = useSanitize()
    const handleBooking = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(openBookingModal())
        dispatch(handleServiceId(Number(e.currentTarget.id)))
    }
    return (
        <div className="bg-white rounded-[16px] min-h-[368px] flex flex-col items-center justify-between px-5 py-11 shadow-lg">
            <img src={image} alt="icon" className="w-[80px] h-[80px]"/>
            <h3 className="h3 text-black">{title}</h3>
            <h4 className="h4 text-[#818181] max-w-[318px] w-full text-center">{sanitize(content)}</h4>
            <button
                id={id.toString()}
                onClick={handleBooking}
                className="btn text-[#F56960] border-[1px] border-[#F56960] hover:bg-[#F56960] hover:text-white text-[16px] font-semibold px-[80px] xm:px-[50px] py-2"
            >
                {t("book2")}
            </button>
        </div> 
    )
}

export default ServiceCart