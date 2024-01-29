const ServiceRequest = () => {
  return (
    <div className="container p-3 bg-gray-300 w-[95%] min-h-[130px] m-auto  gap-[15px]">
        <div className="flex flex-col justify-center items-center my-4 md:items-start">
            <h4 className="text-primary font-bold text-lg">Quick Service Request</h4>
            <h2 className="font-bold text-2xl">Send Inspection Request</h2>
        </div>
        <div className="flex gap-[15px] flex-col justify-center items-center md:flex-row md:justify-start">
            <input type="text" placeholder="Enter your full name" className="w-[90%] h-[40px] pl-2 outline-none rounded md:w-[250px] lg:w-[370px]"/>
            <input type="text" placeholder="Phone number" className="w-[90%] h-[40px] pl-2 outline-none rounded  md:w-[250px] lg:w-[370px]"/>
            <button type="button" onClick={()=>  location.reload()} className="w-[90%] rounded h-[40px] bg-primary hover:opacity-[0.9] text-white text-center outline-none md:w-[250px] lg:w-[450px]">SEND</button>
        </div>
    </div>
  )
}

export default ServiceRequest