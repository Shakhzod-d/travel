import { reasonsArray } from '../../utils'
import { ReasonType } from '../../types'
import { ReasonCart } from '../ui'

const Reasons = () => {
    return (
        <div className='flex flex-col w-full items-center text-center'>
            <h2 className='h2 md:text-3xl sm:text-2xl uppercase'>
                why choose us
            </h2>
            <h3 className='h3 text-[#666666] my-8'>Our beliefs aren't just words; they are the foundation of every adventure we offer. With high commitment to sustainability, authenticity, and customer-centricity, we ensure that every trip you take with us is valuable.</h3>
            <ul className='grid grid-cols-3 xl:grid-cols-2 md:grid-cols-1 gap-3'>
                {
                    reasonsArray.map((item: ReasonType) => (
                        <li key={item.id}>
                            <ReasonCart
                                id={item.id}
                                img={item.img}
                                reason={item.reason}
                                def={item.def}
                            />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Reasons