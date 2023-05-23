"use client";
import React,{useState} from 'react'
import Category from './Category'

const ProductNavbar = (props) => {
  let data = props.data;
  const [apiUrls, setApiUrls] = useState("")
  props.setApiUrl(apiUrls)
  return (
    <>
    <div className="productNavbar flex justify-between items-center ">
          <Category data={data} setApiUrls={setApiUrls} />
          <div className="m-2">
            <p>{props.arrayLength} total products</p>
          </div>
          <input
            className="w-44 h-4 m-2 mr-10 p-4 border-2  rounded-2xl"
            type="text"
            placeholder="Search.."
          />
        </div>
    </>
  )
}

export default ProductNavbar