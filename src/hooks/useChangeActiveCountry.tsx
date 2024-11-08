import { useState } from "react"
import { countries } from "../utils"
import { CountriesType } from "../types"
import { useDispatch } from "react-redux"
import { changeCountry } from "../store/main-slice"

const useChangeActiveContry = () => {
    const [countries1, setCountries1] = useState(countries)
    const dispatch = useDispatch()
    const changeActiveCountry = (e: React.MouseEvent<HTMLButtonElement>) => {
        setCountries1(countries1.map((item: CountriesType) => {
            if(e.currentTarget.id == item.id){
                dispatch(changeCountry(item.country))
                return {
                    ...item, active: true
                }
            }
            return {...item, active: false}
        }))
    }

    return { changeActiveCountry, countries1 }
}

export default useChangeActiveContry