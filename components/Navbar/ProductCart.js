import React,{useState} from 'react'
import { BsFillCartCheckFill } from "react-icons/bs";
import { FaTimes } from 'react-icons/fa';


const ProductCart = () => {
  const [cartProduct, setCartProduct] = useState(false);

  const handleFilter = () => {
    setCartProduct(true);
  };
  const handleCross = () => {
    setCartProduct(false);
  };

  return (
    <>
    <div onClick={handleFilter} ><BsFillCartCheckFill/></div>
        <div
            className={`cartSideBar absolute flex flex-col w-2/5 h-full  top-0 ${cartProduct ? "right-0 " : "-right-[100%]" } top-0 bg-white transition-all duration-500 ease-in-out`}>
            <div className=" m-4">
                <div className="cartHeader flex my-2">
                    <div className="font-semibold text-base">Shopping Cart</div>
                    <div
                        className="close absolute text-2xl top-5 right-5 mb-6 cursor-pointer"
                        onClick={handleCross}>
                        <FaTimes />
                </div>       
            </div>
            <hr />
        </div>
    </div>

    </>
  )
}

export default ProductCart