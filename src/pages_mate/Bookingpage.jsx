import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./component/Navbar";


export default function BookingPage() {

  const navigate = useNavigate();
   const [showSuccess, setShowSuccess] = useState(false);

  // STATES
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // LOAD SAVED DATA FROM LOCAL STORAGE
  useEffect(() => {

    const savedData = JSON.parse(
      localStorage.getItem("deliveryInformation")
    );

    if (savedData) {
      setEmail(savedData.email || "");
      setFirstname(savedData.firstname || "");
      setLastname(savedData.lastname || "");
      setCountry(savedData.country || "");
      setState(savedData.state || "");
      setCity(savedData.city || "");
      setPhone(savedData.phone || "");
      setAddress(savedData.address || "");
    }

  }, []);

  // SAVE TO LOCAL STORAGE AUTOMATICALLY
  useEffect(() => {

    const deliveryData = {
      email,
      firstname,
      lastname,
      country,
      state,
      city,
      phone,
      address,
    };

    localStorage.setItem(
      "deliveryInformation",
      JSON.stringify(deliveryData)
    );

  }, [
    email,
    firstname,
    lastname,
    country,
    state,
    city,
    phone,
    address,
  ]);

  const handleConfirmOrder = (e) => {
  e.preventDefault();

  // show message
  setShowSuccess(true);

  // after 1 second go home
  setTimeout(() => {
    setShowSuccess(false);
    navigate("/");
  }, 1000);
};

  return (

       <div>

       <Navbar/>

    <div className="min-h-screen bg-orange-50 flex items-center justify-center p-[10px] sm:p-[20px]">

      <div className="w-full max-w-[700px] bg-white rounded-[15px] shadow-lg p-[15px] sm:p-[30px]">

        {/* HEADING */}
        <h1 className="text-[25px] sm:text-[35px] font-bold text-center text-orange-500 mb-[10px]">
          Delivery Information
        </h1>

        <p className="text-center text-gray-500 mb-[35px] text-[14px] sm:text-[16px]">
          Please fill in your delivery details correctly
        </p>

        {/* FORM */}
        <form className="flex flex-col gap-[20px]">

          {/* EMAIL */}
          <div>
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-[15px] sm:text-[16px] p-[13px] sm:p-[15px] border-[2px] border-orange-200 rounded-[10px] outline-none focus:border-orange-500"
            />

            {!email.includes("@") && email.length > 0 && (
              <p className="text-red-500 mt-[5px] text-[13px] sm:text-[14px]">
                @ must be included in your email
              </p>
            )}
          </div>

          {/* FIRSTNAME */}
          <div>
            <input
              type="text"
              placeholder="Enter your Firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className="w-full text-[15px] sm:text-[16px] p-[13px] sm:p-[15px] border-[2px] border-orange-200 rounded-[10px] outline-none focus:border-orange-500"
            />

            {firstname.length === 0 && (
              <p className="text-red-500 mt-[5px] text-[13px] sm:text-[14px]">
                Please input your Firstname
              </p>
            )}
          </div>

          {/* LASTNAME */}
          <div>
            <input
              type="text"
              placeholder="Enter your Lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="w-full text-[15px] sm:text-[16px] p-[13px] sm:p-[15px] border-[2px] border-orange-200 rounded-[10px] outline-none focus:border-orange-500"
            />

            {lastname.length === 0 && (
              <p className="text-red-500 mt-[5px] text-[13px] sm:text-[14px]">
                Please input your Lastname
              </p>
            )}
          </div>

          {/* COUNTRY */}
          <div>
            <input
              type="text"
              placeholder="Enter your Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full text-[15px] sm:text-[16px] p-[13px] sm:p-[15px] border-[2px] border-orange-200 rounded-[10px] outline-none focus:border-orange-500"
            />

            {country.length === 0 && (
              <p className="text-red-500 mt-[5px] text-[13px] sm:text-[14px]">
                Please input your Country
              </p>
            )}
          </div>

          {/* STATE */}
          <div>
            <input
              type="text"
              placeholder="Enter your State"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full text-[15px] sm:text-[16px] p-[13px] sm:p-[15px] border-[2px] border-orange-200 rounded-[10px] outline-none focus:border-orange-500"
            />

            {state.length === 0 && (
              <p className="text-red-500 mt-[5px] text-[13px] sm:text-[14px]">
                Please input your State
              </p>
            )}
          </div>

          {/* CITY */}
          <div>
            <input
              type="text"
              placeholder="Enter your City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full text-[15px] sm:text-[16px] p-[13px] sm:p-[15px] border-[2px] border-orange-200 rounded-[10px] outline-none focus:border-orange-500"
            />

            {city.length === 0 && (
              <p className="text-red-500 mt-[5px] text-[13px] sm:text-[14px]">
                Please input your City
              </p>
            )}
          </div>

          {/* PHONE NUMBER */}
          <div>
            <input
              type="number"
              placeholder="Enter your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full text-[15px] sm:text-[16px] p-[13px] sm:p-[15px] border-[2px] border-orange-200 rounded-[10px] outline-none focus:border-orange-500"
            />

            {phone.length === 0 && (
              <p className="text-red-500 mt-[5px] text-[13px] sm:text-[14px]">
                Please input your Phone Number
              </p>
            )}
          </div>

          {/* HOUSE ADDRESS */}
          <div>
            <textarea
              placeholder="Please input your House Address"
              rows="4"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full text-[15px] sm:text-[16px] p-[13px] sm:p-[15px] border-[2px] border-orange-200 rounded-[10px] outline-none resize-none focus:border-orange-500"
            ></textarea>

            {address.length === 0 && (
              <p className="text-red-500 mt-[5px] text-[13px] sm:text-[14px]">
                Please input your House Address
              </p>
            )}
          </div>

        {/* SUCCESS MESSAGE */}
{showSuccess && (
  <div className="text-green-600 font-bold text-center mb-[15px] transition-all duration-500">
    Your order has been placed successfully 🎉
  </div>
)}

{/* BUTTON */}
<button
  type="submit"
  onClick={handleConfirmOrder}
  className="w-full bg-orange-500 hover:bg-orange-600 transition-all duration-500 text-white p-[13px] sm:p-[15px] rounded-[10px] text-[16px] sm:text-[18px] font-bold hover:scale-[1.02]"
>
  Confirm Your Order
</button>

        </form>
      </div>
    </div>

  </div>
  );
}