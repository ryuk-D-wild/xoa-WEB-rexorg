import React from "react";
import { Grid } from "@mui/material";
import OrderCard from "../components/Order/OrderCard";

const orderStatus = [
    { label: "On The Way", value: "On_The_Way-..." },
    { label: "Delivered", value: "Delivered" },
    { label: "Cancelled", value: "Canceled" },
    { label: "Return", value: "Return" }
];

const Order = () => {
    return (
        <div className="p-4 sm:p-6">
            <Grid container spacing={2} sx={{ flexDirection: { xs: "column", sm: "row" }, justifyContent: { sm: "space-between" } }} > {/* Stack vertically on mobile/ flexDirection: { xs: "column", sm: "row" } */}
                {/* Filter Panel */}
                <Grid item xs={12} sm={3} sx={{position: "sticky",top: 16,height: { xs: "auto", sm: "100vh" },overflowY: "auto",backgroundColor: "white",boxShadow: 3,padding: 2,borderRadius: 2}} > {/* height: { xs: "auto", sm: "100vh" }, / Full height on desktop */}
                     {/*overflowY: "auto", / Scrollable on small screens*/}

                    <h1 className="font-bold text-lg sm:text-xl">Filter</h1>
                    <div className="space-y-4 mt-6">
                        <h1 className="font-semibold sm:text-lg">Order Status</h1>
                        {orderStatus.map((option, index) => (
                            <div className="flex items-center" key={index}>
                                <input id={option.value} defaultValue={option.value} type="checkbox" className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-indigo-500"/>
                                <label className="ml-3 text-sm sm:text-base text-gray-500" htmlFor={option.value}>
                                    {option.label}
                                </label>
                            </div>
                        ))}
                    </div>
                </Grid>

                {/* Main Content */}
                <Grid item xs={12} sm={9} sx={{padding: { xs: 2, sm: 3 },marginTop: { xs: 2, sm: 0 },backgroundColor: "white",boxShadow: 3,borderRadius: 2}}>
                  
                    <div className="text-gray-700 text-center">
                        <h2 className="text-xl font-semibold">All Order's</h2>
                        <OrderCard />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Order;
