import { ReasonType } from '../../types'
import { ReasonCart } from '../ui'
import { useQuery } from 'react-query'
import { Loading } from '../ui'
import { useFetchData } from '../../hooks'

const Reasons = () => {
    const { fetchdata } = useFetchData('/api/main/v1/why-choose-us')
    const { data, error, isLoading } = useQuery({
        queryKey: ['reasons'],
        queryFn: fetchdata
    })

    return (
        <div className='flex flex-col w-full items-center text-center'>
            <h2 className='h2 md:text-3xl sm:text-2xl uppercase'>
                why choose us
            </h2>
            <h3 className='h3 text-[#666666] my-8'>Our beliefs aren't just words; they are the foundation of every adventure we offer. With high commitment to sustainability, authenticity, and customer-centricity, we ensure that every trip you take with us is valuable.</h3>
            <ul className='grid grid-cols-3 xl:grid-cols-2 md:grid-cols-1 gap-3'>
                {
                    isLoading ? (
                        <Loading/>
                    ) : error instanceof Error ? (
                        <div>Error: {error.message}</div>
                    ) : data && (
                        data.results.map((item: ReasonType) => (
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