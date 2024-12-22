import { FaGamepad, FaLaptop, FaDesktop, FaHeadphones,FaRegWindowClose  } from 'react-icons/fa';
import AYShopLogo from "../images/AYSHOP_logo.png";

const categories = [
  { name: 'Accessoires', icon: <FaHeadphones className="inline mr-2" />, href: '/accessoires' },
  { name: 'Jeux', icon: <FaGamepad className="inline mr-2" />, href: '/jeux' },
  { name: 'PC Gamer', icon: <FaDesktop className="inline mr-2" />, href: '/pc-gamer' },
  { name: 'PC Portable', icon: <FaLaptop className="inline mr-2" />, href: '/pc-portable' },
];

export  const Menu= ({menu,showMenu}) => (


  
  <div className="  flex items-center px-16 py-3">
  
  {/* desktop section  */}
  <ul
  className={` hidden lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50`}>
  <li className='max-lg:border-b max-lg:pb-4 px-3 lg:hidden'>
    <a href="."><img src={AYShopLogo } alt="logo" className='w-36' />
    </a>
  </li>
  <li className='max-lg:border-b max-lg:px-3 max-lg:py-3 lg:py-2'><a href='.'
      className='hover:text-gray-900 text-black font-semibold block text-[15px]'>Home</a></li>
  <li className='group max-lg:border-b max-lg:px-3 max-lg:py-3 lg:py-2 relative'>
    <a href='.'
      className='hover:text-gray-900  text-gray-600 font-semibold text-[15px] block'>Store<svg
        xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="ml-1 inline-block"
        viewBox="0 0 24 24">
        <path
          d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
          data-name="16" data-original="#000000" />
      </svg>
    </a>
      <ul className="absolute top-12 max-lg:top-8 left-0 z-50 block space-y-2 shadow-lg bg-white max-h-0 overflow-hidden min-w-[250px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
    {/* dropdown mobile ul */}
      {categories.map((category, index) => (
        <li key={index} className="border-b py-3">
          <a
            href={category.href}
            className="hover:text-gray-900 hover:fill-text-gray-900 text-gray-600 font-semibold text-[15px] block"
          >
            {category.icon}
            {category.name}
          </a>
        </li>
      ))}
    </ul>
  </li>
  {menu.map((link, index) => (
      
  <li key={index} className='max-lg:border-b max-lg:px-3 max-lg:py-3'><a href='.'
  className='hover:text-gray-900 text-gray-600 font-semibold text-[15px] block lg:py-2'>{link.link}</a></li>
      ))}


</ul>
{/* mobile section */}
 


  {/* parent search box */}
<div className="mt-2 w-full lg:w-4/12 md:w-8/12 mx-auto lg:ms-28   ">
  <div className="relative flex items-center  rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-gray-900 px-0">
    
    <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6"></div>
    
    <input
      type="text"
      placeholder="Search"
      name="price"
      id="price"
      className="block lg:w-[300px] w-full grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
    />
    
    <div className="grid shrink-0 grid-cols-1 focus-within:relative lg:w-[80px] border">
      <select
        id="currency"
        name="currency"
        aria-label="Currency"
        className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pl-3 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
      >
        <option>All</option>
        <option>CAD</option>
        <option>EUR</option>
      </select>
      <svg
        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
        viewBox="0 0 16 16"
        fill="currentColor"
        aria-hidden="true"
        data-slot="icon"
      >
        <path
          fillRule="evenodd"
          d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  
    <button
      type="button"
      className=" rounded-r-full px-4 py-1.5   sm:text-sm/6"
    >
      <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
    </button>
  </div>
</div>




  </div>
);
