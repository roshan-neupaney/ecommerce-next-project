"use client";
import React, { useState } from "react";
import ItemCard from "./ItemCard";
import { Button, Grid, Stack, Typography } from "@mui/material";


export default function ProductContainer({ data }) {
  const [value, setValue] = useState(0);
  const [product, setProduct] = useState(data);

  const handleCategory = (val: string) => {
    const filteredData = data?.filter((item: any) => {
      if (val === "all") {
        return item;
      } else if (item?.category?.toLowerCase() === val.toLowerCase()) {
        return item;
      }
    });
    setProduct(filteredData);
  };

  const handleSearch = (val:string) => {
    try{
      const filteredData = data.filter((item:any) => {
        if (item.title.toLowerCase().includes(val.toLowerCase())) {
          return item;
        }
      });
      setProduct(filteredData);
    } catch(error){

    }
  };
  return (
    <>
      <div className="productNavbar flex justify-between items-center mx-2 ">
        <div>filter</div>
        <div className="m-4">
          <p>{product.length} total products</p>
        </div>
        <input
          className="w-44 h-4 m-2 mr-10 p-4 border-2  "
          type="text"
          placeholder="Search.."
          onChange={(val) => handleSearch(val.target.value)}
        />
      </div>
      <Grid container>
        <Grid item xs={1.5} sx={{ borderRight: "1px solid #413E65" }}>
          <Stack spacing={2} style={{ margin: "1rem" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              Category
            </div>
            <Button
              onClick={() => {
                setValue(0);
                handleCategory("all");
              }}
              className={value === 0 ? "active-btn" : "inactive-btn"}
            >
              All
            </Button>
            <Button
              onClick={() => {
                setValue(1);
                handleCategory("women's clothing");
              }}
              className={value === 1 ? "active-btn" : "inactive-btn"}
            >
              Women
            </Button>
            <Button
              onClick={() => {
                setValue(2);
                handleCategory("men's clothing");
              }}
              className={value === 2 ? "active-btn" : "inactive-btn"}
            >
              Men
            </Button>
            <Button
              onClick={() => {
                setValue(3);
                handleCategory("jewelery");
              }}
              className={value === 3 ? "active-btn" : "inactive-btn"}
            >
              Jewelery
            </Button>
            <Button
              onClick={() => {
                setValue(4);
                handleCategory("electronics");
              }}
              className={value === 4 ? "active-btn" : "inactive-btn"}
            >
              Electronics
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={10.5} style={{ overflowY: "scroll", height: "90vh" }}>
          <Grid container className="">
            {product.length > 0 ? (
              product.map((element) => {
                return (
                  <Grid item xs={3} key={element.id}>
                    <ItemCard
                      title={element.title}
                      price={element.price}
                      image={element.image}
                      id={element.id}
                    />
                  </Grid>
                );
              })
            ) : (
              <Typography variant="h2" margin={"auto"}>
                No Data Found
              </Typography>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
