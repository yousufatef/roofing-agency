import ServiceRequest from "../components/ServiceRequest"
const Home = () => {
  return (
    <div>
      <ServiceRequest/>
      <div className="flex mb-[100px] mt-[90px] max-sm:flex-col">
        <div className="p-[27px] relative max-lg:flex max-lg:w-[90%] max-lg:flex-col">
            <img src="../src\assets\photo-hero-15.jpg" alt="services-img" className="hover:translate-y-1.5 duration-300 ease-in"/>
            <img src="../src\assets\photo-54.jpeg" alt="services-img" className="max-lg:hidden absolute w-[50%] bottom-[-45px] right-0 hover:translate-y-1.5 duration-300 ease-in "/>
        </div>
        <div className="flex-1 p-[35px]">
          <p className="font-bold text-lg text-mainColor">About Company</p>
          <h1 className="font-bold text-3xl leading-10 text-globalColor">Professional Roofing Contractors</h1>
          <p className="leading-9 text-globalColor mb-3">
               Donec rutrum congue leo eget malesuada. 
               Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
               Vestibulum ante ipsum primis in faucibus orci luctus et
            </p>
          <p className="leading-9 text-globalColor">
               ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
                ullamcorper sit amet ligula. Quisque velit nisi, pretium ut lacinia in, elementum id enim. 
                Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.
            </p>
            <div className="mt-2">
                <i className="fa-solid fa-certificate text-mainColor"></i>
                <span className="ml-2 text-globalColor">Certified Company</span>
            </div>
            <div className="mt-8">
              <button className="bg-mainColor text-white p-2  rounded hover:opacity-[0.9]">Read More</button>
            </div>
         </div>
      </div>

      <div className="flex justify-center text-center mt-7 max-sm:flex-col">

       <div className="flex max-lg:flex-col">
       <div className="bg-mainColor text-white p-[25px] w-[270px] h-[120px] max-lg:w-[400px] max-sm:w-[100%]">
          <h2 className="font-bold text-[30px]">15+</h2>
          <p>Years in Business</p>
        </div>
        <div className="bg-white text-globalColor p-[25px] w-[270px] h-[120px] max-lg:w-[400px] max-sm:w-[100%]">
          <h2 className="font-bold text-[30px]">1.5K</h2>
          <p>Happy Clients</p>
        </div>
       </div>

        <div className="flex max-lg:flex-col">
        <div className="bg-globalColor text-white p-[25px] w-[270px] h-[120px] max-lg:w-[400px] max-sm:w-[100%]">
          <h2 className="font-bold text-[30px]">2.5k</h2>
          <p>Projects Completed</p>
        </div>
        <div className="bg-mainColor text-white p-[25px] w-[270px] h-[120px] max-lg:w-[400px] max-sm:w-[100%]">
          <h2 className="font-bold text-[30px]">150+</h2>
          <p>Trained Staff</p>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Home