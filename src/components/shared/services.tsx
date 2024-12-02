import { ServiceCartType } from "../../types"
import { ServiceCart, Loading } from "../ui"
import { useQuery } from "react-query"
import { useFetchData } from "../../hooks"
import { useTranslation } from "react-i18next"

const Services = () => {
    const { t } = useTranslation()
    const { fetchdata } = useFetchData('/api/main/v1/services')
    const { data, isLoading, error } = useQuery({
        queryKey: ['service'],
        queryFn: fetchdata
    })
    return (
        <div className="w-full flex flex-col items-center">
            <h2 className="chaptertitle mb-8">{t("services")}</h2>
            <div className="w-full flex justify-center">
                <div className="grid grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-x-7 gap-y-4">
                    {
                        isLoading ? (
                        <Loading/>
                    ) : error instanceof Error ? (
                        <div>Error: {error.message}</div>
                    ) :
                        data?.results?.map((item: ServiceCartType) => (
                            <ServiceCart 
                                key={item.id}
                                image={item.image}
                                title={item.title}
                                content={item.content}
                                id={item.id}
                            />
                        ))
                    }
                </div>
            </div>
            
        </div>
    )
}

export default Services