import { services } from "../../utils"
import { ServiceCartType } from "../../types"
import { ServiceCart } from "../ui"
const Services = () => {
    return (
        <div className="w-full flex flex-col items-center pt-11 pb-9">
            <h2 className="h2 mb-8">Our services</h2>
            <div className="w-full flex justify-center">
                <div className="grid grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-x-7 gap-y-4">
                    {
                        services.map((item: ServiceCartType) => (
                            <ServiceCart img={item.img} service={item.service} definition={item.definition}/>
                        ))
                    }
                </div>
            </div>
            
        </div>
    )
}

export default Services