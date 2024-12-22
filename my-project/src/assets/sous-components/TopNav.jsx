import { IoMdMailUnread } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import whatAppLogo from "../images/whatApp_logo.webp";
export const TopNav = () =>
   (
  <div className="hidden lg:flex px-10 bg-slate-900 h-10 text-slate-50">
    <div className="flex items-center">
      <span className="p-5 text-xs flex items-center gap-2">
        <IoMdMailUnread size={18} />
        aymane.rachid.web@gmail.com
      </span>
      <button className="flex items-center text-xs">
        <img src={whatAppLogo} className="w-8 h-8" alt="WhatsApp Logo" />
        Contact us
      </button>
    </div>
    <div className="w-2/4 p-5 flex justify-center items-center text-md">
      <p>Get free delivery on orders over $100</p>
    </div>
    <div className="p-5 flex items-center text-sm gap-2">
      <TbTruckDelivery size={20} />
      <p>Livraison gratuite sur Rabat</p>
    </div>
  </div>
);

