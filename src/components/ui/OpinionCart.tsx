import { OpinionType } from '../../types'

const OpinionCart = ({
    phrase,
    opinion,
    name,
    img,
    job
}: OpinionType) => {
    return (
        <div className="w-[350px] h-max  rounded-3xl p-5 flex flex-col bg-white items-start shadow-lg">
            <h3 className="text-lg font-semibold">{phrase}</h3>
            <h4 className="text-md font-normal text-[#3F3F3F] my-3">{opinion}</h4>
            <div className='flex items-center'>
                <img src={img} alt={name} className='w-[62px] h-[62px] rounded-full'/>
                <div className='ml-3'>
                    <h4 className='font-semibold text-md mb-2'>{name}</h4>
                    <h4 className='font-semibold text-md text-[#3F3F3F] capitalize'>{job}</h4>
                </div>
            </div>
        </div>
    )
}

export default OpinionCart