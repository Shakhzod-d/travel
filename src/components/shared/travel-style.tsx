import { travelStyles } from "../../utils"
import { TravelStyles } from "../../types"
import { Link } from "react-router-dom"
// grid grid-cols-2 lg:grid-cols-1 gap-x-1 gap-y-2 sm:gap-1 template w-full

const Travelstyle = () => {
    return (
        <div className="flex flex-col items-center padding py-3 w-full">
            <h2 className="h2 md:text-3xl sm:text-2xl mb-8">STYLES TO TRAVEL IN CENTRAL  ASIA</h2>
            <div className="flex flex-wrap justify-center">
                {
                    travelStyles.map((item: TravelStyles) => (
                        <div 
                            key={item.id} 
                            style={{ backgroundImage: `url(${item.img})` }} 
                            className="bg-cover bg-center bg-no-repeat flex flex-col mr-5 mb-5 lg:mr-0 even:mr-0 justify-between p-4 rounded-3xl h-[280px] w-[585px] xl:w-[450px] lg:w-[500px] md:w-full">
                            <div>
                                <h3 className="h3 uppercase">{item.type}</h3>
                                <h4 className="h4">{item.def}</h4>
                            </div>
                            <Link to='' target='_blank' className="h4 text-yellow-400 w-max">{item.link}</Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Travelstyle