import axios from "axios"
import { Base_URL } from "../api"
import { useNotify } from "."

const useFetchTravelData = () => {
    let lng = localStorage?.getItem('lng')
    const { toastify } = useNotify()
    const fetchTraveldata = async () => {
        try {
            const req = await axios.get(`${Base_URL}/api/tour/v1/list`,{
                headers: {
                    'Accept-Language': lng ? lng : 'eng'
                }
            })
            return req.data
        } 
        catch (error) {
            if (axios.isAxiosError(error)) {
                toastify(error.message, "error");
            } else {
                toastify("An unknown error occurred", "error");
            }
        }
    }
    return { fetchTraveldata }
}

export default useFetchTravelData