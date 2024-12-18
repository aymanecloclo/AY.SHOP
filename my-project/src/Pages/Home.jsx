import CarourselProducts from "../components/CarourselProducts";
import pub_l from '../assets/images/pub-l.png'
import shop_now from  '../assets/images/shop_now.png'
import { MdOutlineDoubleArrow } from "react-icons/md";
const Home=()=>{


    return(
        <>
      <div className="flex w-full gap-4 lg:gap-6 px-4">
  {/* Section gauche - Pub */}
  <div className="hidden lg:block lg:w-2/12 relative">
  <img src={shop_now} className="w-full h-full object-cover rounded-lg shadow-md" alt="Publicité droite" />
  <div className="absolute bottom-32 w-full ">
  

<button className="  group relative block mx-auto  ">
  <div
    className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 opacity-75 blur transition duration-300 group-hover:opacity-100"
  ></div>
  <div
    className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 opacity-75 blur transition duration-300 group-hover:opacity-100 animation-delay-200"
  ></div>

  <span
    className="h-12  relative flex items-centergap-3 rounded-lg bg-black px-7 py-3 leading-none"
  >
    <span
      className="inline-block h-3 w-3 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 opacity-80 shadow-lg shadow-cyan-500/50 transition-all duration-300 group-hover:scale-125"
    ></span>

    <span className="inline-flex flex-col gap-1 justify-center ">
      <span className="text-sm font-medium text-cyan-500">Shop Now</span>
      <span className="text-[10px] font-light tracking-wider text-cyan-300/80"
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
  <div className="w-full lg:w-8/12">
    <CarourselProducts />
  </div>

  {/* Section droite - Pub */}
  <div className="hidden lg:block lg:w-2/12">
  <img src={pub_l} className="w-full h-full object-cover rounded-lg shadow-md" alt="Publicité gauche" />
  </div>
</div>


        
        </>
    )
}

export default Home;