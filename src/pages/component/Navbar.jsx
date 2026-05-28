import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { IoMdMenu } from "react-icons/io";

const Navbar = ({ cartCount, totalPrice, cartItems }) => {

  const navigate = useNavigate();

  // ✅ MOBILE MENU STATE
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOrderClick = () => {
    navigate("/order", {
      state: {
        cartItems: cartItems || [],
        cartCount: cartCount || 0,
        totalPrice: totalPrice || 0
      }
    });
  };

  return (
    <div>

      {/* ================= DESKTOP NAV ================= */}
      <nav className='flex pb-[2rem] hidden md:block'>

        <div className="flex">

          <div className='font-bold text-[50px] ml-[7%] mt-[30px] text-orange-400'>
            D
          </div>

          <ul className='flex text-[25px] gap-[35px] ml-[15%] mt-[40px] text-orange-500 font-bold'>

            <p onClick={() => scrollToSection("Home")} className="cursor-pointer">Home</p>
            <p onClick={() => scrollToSection("Products")} className="cursor-pointer">Products</p>
            <p onClick={() => scrollToSection("Focus")} className="cursor-pointer">Focus</p>
            <p onClick={() => scrollToSection("About")} className="cursor-pointer">About</p>
            <p onClick={() => scrollToSection("Testimonies")} className="cursor-pointer">Testimonies</p>

          </ul>

          <div className="flex items-center gap-[40px] ml-[8%] mt-[27px]">

            <div className="relative inline-block">

              <TiShoppingCart className="w-[60px] h-[60px]" />

              {cartCount > 0 && (
                <span className="absolute top-[0px] right-[0px]
                  bg-orange-500 text-white
                  w-[20px] h-[20px]
                  rounded-full
                  flex items-center justify-center
                  text-[12px] font-bold">
                  {cartCount}
                </span>
              )}

            </div>

            <button
              onClick={handleOrderClick}
              className="bg-orange-500 text-black p-[15px] rounded-[8px] text-[17px]"
            >
              Order
            </button>

          </div>

        </div>

      </nav>

      {/* ================= MOBILE NAV ================= */}
      <div className="md:hidden">

        {/* TOP BAR */}
        <div className="flex justify-between items-center mb-[30px] px-[13px]">

          {/* HAMBURGER */}
          <IoMdMenu
            className="w-[80px] h-[80px] mt-[30px] cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-[20px] mt-[27px]">

            <div className="relative inline-block">

              <TiShoppingCart className="w-[60px] h-[60px]" />

              {cartCount > 0 && (
                <span className="absolute top-[0px] right-[0px]
                  bg-orange-500 text-white
                  w-[20px] h-[20px]
                  rounded-full
                  flex items-center justify-center
                  text-[12px] font-bold">
                  {cartCount}
                </span>
              )}

            </div>

            <button
              onClick={handleOrderClick}
              className="bg-orange-500 text-black p-[12px] rounded-[8px] text-[15px]"
            >
              Order
            </button>

          </div>

        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="flex flex-col gap-4 px-[20px] pb-[20px] text-orange-500 font-bold text-[20px]">

            <p onClick={() => scrollToSection("Home")} className="cursor-pointer">Home</p>
            <p onClick={() => scrollToSection("Products")} className="cursor-pointer">Products</p>
            <p onClick={() => scrollToSection("Focus")} className="cursor-pointer">Focus</p>
            <p onClick={() => scrollToSection("About")} className="cursor-pointer">About</p>
            <p onClick={() => scrollToSection("Testimonies")} className="cursor-pointer">Testimonies</p>

          </div>
        )}

      </div>

    </div>
  );
};

export default Navbar;