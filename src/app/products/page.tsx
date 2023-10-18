import {SERVER_SIDE_GET} from '../../components/methods/apicall'
import ProductContainer from '../../components/productPage/ProductContainer'

const fetchProducts = async () => {
  const res = [
    await SERVER_SIDE_GET('products'),
];
  const [response] = await Promise.all(res);
  return response;
};
export default async function ProductPage() {
  const products = await fetchProducts();

  return (
    <>
      <div className="productContainer flex flex-col  justify-center w-full m-auto bg-[#FDF6F6]   ">
        <div className="w-full flex flex-col ">
        <ProductContainer data={products.data} />
        </div>
      </div>
    </>
  );
}
