const ServiceRequest = () => {
  return (
    <div className="bg-gray-300 flex w-[95%] min-h-[130px] m-auto  max-lg:flex-col">
        <div className="ml-2 pl-3  max-lg:text-center lg:m-auto max-lg:mt-[20px]">
            <h4 className="text-mainColor font-bold text-lg">Quick Service Request</h4>
            <h2 className="font-bold text-2xl">Send Inspection Request</h2>
        </div>
        <div className="flex text-center  justify-center items-center pr-2 max-sm:flex-col mb-5 sm:pr-[65px]">
            <input type="text" placeholder="Enter your full name" className="m-1 p-1 w-[230px] outline-none max-sm:w-[90%] rounded"/>
            <input type="text" placeholder="Phone number" className="m-1 p-1 w-[230px] outline-none max-sm:w-[90%] rounded"/>
            <button type="button" onClick={()=>  location.reload()} className="m-1 p-1 w-[115px] h-[30px] bg-mainColor hover:opacity-[0.9] text-white text-center outline-none max-sm:w-[90%]s rounded">SEND</button>
        </div>
    </div>
  )
}

export default ServiceRequest