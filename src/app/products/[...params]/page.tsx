'use client'
import React from 'react'
import SingleProduct from '../../../components/productPage/SingleProduct';
import { SERVER_SIDE_GET_WITH_ID } from '../../../components/methods/apicall';

const fetchProducts = async (query) => {
  const {params} = query;
  const res = [
    await SERVER_SIDE_GET_WITH_ID(`products/`,params[0]),
];
  const [response] = await Promise.all(res);
  return response;
};

export default async function SingleProductPage ({ params }){
  const product = await fetchProducts(params);
  

  return (
    <>
    <SingleProduct product={product}/>
    </>
  )
}

