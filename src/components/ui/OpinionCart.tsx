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
        <div className="h-max shadow rounded-3xl w-[380px] sm:w-[350px] xm:w-[280px] p-8 flex flex-col bg-white items-start">
            <h4 className="text-[18px] font-[400] opinion opinioncartdefinition text-[#3F3F3F] my-3 leading-[30px]">{sanitize(content)}</h4>
            <div className='flex items-center'>
                <img src={image} alt={'The best Webflow Templates'} className='w-[62px] h-[62px] rounded-full'/>
                <div className='ml-3'>
                    <h4 className='font-[700] text-[18px] mb-0 text-black opinion opinioncartposition'>{full_name}</h4>
                    <h4 className='font-[400] text-[18px] text-[#6F6C90] opinion capitalize opinioncartposition'>{position}</h4>
                </div>
            </div>
        </div>
    )
}

export default OpinionCart