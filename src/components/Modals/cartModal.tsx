import { Box, Drawer, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { SERVER_SIDE_GET } from "../methods/apicall";

const fetchProducts = async () => {
  const res = [await SERVER_SIDE_GET("carts/user/2")];
  const [response] = await Promise.all(res);
  return response;
};

const CartModal = async ({ anchor, toggleShowCart, open }) => {
  const { data } = await fetchProducts();
  console.log(data);
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", width: "100% " }}>
      <Drawer
        sx={{
          "& .MuiDrawer-paper": {
            width: "35%",
            left: "unset",
            height: "100%",
          },
        }}
        anchor={anchor}
        open={open}
        onClose={toggleShowCart}
      >
        <Box display={"flex"} justifyContent={"space-between"} margin={2}>
          <span>Shopping Cart</span>
          <span>Remove All</span>
        </Box>
        <hr />
        <div
          style={{
            marginTop: "2px",
          }}
        >
          <Stack spacing={2}>
          <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    borderBottom: "1px solid",
                    margin: "15px 30px 15px 30px",
                  }}
                >
                  <div style={{ display: "flex", marginBottom: 7 }}>
                   
                    <span style={{ margin: 10 }}>Name</span>
                  </div>
                  <span>Quantity</span>
                  <span>Price</span>
                  <span>Action</span>
                </div>
            {data?.map((items) => {
              return (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    // borderBottom: "1px solid",
                    margin: "15px 30px 15px 30px",
                  }}
                >
                  <div style={{ display: "flex", marginBottom: 7 }}>
                    {/* <Image
                      src="/assets/images/logo1.avif"
                      alt="image"
                      width={50}
                      height={50}
                    /> */}
                    <span style={{ margin: 10 }}> ProductName</span>
                  </div>
                  <span>Quantity</span>
                  <span>Rs. 160</span>
                  <span>R</span>
                </div>
              );
            })}
          </Stack>
        </div>
      </Drawer>
    </Box>
  );
};

export default CartModal;
