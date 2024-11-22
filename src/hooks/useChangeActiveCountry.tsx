import { useDispatch } from "react-redux"
import { changeCountry } from "../store/main-slice"

const useChangeActiveContry = () => {
    const dispatch = useDispatch()
    const changeActiveCountry = (e: React.MouseEvent<HTMLButtonElement>) => {
        // setCountries1(countries1.map((item: CountriesType) => {
        //     if(e.currentTarget.id == item.id){
        //         dispatch(changeCountry(item.country))
        //         return {
        //             ...item, active: true
        //         }
        //     }
        //     return {...item, active: false}
        // }))
        dispatch(changeCountry(e.currentTarget.id))
    }

    return { changeActiveCountry }
}

export default useChangeActiveContry