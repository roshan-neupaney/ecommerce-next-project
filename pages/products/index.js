import React ,{useState} from "react";
import ProductContainer from "@components/productPage/ProductContainer";
import ProductNavbar from "@components/productPage/ProductNavbar";

export async function getServerSideProps() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}

const productPage = ({ data }) => {
  const [apiUrl, setApiUrl] = useState("all")
  let index = data ;

  if(!apiUrl || apiUrl==="all"){
    index = data ;
  }
  else{
      index = data.filter(obj => obj.category===apiUrl);
  }

  const arrayLength = index.length;

  return (
    <>
      <div className="productContainer flex flex-col  justify-center w-full m-auto bg-[#FDF6F6]   ">
        <ProductNavbar data={data} setApiUrl={setApiUrl} arrayLength={arrayLength} />
        <div className="w-full flex ">
          <ProductContainer data={index}/>
        </div>
      </div>
    </>
  );
};

export default productPage;
