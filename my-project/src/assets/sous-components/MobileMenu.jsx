import AYShopLogo from '../images/AYSHOP_logo.png'
import Categories from '../../data/Categories';
import {FaRegWindowClose  } from 'react-icons/fa';

const MobileMenu=({menu, showMenu,handleShowMenu})=>{

    return(
        <>
             <ul
  className={`${!showMenu? 'w-0 hidden  ':' transition-all duration-300  absolute top-0  bg-white max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full '} lg:hidden  z-50 max-lg:shadow-md max-lg:overflow-auto `}>
  <li className='max-lg:border-b max-lg:pb-4 px-3 lg:hidden'>
    <a href="."><img src={AYShopLogo } alt="logo" className='w-36' />
    </a>
  </li>
  <li onClick={handleShowMenu} className='absolute top-5 right-5'><FaRegWindowClose size={25} /></li>
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
      {Categories.map((category, index) => (
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
        </>
    )
}

export default MobileMenu;