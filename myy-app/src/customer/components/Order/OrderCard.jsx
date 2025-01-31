import { Grid } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
import React from "react";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
    const navigate=useNavigate();
    return (
        <div onClick={()=>navigate('/account/order/${6}')} className="p-5 border shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out rounded-md">
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
                
                {/* Product Image & Info */}
                <Grid item xs={12} sm={6}>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                        <img 
                            className="w-[5rem] h-[5rem] object-cover object-top rounded-md"
                            src="https://i.postimg.cc/dtRngz8C/girl-1333640-640.jpg"
                            alt="Product"
                        />
                        <div className="text-center sm:text-left">
                            <p className="text-lg font-semibold">Title Goes Here</p>
                            <p className="opacity-50 text-xs font-semibold">Size: Medium</p>
                            <p className="opacity-50 text-xs font-semibold">Color: Red</p>
                        </div>
                    </div>
                </Grid>

                {/* Price Section */}
                <Grid item xs={12} sm={2} className="text-center sm:text-left">
                    <p className="font-semibold text-lg">₹1999</p>
                </Grid>

                {/* Delivery Status */}
                <Grid item xs={12} sm={4}>
                    {true && (
                        <div className="text-center sm:text-left">
                            <p className="flex justify-center sm:justify-start items-center">
                                <AdjustIcon sx={{ width: "15px", height: "15px" }} className="text-blue-600" />
                                <span className="ml-2">Delivered on Date of Delivery</span>
                            </p>
                            <p className="text-xs text-gray-500">Your product has been delivered</p>
                        </div>
                    )}
                    {false && <p><span>Expected delivery</span></p>}
                </Grid>
            </Grid>
        </div>
    );
};

export default OrderCard;
