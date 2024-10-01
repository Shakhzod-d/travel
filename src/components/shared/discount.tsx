

const Discount = () => {

    return (
        <div className="padding w-full py-8 flex justify-evenly md:flex-col md:items-center bg-[#030626]">
            <div className="flex flex-col w-[60%] md:w-full">
                <div className="bg-gray-800 rounded-sm p-1 w-max">
                    <h3 className="text-[18px] text-white font-[600]">#1 Best travel agent</h3>
                </div>
                <div className="my-5">
                    <h2 className="h3 text-3xl">
                        Get a guaranteed discount <br /> - 20% for the entire tour
                    </h2>
                </div>
                <h4 className="h4">The discount is valid for early booking participants until May 1</h4>
            </div>
        </div>
    )
}

export default Discount