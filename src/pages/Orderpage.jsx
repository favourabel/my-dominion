import React from 'react'
import Navbar from './component/Navbar';
import { useNavigate } from "react-router-dom";

const Orderpage = ({ cart = [] }) => {

  const navigate = useNavigate();

  // =========================
  // INCREASE QUANTITY
  // =========================
  const increaseQty = (id) => {
    // NOTE: This will NOT persist globally (needs App state later)
  };

  // =========================
  // DECREASE QUANTITY
  // =========================
  const decreaseQty = (id) => {
    // NOTE: This will NOT persist globally (needs App state later)
  };

  // =========================
  // EMPTY CART CHECK
  // =========================
  if (!cart || cart.length === 0) {
    return (
      <div>
        <Navbar />

        <div className="bg-[#FFF7ED] min-h-screen flex items-center justify-center px-[15px]">
          <h1 className="text-[18px] sm:text-[22px] font-bold text-orange-500 text-center">
            No items in cart yet
          </h1>
        </div>

      </div>
    );
  }

  // =========================
  // TOTAL ITEMS
  // =========================
  const totalItems = (cart || []).reduce(
    (sum, item) => sum + (item.quantity || 0),
    0
  );

  // =========================
  // GRAND TOTAL
  // =========================
  const grandTotal = (cart || []).reduce(
    (sum, item) => sum + ((item.quantity || 0) * (item.price || 0)),
    0
  );

  return (
    <div>

      <Navbar />

      <div className="bg-[#FFF7ED] min-h-screen pt-[30px] pb-[40px] px-[10px] sm:px-[20px]">

        {/* TITLE */}
        <h1 className="text-center text-[20px] sm:text-[22px] font-bold text-orange-500">
          Your Cart Orders
        </h1>

        {/* TOTAL ITEMS */}
        <div className="flex justify-center mt-[15px]">
          <p className="text-[16px] sm:text-[18px] font-bold text-black">
            Total Items :
            <span className="text-orange-500 ml-[7px]">
              {totalItems}
            </span>
          </p>
        </div>

        {/* CART ITEMS */}
        <div className="flex flex-col gap-[20px] mt-[40px] items-center">

          {cart.map((item) => {

            const itemTotal = item.quantity * item.price;

            return (

              <div
                key={item.id}
                className="w-full sm:w-[650px] bg-white rounded-[10px] shadow-[0px_2px_8px_rgba(255,140,0,0.25)] p-[15px] sm:p-[20px]"
              >

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-[20px]">

                  {/* LEFT SIDE */}
                  <div>

                    <h2 className="text-[20px] sm:text-[22px] text-orange-500 font-bold">
                      {item.name}
                    </h2>

                    <p className="text-[15px] sm:text-[16px] mt-[10px]">
                      Quantity Ordered :
                      <span className="font-bold ml-[7px]">
                        {item.quantity}
                      </span>
                    </p>

                    <p className="text-[15px] sm:text-[16px] mt-[8px]">
                      Price Per Product :
                      <span className="font-bold ml-[7px]">
                        ${item.price}
                      </span>
                    </p>

                    {/* BUTTON CONTROLS (UI ONLY FOR NOW) */}
                    <div className="flex gap-[10px] mt-[10px]">

                      <button className="bg-orange-500 text-white px-[10px] py-[5px] rounded-[5px]">
                        -
                      </button>

                      <button className="bg-orange-500 text-white px-[10px] py-[5px] rounded-[5px]">
                        +
                      </button>

                    </div>

                  </div>

                  {/* RIGHT SIDE */}
                  <div>
                    <p className="text-[22px] sm:text-[24px] font-bold text-orange-500">
                      ${itemTotal}
                    </p>
                  </div>

                </div>

              </div>

            )

          })}

        </div>

        {/* GRAND TOTAL */}
        <div className="w-full sm:w-[650px] bg-orange-500 rounded-[10px] p-[18px] sm:p-[22px] mt-[40px] mr-[60px] text-center items-center shadow-[0px_2px_8px_rgba(255,140,0,0.3)]">

          <div className="flex justify-center items-center">

            <p className="text-[18px] sm:text-[22px] text-white font-bold">
              Grand Total
            </p>

            <p className="text-[20px] sm:text-[24px] text-black font-bold">
              ${grandTotal}
            </p>

          </div>

          {/* ORDER BUTTON */}
          <button
            onClick={() => navigate("/booking")}
            className="w-full bg-black text-white mt-[20px] p-[10px] rounded-[7px] text-[15px] sm:text-[17px] font-bold"
          >
            Order Now
          </button>

        </div>

      </div>

    </div>
  );
};

export default Orderpage;