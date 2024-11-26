import { ServiceCartType } from "../../types"
import { useSanitize } from "../../hooks"
import { useDispatch } from "react-redux"
import { openBookingModal } from "../../store/main-slice"

const ServiceCart = ({ image, title, content }: ServiceCartType) => {
    const dispatch = useDispatch()
    const { sanitize } = useSanitize()
    return (
        <div className="bg-white rounded-[16px] min-h-[368px] flex flex-col items-center justify-between px-5 py-11 shadow-lg">
            <img src={image} alt="icon" className="w-[80px] h-[80px]"/>
            <h3 className="h3 text-black">{title}</h3>
            <h4 className="h4 text-[#818181] max-w-[318px] w-full text-center">{sanitize(content)}</h4>
            <button
                onClick={() => dispatch(openBookingModal())}
                className="btn text-[#F56960] border-[1px] border-[#F56960] hover:bg-[#F56960] hover:text-white text-[16px] font-semibold px-[80px] xm:px-[50px] py-2"
            >
                Book now
            </button>
        </div> 
    )
}

export default ServiceCart