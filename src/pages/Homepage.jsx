
 import { useState } from "react";
 import { useNavigate } from "react-router-dom";


 import { TiShoppingCart } from "react-icons/ti";
 import pizza from "../assets/pizza.jpg";
 import chocolate from "../assets/chocolate.jpg";
 import sharwamah from "../assets/sharwamah.jpg";
 import waffles from "../assets/waffles.jpg";
 import barbeque from "../assets/barbeque.jpg";
 import { FaPlus, FaMinus } from "react-icons/fa";
 import smallchops from "../assets/small chops.jpg";
 import coconut from "../assets/coconut.jpg";
 import chicken from "../assets/chicken.jpg"
 import cup from "../assets/cup.jpg";
 import sabique from "../assets/sabique.jpg";
 import mina from "../assets/mina.jpg";
 import james from "../assets/james.jpg";
 import Navbar from './component/Navbar';
 import Footer from './component/Footer';


   const HomePage = ({ cart, addToCart, removeFromCart }) => {

  // =========================
  // LOCAL PRODUCT COUNTERS
  // =========================
  const [count, setCount] = useState(0);
  const [showControls, setShowControls] = useState(false);

  const [showControls1, setShowControls1] = useState(false);
  const [count1, setCount1] = useState(0);

  const [showControls2, setShowControls2] = useState(false);
  const [count2, setCount2] = useState(0);

  const [showControls3, setShowControls3] = useState(false);
  const [count3, setCount3] = useState(0);

  const [showControlsChoco, setShowControlsChoco] = useState(false);
  const [countChoco, setCountChoco] = useState(0);

  const [showControlsShawarma, setShowControlsShawarma] = useState(false);
  const [countShawarma, setCountShawarma] = useState(0);

  const [showControlsPizza, setShowControlsPizza] = useState(false);
  const [countPizza, setCountPizza] = useState(0);

  const [showControlsProduct3, setShowControlsProduct3] = useState(false);
  const [countProduct3, setCountProduct3] = useState(0);

  const [showText, setShowText] = useState(false);
// =========================
// CART TOTALS (FROM APP.JSX)
// =========================
const cartCount = (cart || []).reduce(
  (sum, item) => sum + (item.quantity || 0),
  0
);

const totalPrice = (cart || []).reduce(
  (sum, item) => sum + ((item.price || 0) * (item.quantity || 0)),
  0
);

// =========================
// SCROLL FUNCTION
// =========================
const scrollToSection = (id) => {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

    return(

       <div>

      <div id=' Home'>

    <Navbar/>

         <div className='flex-col md:flex-row flex gap-[80px]'>

           <div>
        <h1 className='mt-[10%] text-[60px] ml-[70px] font-bold'>
          <span className='text-orange-500 font-bold'>Your Favorite Fast</span><br/>
          Food & Pastry Spot</h1>
        
         <p className='ml-[70px] text-[20px] mt-[40px]'>
          At Dominion Pastries, we serve mouthwatering meals, sweet pastries,<br/>
          and sizzling grills prepared to satisfy every craving. </p>

   <button
  onClick={() => {
    // show text
    setShowText(true);

    // hide after 2 seconds
    setTimeout(() => {
      setShowText(false);
    }, 3000);
  }}
  className='ml-[70px] mt-[60px] bg-orange-500 p-[15px_30px] text-[20px] rounded-[8px] cursor-pointer mb-[20%] relative'
>
  Shop with us Now

  {/* TEXT POPUP */}
  {showText && (
    <div className="absolute top-[120%] left-0 text-orange-400 text-[18px] rounded-[8px] w-[300px] font-bold">
      At Dominion Pastries, we offer a delightful variety of pastries made<br/>
       from soft, fluffy treats to rich, flavorful delights<br/>
        that bring joy in every bite.</div>
  )}
</button>
          </div>

          <div>
          <img src={pizza} className="w-[500px] mt-[60px] ml-[20px] slowspin"/>
         </div>
       </div>

  </div>
         <div className="flex-col md:flex-row" id='Products'>
            <p className='text-center mt-[70px] text-orange-400 font-bold text-[40px]'>Our Services</p>

       <div className='flex-col md:flex-row flex mt-[80px] items-center justify-center'>

            <div className='flex-col md:flex-row ml-[20px]'>
             <img src={chocolate}  className='w-[300px]  h-[300px] rounded-[7px] border-[2px] border-orange-500'/>
            <p className='text-[25px] text-orange-400 font-bold mt-[20px] ml-[50px]'>Chocolate Cake</p>
            <p className='text-[23px] mt-[10px] ml-[38%] mt-[20px]'>50$</p>


 <button
  onClick={() => setShowControls(true)}
  className='text-[20px] bg-orange-500 text-white p-[15px_30px] rounded-[8px] ml-[50px] mt-[30px] flex items-center justify-between gap-[20px]'
>

  {/* PLUS */}
  {showControls && (
    <FaPlus
      onClick={(e) => {

        e.stopPropagation();

        setCount(prev => prev + 1);

        addToCart({
          id: 1,
          name: "Chocolate Cake",
          price: 50
        });

      }}
      className='text-black cursor-pointer'
    />
  )}

  {/* TEXT */}
  {showControls ? count : "Add to Cart"}

  {/* MINUS */}
  {showControls && (
    <FaMinus
      onClick={(e) => {

        e.stopPropagation();

        if (count > 0) {

          setCount(prev => prev - 1);

          removeFromCart(1);

        }

      }}
      className='text-black cursor-pointer'
    />
  )}

</button>

              </div>

               <div className='ml-[20px]'>
             <img src={sharwamah}  className='w-[300px] rounded-[7px] border-[2px] border-orange-500'/>
            <p className='text-[25px] text-orange-400 font-bold mt-[20px] ml-[70px]'>Sharwamah</p>
            <p className='text-[23px] mt-[10px] ml-[38%] mt-[20px]'>5$</p>


  <button
  onClick={() => {
    setShowControls1(true);
  }}
  className='text-[20px] bg-orange-500 text-white p-[15px_30px] rounded-[8px] ml-[50px] mt-[30px] flex items-center justify-between gap-[20px]'
>

  {/* PLUS ICON */}
  {showControls1 && (
    <FaPlus
      onClick={(e) => {
        e.stopPropagation();

        setCount1(prev => prev + 1);

        addToCart({
          id: 2,
          name: "Shawarma",
          price: 5
        });
      }}
      className='text-black cursor-pointer'
    />
  )}

  {/* COUNT / TEXT */}
  {showControls1 ? count1 : "Add to Cart"}

  {/* MINUS ICON */}
  {showControls1 && (
    <FaMinus
      onClick={(e) => {
        e.stopPropagation();

        if (count1 > 0) {

          setCount1(prev => {
            const newCount = prev - 1;

            removeFromCart(2);

            if (newCount === 0) {
              setShowControls1(false);
            }

            return newCount;
          });

        }
      }}
      className='text-black cursor-pointer'
    />
  )}

</button>

              </div>
              
               <div className='ml-[20px]'>
             <img src={waffles}  className='w-[300px] rounded-[7px] border-[2px] border-orange-500'/>
            <p className='text-[25px] text-orange-400 font-bold mt-[20px] ml-[90px]'>Waffles</p>
            <p className='text-[23px] mt-[10px] ml-[38%] mt-[20px]'>10$</p>


 <button
  onClick={() => {
    setShowControls2(true);
  }}
  className='text-[20px] bg-orange-500 text-white p-[15px_30px] rounded-[8px] ml-[60px] mt-[30px] flex items-center justify-between gap-[20px]'
>

  {/* PLUS ICON */}
  {showControls2 && (
    <FaPlus
      onClick={(e) => {
        e.stopPropagation();

        setCount2(prev => prev + 1);

        addToCart({
          id: 3,
          name: "Waffles",
          price: 10
        });
      }}
      className='text-black cursor-pointer'
    />
  )}

  {/* COUNT / TEXT */}
  {showControls2 ? count2 : "Add to Cart"}

  {/* MINUS ICON */}
  {showControls2 && (
    <FaMinus
      onClick={(e) => {
        e.stopPropagation();

        if (count2 > 0) {

          setCount2(prev => {
            const newCount = prev - 1;

            removeFromCart(3);

            if (newCount === 0) {
              setShowControls2(false);
            }

            return newCount;
          });

        }
      }}
      className='text-black cursor-pointer'
    />
  )}

</button>
              </div>
         
              <div className='ml-[20px]'>
             <img src={barbeque}  className='w-[300px] h-[300px] rounded-[7px] border-[2px] border-orange-500'/>
            <p className='text-[25px] text-orange-400 font-bold mt-[20px] ml-[50px]'>Chirps Barbeque</p>
            <p className='text-[23px] mt-[10px] ml-[40%] mt-[20px]'>20$</p>


      <button
  onClick={() => {
    setShowControls3(!showControls3);

    if (showControls3) {
      setCount3(0);
    }
  }}
  className='text-[20px] bg-orange-500 text-white p-[15px_30px] rounded-[8px] ml-[70px] mt-[30px] flex items-center justify-between gap-[20px]'
>

  {/* PLUS ICON */}
  {showControls3 && (
    <FaPlus
      onClick={(e) => {
        e.stopPropagation();

        setCount3(prev => prev + 1);

        // ✅ UPDATE GLOBAL CART
        setCartCount(prev => prev + 1);
      }}
      className='text-black cursor-pointer'
    />
  )}

  {/* COUNT / TEXT */}
  {showControls3 ? count3 : "Add to Cart"}

  {/* MINUS ICON */}
  {showControls3 && (
    <FaMinus
      onClick={(e) => {
        e.stopPropagation();

        if (count3 > 0) {
          setCount3(prev => prev - 1);

          // ✅ UPDATE GLOBAL CART SAFELY
          setCartCount(prev => Math.max(prev - 1, 0));
        }
      }}
      className='text-black cursor-pointer'
    />
  )}

</button>

              </div>

          </div>


         <div className='flex-col md:flex-row flex mt-[10%] mb-[40px] items-center justify-center'>

            <div className='ml-[20px]'>
             <img src={smallchops}  className='w-[300px]  h-[300px] rounded-[7px] border-[2px] border-orange-500'/>
            <p className='text-[25px] text-orange-400 font-bold mt-[20px] ml-[70px]'>Small Chops</p>
            <p className='text-[23px] mt-[10px] ml-[38%] mt-[20px]'>10$</p>


   <button
  onClick={() => {
    setShowControlsChoco(!showControlsChoco);

    if (showControlsChoco) {
      setCountChoco(0);
    }
  }}
  className='text-[20px] bg-orange-500 text-white p-[15px_30px] rounded-[8px] ml-[50px] mt-[30px] flex items-center justify-between gap-[20px]'
>

  {/* PLUS ICON */}
  {showControlsChoco && (
    <FaPlus
      onClick={(e) => {
        e.stopPropagation();

        setCountChoco(prev => prev + 1);

        // ✅ UPDATE GLOBAL CART
        setCartCount(prev => prev + 1);
      }}
      className='text-black cursor-pointer'
    />
  )}

  {/* COUNT */}
  {showControlsChoco ? countChoco : "Add to Cart"}

  {/* MINUS ICON */}
  {showControlsChoco && (
    <FaMinus
      onClick={(e) => {
        e.stopPropagation();

        if (countChoco > 0) {
          setCountChoco(prev => prev - 1);

          // ✅ UPDATE GLOBAL CART SAFELY
          setCartCount(prev => Math.max(prev - 1, 0));
        }
      }}
      className='text-black cursor-pointer'
    />
  )}

</button>

              </div>

               <div className='ml-[20px]'>
             <img src={coconut}  className='w-[300px] rounded-[7px] border-[2px] border-orange-500'/>
            <p className='text-[25px] text-orange-400 font-bold mt-[20px] ml-[70px]'>Coconut Bread</p>
            <p className='text-[23px] mt-[10px] ml-[40%] mt-[20px]'>5$</p>


  <button
  onClick={() => {
    setShowControlsShawarma(!showControlsShawarma);

    if (showControlsShawarma) {
      setCountShawarma(0);
    }
  }}
  className='text-[20px] bg-orange-500 text-white p-[15px_30px] rounded-[8px] ml-[65px] mt-[30px] flex items-center justify-between gap-[20px]'
>

  {/* PLUS ICON */}
  {showControlsShawarma && (
    <FaPlus
      onClick={(e) => {
        e.stopPropagation();

        setCountShawarma(prev => prev + 1);

        // ✅ UPDATE GLOBAL CART
        setCartCount(prev => prev + 1);
      }}
      className='text-black cursor-pointer'
    />
  )}

  {/* COUNT */}
  {showControlsShawarma ? countShawarma : "Add to Cart"}

  {/* MINUS ICON */}
  {showControlsShawarma && (
    <FaMinus
      onClick={(e) => {
        e.stopPropagation();

        if (countShawarma > 0) {
          setCountShawarma(prev => prev - 1);

          // ✅ UPDATE GLOBAL CART SAFELY
          setCartCount(prev => Math.max(prev - 1, 0));
        }
      }}
      className='text-black cursor-pointer'
    />
  )}

</button>

              </div>
              
               <div className='ml-[20px]'>
             <img src={chicken}  className='w-[300px] h-[300px] rounded-[7px] border-[2px] border-orange-500'/>
            <p className='text-[25px] text-orange-400 font-bold mt-[20px] ml-[90px]'>Chicken Pie</p>
            <p className='text-[23px] mt-[10px] ml-[45%] mt-[20px]'>2$</p>


 <button
  onClick={() => {
    setShowControlsPizza(!showControlsPizza);

    if (showControlsPizza) {
      setCountPizza(0);
    }
  }}
  className='text-[20px] bg-orange-500 text-white p-[15px_30px] rounded-[8px] ml-[65px] mt-[30px] flex items-center justify-between gap-[20px]'
>

  {/* PLUS ICON */}
  {showControlsPizza && (
    <FaPlus
      onClick={(e) => {
        e.stopPropagation();

        setCountPizza(prev => prev + 1);

        // ✅ UPDATE GLOBAL CART
        setCartCount(prev => prev + 1);
      }}
      className='text-black cursor-pointer'
    />
  )}

  {/* COUNT */}
  {showControlsPizza ? countPizza : "Add to Cart"}

  {/* MINUS ICON */}
  {showControlsPizza && (
    <FaMinus
      onClick={(e) => {
        e.stopPropagation();

        if (countPizza > 0) {
          setCountPizza(prev => prev - 1);

          // ✅ UPDATE GLOBAL CART SAFELY
          setCartCount(prev => Math.max(prev - 1, 0));
        }
      }}
      className='text-black cursor-pointer'
    />
  )}

</button>


              </div>
         
              <div className='ml-[20px]'>
             <img src={cup}  className='w-[300px] h-[300px] rounded-[7px] border-[2px] border-orange-500'/>
            <p className='text-[25px] text-orange-400 font-bold mt-[20px] ml-[28%]'>Cup Cake</p>
            <p className='text-[23px] mt-[10px] ml-[45%] mt-[20px]'>7$</p>


  <button
  onClick={() => {
    setShowControlsProduct3(!showControlsProduct3);

    if (showControlsProduct3) {
      setCountProduct3(0);
    }
  }}
  className='text-[20px] bg-orange-500 text-white p-[15px_30px] rounded-[8px] ml-[70px] mt-[30px] flex items-center justify-between gap-[20px]'
>

  {/* PLUS ICON */}
  {showControlsProduct3 && (
    <FaPlus
      onClick={(e) => {
        e.stopPropagation();

        setCountProduct3(prev => prev + 1);

        // ✅ UPDATE GLOBAL CART
        setCartCount(prev => prev + 1);
      }}
      className='text-black cursor-pointer'
    />
  )}

  {/* COUNT / TEXT */}
  {showControlsProduct3 ? countProduct3 : "Add to Cart"}

  {/* MINUS ICON */}
  {showControlsProduct3 && (
    <FaMinus
      onClick={(e) => {
        e.stopPropagation();

        if (countProduct3 > 0) {
          setCountProduct3(prev => prev - 1);

          // ✅ UPDATE GLOBAL CART SAFELY
          setCartCount(prev => Math.max(prev - 1, 0));
        }
      }}
      className='text-black cursor-pointer'
    />
  )}

</button>


              </div>

          </div>

  </div>
     
     <div style={{backgroundColor : "#FFF7ED"}} className='flex-col md:flex-row  mt-[12%] pt-[40px]' id='Focus'>
 
       <p className='text-center font-bold text-orange-400 text-[30px] pt-[80px]'>WE FOCUS ON</p>

          <div className='flex-col md:flex-row flex gap-[45px] text-[23px] text-center pt-[60px] justify-center items-center pb-[10%] font-bold'>

  <p className='cursor-pointer transition-colors duration-[300ms] hover:text-orange-500'>
    Freshly baked products
  </p>

  <p className='cursor-pointer transition-colors duration-[300ms] hover:text-orange-500'>
    Quality ingredients
  </p>

  <p className='cursor-pointer transition-colors duration-[300ms] hover:text-orange-500'>
    Excellent customer service
  </p>

  <p className='cursor-pointer transition-colors duration-[300ms] hover:text-orange-500'>
    Clean and hygienic preparation
  </p>

</div>

     </div>

        <div className='flex-col md:flex-row flex gap-[6%] mt-[10%] mb-[70px]' id='About'>
    <div>
     <img src={sabique}
      className='w-[500px] mt-[7%] rounded-[8px] border-[3px] border-orange-400 ml-[40px] items-center  transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer'/>
     </div>
             <div className="flex-col md:flex-row">

          <p className='text-orange-400 text-[40px] font-bold mt-[10%]'>About Us</p>

              <p className='pt-[30px] text-[23px]'>
                Founded in 2024, Dominion Pastries was created with<br/>
                a passion for delivering fresh, delicious, and high-quality<br/>
                pastries to customers who value great taste and excellent<br/> 
                service. What started as a small pastry vision has continued</p>
                  
                   <p className='pt-[20px] text-[23px]'>
                   to grow into a trusted brand focused on satisfying people with<br/>
                   freshly baked treats made with care and creativity.At Dominion<br/>
                   Pastries, we specialize in a variety of baked products</p>

                   <p className='pt-[20px] text-[21px]'>
                  including meat pies, doughnuts, cakes, chicken pies, sausage rolls,<br/>
                  cupcakes, and other tasty snacks prepared with quality ingredients<br/>
                 and proper hygiene standards.</p>
              
                 <p className='text-orange-400 pt-[30px] font-bold text-[35px]'>Our Missions</p>

                  <p className='pt-[25px] text-[21px]'>
                  Our goal is to create pastries that bring happiness, comfort, and memorable<br/>
                  experiences to every customer. We believe that every bite should reflect freshness.</p>
                 
             </div>

        </div>

          <div id='Testimonies'>

            <h2 className='text-center mt-[10%] text-orange-400 font-bold text-[30px]'>Testimonies</h2>

            <div className='flex-col md:flex-row flex justify-center items-center gap-[70px] mb-[10%] mt-[40px]'>

           <div className='flex-col md:flex-row flex gap-[20px]  bg-red-200 shadow-[0px_4px_12px_rgba(255,140,0,0.5)] pt-[50px] pb-[60px] pl-[20px] mt-[40px] pr-[15px] rounded-[12px] transition-all duration-500 hover:bg-blue-300 hover:shadow-[0px_8px_20px_rgba(255,140,0,0.7)] cursor-pointer'>

   <div>
      <img  src={mina} className='w-[200px] h-[200px] rounded-[10px] border-[2px] border-orange-400' />
   </div>

   <div>
      <p className='text-orange-400 text-[30px] font-bold mt-[30px]'> Mina</p>

      <p className='pt-[20px] text-[17px]'>
        “Dominion Pastries never disappoints.<br/>
        Their cakes are always fresh, soft,<br/>
        and beautifully made.”
      </p>
   </div>

</div>
   
          <div className='flex-col md:flex-row flex  bg-red-200 gap-[30px] shadow-[0px_4px_12px_rgba(255,140,0,0.5)] pt-[50px] pb-[60px] pl-[20px] mt-[40px] pr-[15px] rounded-[12px] transition-all duration-500 ease-in-out hover:scale-[1.03] hover:shadow-[0px_8px_20px_rgba(255,140,0,0.7)] cursor-pointer'>

  <div>
    <img src={james} className='w-[200px] h-[200px] rounded-[10px] border-[2px] border-orange-400' />
  </div>

  <div>
    <p className='text-orange-400 text-[30px] font-bold mt-[30px]'>James</p>
    <p className='pt-[20px] text-[17px]'>
      “I ordered pastries for my birthday<br/>
      and everyone loved them. Great taste<br/>
      and excellent service!”
    </p>
  </div>

</div>
      
    </div>

          </div>

          <div>
            
          <Footer />

          </div>

       </div>
    
    
  )
}

export default HomePage;





