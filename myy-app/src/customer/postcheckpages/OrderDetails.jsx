import React from "react";
import AddressCard from "../components/AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid, Paper } from "@mui/material";
import { StarIcon } from "@heroicons/react/16/solid";

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      {/* Delivery Address Section */}
      <div className="p-5 border bg-white rounded-md">
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>

      {/* Order Tracker */}
      <div className="py-10">
        <OrderTracker activeStep={4} />
      </div>

      {/* Product Details & Review Section - Side by Side */}
      <Grid container justifyContent="center" className="">
        {[1,1,1,1,1].map((item)=><Grid
          item
          xs={12}
          sm={12}
          md={10}
          lg={9}
          component={Paper}
          elevation={3}
          className="hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out rounded-md p-5 border bg-white"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" }, // Stack on small screens
            alignItems: { xs: "flex-start", sm: "center" }, // Adjust alignment
            width: "100%",
            maxWidth: { xs: "100%", sm: "95%", md: "90%", lg: "85%" },
            marginBottom: "1rem",
            overflow: "hidden",
            padding: { xs: "10px", sm: "20px" }, // Adjust padding
          }}
        >
          {/* Product Image & Details */}
          <Box
            sx={{
              flex: 2,
              display: "flex",
              flexDirection: { xs: "column", sm: "row" }, // Stack details under image on small screens
              alignItems: "center",
              width: "100%",
            }}
          >
            <img
              className="w-20 h-20 object-cover object-top rounded-md"
              src="https://i.postimg.cc/dtRngz8C/girl-1333640-640.jpg"
              alt="Product"
            />
            <div className="ml-4 space-y-1 text-center sm:text-left">
              <p className="text-lg font-semibold">Product Title</p>
              <p className="text-gray-600 text-xs">
                <span>Color: Blue</span> | <span>Size: M</span>
              </p>
              <p className="text-sm text-gray-500">Seller attribute</p>
              <p className="text-sm font-bold text-blue-600">$190</p>
            </div>
          </Box>

          {/* Rate & Review Section */}
          <Box
            sx={{
              flexBasis: { xs: "100%", sm: "20%" }, // Full width on mobile
              minWidth: "180px",
              justifyContent: "center",
              paddingLeft: { xs: "0", sm: "1rem" }, // Remove left padding on mobile
              borderLeft: { xs: "none", sm: "1px solid #e0e0e0" }, // No border on mobile
              height: "100%",
              display: "flex",
              alignItems: "center",
              marginTop: { xs: "10px", sm: "0" }, // Add spacing when stacked
            }}
          >
            <StarIcon className="w-6 h-6" />
            <span className="text-lg font-medium">Rate & Review</span>
          </Box>
        </Grid>)}
        

      </Grid>
    </div>
  );
};

export default OrderDetails;