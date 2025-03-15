import { useState } from "react";
import AYSHOP_logo from "../assets/images/AYSHOP_logo.png";
import { RiMenu2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector, useDispatch } from "react-redux";
import CartSidebar from "./CartSidebar";
import { toggleCart } from "../slicers/cartSlice"; // Importez l'action Redux
import productsAll from "@/data/productsALL";

const Header = ({ handleShowMenu }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Utiliser Redux pour accéder à l'état du panier
  const dispatch = useDispatch();
  const { cartCount, cartOpen } = useSelector((state) => state.cart);

  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleToggleCart = () => {
    dispatch(toggleCart()); // Dispatcher l'action pour ouvrir/fermer le panier
  };

  return (
    <header className="shadow-md bg-white font-[sans-serif] tracking-wide relative z-50">
      <section className="flex items-center justify-between flex-wrap gap-4 lg:py-0 sm:px-10 px-4 border-gray-200 border-b min-h-[75px]">
        {/* Mobile menu button */}
        <div className="flex lg:hidden cursor-pointer" onClick={handleShowMenu}>
          <RiMenu2Fill size={25} />
        </div>

        {/* Logo */}
        <a href="." className="shrink-0">
          <img
            src={AYSHOP_logo}
            alt="logo"
            className="object-cover lg:w-[90px] hidden lg:block lg:h-20"
          />
        </a>

        {/* Right side items (icons and profile) */}
        <div className="lg:absolute lg:right-10 flex items-center ml-auto space-x-8">
          <span className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              className="cursor-pointer fill-[#333] hover:fill-[#007bff] inline-block"
              viewBox="0 0 64 64"
            >
              <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" />
            </svg>
            <span className="absolute left-auto -ml-1 top-0 rounded-full bg-black px-1 py-0 text-xs text-white">
              1
            </span>
          </span>

          {/* Cart Icon */}
          <span className="relative cursor-pointer" onClick={handleToggleCart}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              className="cursor-pointer fill-[#333] hover:fill-[#007bff] inline-block"
              viewBox="0 0 512 512"
            >
              <path d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0" />
            </svg>

            {/* Cart Count Badge */}
            {cartCount > 0 && (
              <span className="absolute left-auto -ml-1 top-0 rounded-full bg-black px-1 py-0 text-xs text-white">
                {cartCount}
              </span>
            )}
          </span>

          {/* Profile Icon */}
          {isAuthenticated ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content w-10 rounded-full cursor-pointer">
                      <span>{user.name.charAt(0).toUpperCase()}</span>
                    </div>
                  </div>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      logout({
                        logoutParams: {
                          returnTo: window.location.origin,
                        },
                      });
                    }}
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <div
              onClick={() => loginWithRedirect()}
              className="inline-block cursor-pointer border-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                className="hover:fill-[#007bff]"
              >
                <circle cx="10" cy="7" r="6" />
                <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" />
              </svg>
            </div>
          )}
        </div>
      </section>

      {/* Cart Sidebar */}
      <CartSidebar
        products={productsAll}
        isOpen={cartOpen}
        onClose={() => dispatch(toggleCart())}
      />
    </header>
  );
};

export default Header;
