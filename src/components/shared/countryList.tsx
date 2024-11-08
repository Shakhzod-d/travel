import useChangeActiveContry from "../../hooks/useChangeActiveCountry"
import { CountriesType } from "../../types"

const CountryList = () => {
    const { changeActiveCountry, countries1 } = useChangeActiveContry()
    return (
        <div className='w-full flex flex-wrap gap-x-11 gap-y-5 justify-center lg:justify-start mb-5'>
            {
                countries1.map((item: CountriesType) => (
                    <button onClick={changeActiveCountry} key={item.id} id={item.id} className={`btn px-[24px] py-[12px] ${item.active ? 'bg-[#F56960] text-white' : 'text-black bg-[#F5F5F5]'}`}>
                        {item.country}
                    </button>
                ))
            }
        </div>
    )
}

export default CountryList