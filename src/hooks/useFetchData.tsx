import axios from "axios"
import { Base_URL } from "../api"
import { useNotify } from "."


const useFetchData = (url: string) => {
    let lng = localStorage?.getItem('lng')
    let test = url[0] !== '/'
    const { toastify } = useNotify()

    const fetchdata = async () => {
        try {
            const req = await axios.get(`${Base_URL}${test ? "/" : ""}${url}`, {
              headers: {
                "Accept-Language": lng ? lng : "eng",
              }
            });
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
    return { fetchdata }
}

export default useFetchData