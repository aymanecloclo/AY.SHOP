import CarourselProducts from "../components/CarourselProducts";
import pub_l from '../assets/images/pub-l.webp'
import shop_now from  '../assets/images/shop_now.png'
import { MdOutlineDoubleArrow } from "react-icons/md";

const PubComponent = (params) => {
    return(
        <>
      <div className="flex md:flex-row flex-col w-full gap-4 lg:gap-6 px-4 md:h-[50vh] lg:h-[60vh]">
  {/* Section gauche - Pub */}
  <div className="lg:block md:w-2/12 relative">
  <img src={shop_now} className="w-full h-80 md:h-full object-cover rounded-lg shadow-md" alt="Publicité droite" />
  <div className="absolute md:bottom-32 lg:bottom-28 bottom-10 w-full ">
  

<button className="  group relative block mx-auto  ">
  <div
    className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 opacity-75 blur transition duration-300 group-hover:opacity-100"
  ></div>
  <div
    className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 opacity-75 blur transition duration-300 group-hover:opacity-100 animation-delay-200"
  ></div>

  <span
    className="h-12 md:w-28 lg:w-full relative flex justify-center items-center gap-3 rounded-lg bg-black px-7 py-3 leading-none"
  >
    <span
      className="inline-block h-3 w-3 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 opacity-80 shadow-lg shadow-cyan-500/50 transition-all duration-300 group-hover:scale-125"
    ></span>

    <span className="inline-flex flex-col gap-1 justify-center ">
      <span className="text-sm font-medium text-cyan-500">Shop Now</span>
      <span className=" md:hidden lg:inline text-[10px] font-light tracking-wider text-cyan-300/80"
        > Promo: Only This Month</span>
    </span>

    <span
      className="ml-auto transform transition-transform duration-300 group-hover:translate-x-1"
    >
      <MdOutlineDoubleArrow className="h-5 w-5 text-cyan-400" />
      
    </span>

    <div
      className="absolute -bottom-2 left-1/2 h-px w-5/6 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 blur-sm transition-all duration-300 group-hover:w-full"
    ></div>
  </span>
</button>

  </div>
  </div>

  {/* Section centrale - Carousel */}
  <div className="w-full md:w-8/12 md:h-full">
    <CarourselProducts />
  </div>

  {/* Section droite - Pub */}
  <div className="hidden md:block md:w-2/12">
  <img src={pub_l} className="w-full h-full object-cover rounded-lg shadow-md" alt="Publicité gauche" />
  </div>
</div>


        
        </>
    )
}


export default PubComponent;