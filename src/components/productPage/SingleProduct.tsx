import { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SingleProduct = ({ product }) => {
  const data = product.data;
  const [quantity, setQuantity] = useState<number>(1);
  const [tick, setTick] = useState<any>("");

  const router = useRouter();

  const tickOnclick = () => {
    setTick(<AiOutlineCheck />);
  };

  const increaseOnClick = () => {
    setQuantity((c) => {
      if (c < 5) {
        return c + 1;
      } else {
        return 5;
      }
    });
  };
  const decreaseOnClick = () => {
    setQuantity((c) => {
      if (c >= 2) {
        return c - 1;
      } else {
        return 1;
      }
    });
  };
  console.log("data", data);
  return (
    <>
      <div className="w-full flex bg-[#FDF6F6] ">
        <div className="w-3/4 m-auto flex  my-12">
          <div className="productImage h-96 w-1/2 flex justify-center cursor-zoom-in bg-white ">
            <Image
              src={data?.image}
              width={100}
              height={100}
              alt="productImage"
              className="w-auto h-full "
            />
          </div>
          <div className="w-1/2 px-12 flex flex-col">
            <div className="productDirectory flex">
              <div
                className="text-sm font-extralight cursor-pointer"
                onClick={() => router.push("/products")}
              >
                Product
              </div>
              <div className="text-sm font-extralight">/</div>
              <div className="text-sm font-extralight">{data.category}</div>
              <div className="text-sm font-extralight">/</div>
              <div className="text-sm font-extralight">{data.title}</div>
            </div>
            <div className="mt-2 text-[#413E65] text-lg">{data.category}</div>
            <div className="mt-2 text-3xl text-[#413E65]">{data.title}</div>
            <div className="priceDetail flex my-4 items-center">
              <div className="text-xl font-bold text-[#413E65]">
                ${data.price}
              </div>
              <div className="text-base text-[#413E65] mx-1">
                &Free Shipping
              </div>
            </div>
            <div className="mt-2 text-[#413E65]">{data.description}</div>
            <div className="quantityBox flex my-4 h-8">
              <div className="quantity flex ">
                <button
                  className="w-8  border-2 border-solid"
                  onClick={decreaseOnClick}
                >
                  -
                </button>
                <div className="border-2 w-8 flex justify-center">
                  {quantity}
                </div>
                <button
                  className="w-8 border-2 border-solid"
                  onClick={increaseOnClick}
                >
                  +
                </button>
              </div>
              <div className="addtoCartBox  ml-2">
                <button
                  className="bg-[#413E65] flex justify-center items-center text-white w-80 border-2 border-solid h-8 hover:bg-[#F25C54]"
                  onClick={tickOnclick}
                >
                  Add To Cart{" "}
                  <div className="mx-1 text-base font-bold">{tick}</div>
                </button>
              </div>
            </div>
            <div className="font-semibold text-[#413E65] mt-4">
              Free shipping on order over $50
            </div>
            <div className="text-[#413E65] flex text-sm items-center">
              <div>
                <BsFillCheckCircleFill />
              </div>
              <div className="mx-2"> No-Risk Money Back Guarantee!</div>
            </div>
            <div className="text-[#413E65] flex text-sm items-center">
              <div>
                <BsFillCheckCircleFill />
              </div>
              <div className="mx-2"> No Hassle Refunds</div>
            </div>
            <div className="text-[#413E65] flex text-sm items-center">
              <div>
                <BsFillCheckCircleFill />
              </div>
              <div className="mx-2"> Secure Payments</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
