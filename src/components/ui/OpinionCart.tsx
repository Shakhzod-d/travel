import { OpinionType } from '../../types'
import { useSanitize } from '../../hooks'

const OpinionCart = ({
    content,
    full_name,
    image,
    position
}: OpinionType) => {

    const { sanitize } = useSanitize()

    return (
        <div className="w-[350px] h-max  rounded-3xl p-5 flex flex-col bg-white items-start shadow-lg">
            <h3 className="text-lg font-semibold">The best Webflow Templates</h3>
            <h4 className="text-md font-normal text-[#3F3F3F] my-3">{sanitize(content)}</h4>
            <div className='flex items-center'>
                <img src={image} alt={'The best Webflow Templates'} className='w-[62px] h-[62px] rounded-full'/>
                <div className='ml-3'>
                    <h4 className='font-semibold text-md mb-2'>{full_name}</h4>
                    <h4 className='font-semibold text-md text-[#3F3F3F] capitalize'>{position}</h4>
                </div>
            </div>
        </div>
    )
}

export default OpinionCart