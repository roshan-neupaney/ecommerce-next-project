"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";


const Category = (props) => {
  const [categoryMenu, setCategoryMenu] = useState(false);

  const handleFilter = () => {
    setCategoryMenu(true);
  };
  const handleCross = () => {
    setCategoryMenu(false);
  };

  let data = props.data
  // console.log(data)
return (
    <>
      <div className="categoryMenu flex flex-col  w-2/12 h-full my-4 p-2   ">
        <div className="filter cursor-pointer w-2/5" >
          <div className="filterLogo flex w-7 h-7 ml-4 m-2 " onClick={handleFilter}>
            <Image
              src="/assets/images/setting.png"
              width={100}
              height={100}
              alt="image"
              className=" object-contain "
            />
            <p className="mx-2 text-lg">Filter</p>
          </div>
        </div>
        <div
          className={`categorySideBar absolute flex flex-col w-2/12 h-full  top-16 ${
            categoryMenu ? "left-0 " : "-left-[100%]"
          } top-0 bg-white transition-all duration-500 ease-in-out`}>
            <div className="categoryList m-4">
          <div
            className="close absolute text-2xl top-4 right-4 mb-6 cursor-pointer"
            onClick={handleCross}>
            <FaTimes />
          </div>

          <div className="font-bold ">
            <h1>Category</h1>
          </div>
          <ul>
            <Link href="" onClick={handleCross}>
              <li className="my-2" onClick={() => {
                
                props.setApiUrls("all");
              }}>All</li>
            </Link>
            <Link href="" onClick={handleCross}>
              <li className="my-2"
               onClick={() => {
                props.setApiUrls("men's clothing");
              }}>Men</li>
            </Link>
            <Link href="" onClick={handleCross}>
              <li className="my-2" onClick={() => {
                props.setApiUrls("women's clothing");
              }}>Women</li>
            </Link>
            <Link href="" onClick={handleCross}>
              <li className="my-2" onClick={() => {
                props.setApiUrls("electronics");
              }}>Electronic</li>
            </Link>
            <Link href="" onClick={handleCross}>
              <li className="my-2" onClick={() => {
                props.setApiUrls("jewelery");
              }}>Jewelery</li>
            </Link>
          </ul>
          
        </div>
        </div>
      </div>
    </>
  );
};

export default Category;
