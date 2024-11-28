import { ReasonType } from '../../types'
import { ReasonCart } from '../ui'
import { useQuery } from 'react-query'
import { Loading } from '../ui'
import { useFetchData } from '../../hooks'
import { useTranslation } from "react-i18next"

const Reasons = () => {
    const { t } = useTranslation()
    const { fetchdata } = useFetchData('/api/main/v1/why-choose-us')
    const { data, error, isLoading } = useQuery({
        queryKey: ['reasons'],
        queryFn: fetchdata
    })

    return (
        <div className='flex flex-col w-full items-center text-center'>
            <h2 className='h2 md:text-3xl sm:text-2xl uppercase'>
                {t("why")}
            </h2>
            <h3 className='h3 text-[#666666] my-8'>{t("reasondef")}</h3>
            <ul className='grid grid-cols-3 xl:grid-cols-2 md:grid-cols-1 gap-3'>
                {
                    isLoading ? (
                        <Loading/>
                    ) : error instanceof Error ? (
                        <div>Error: {error.message}</div>
                    ) : data && (
                        data?.results.map((item: ReasonType) => (
                            <li key={item.id}>
                                <ReasonCart
                                    id={item.id}
                                    image={item.image}
                                    title={item.title}
                                    content={item.content}/>
                            </li>
                        )))
                }
            </ul>
        </div>
    )
}

export default Reasons