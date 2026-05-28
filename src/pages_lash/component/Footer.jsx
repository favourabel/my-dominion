import React from 'react';

const Footer = () => {
  return (
    <div>
      
      <footer className="bg-[#6B0F25] text-white px-[40px] py-[90px] mt-[100px] pt-[60px] scroll-smooth">

        <div className="flex flex-col md:flex-row justify-between gap-[40px] pt-[70px] pb-[70px]">

          {/* LEFT SECTION */}
          <div>
            <h1 className="text-[30px] font-bold">
              WHERE EVERY TREAT IS A LITTLE SLICE OF HEAVEN
            </h1>

            <p className="mt-[15px] text-[14px] text-gray-200 pt-[40px]">
              Subscribe to get updates and sweet offers from Dominion Pastries.
            </p>

            <div className="flex mt-[20px] pt-[10px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-[10px] w-[250px] text-white rounded-l-[6px] outline-none border-[2px] border-white"
              />

              <button className="bg-orange-500 px-[20px] rounded-r-[6px] font-semibold">
                Subscribe
              </button>
            </div>
          </div>

          {/* MIDDLE LINKS */}
          <div>
            <h2 className="font-bold mb-[10px]">Quick Links</h2>

            <ul className="space-y-[6px] text-gray-200">

              <li className="cursor-pointer hover:text-orange-500 transition-all duration-300">
                Home
              </li>

              <li className="cursor-pointer hover:text-orange-500 transition-all duration-300">
                Products
              </li>

              <li className="cursor-pointer hover:text-orange-500 transition-all duration-300">
                Focus
              </li>

              <li className="cursor-pointer hover:text-orange-500 transition-all duration-300">
                About
              </li>

              <li className="cursor-pointer hover:text-orange-500 transition-all duration-300">
                Testimonies
              </li>

            </ul>
          </div>

          {/* RIGHT SUPPORT */}
          <div>
            <h2 className="font-bold mb-[10px]">Customer Support</h2>

            <ul className="space-y-[6px] text-gray-200">
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Order Tracking</li>
              <li>Refunds</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/20 mt-[40px] pt-[20px] flex flex-col md:flex-row justify-between text-gray-300 text-[13px]">

          <p>© 2026 Dominion Pastries. All Rights Reserved.</p>

          <div className="flex gap-[15px]">
            <span>Facebook</span>
            <span>Instagram</span>
            <span>Tiktok</span>
          </div>

        </div>

      </footer>

    </div>
  )
}

export default Footer;