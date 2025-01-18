import React from "react";
import { IconButton } from "@mui/material";
import { RemoveCircleOutlineOutlined } from "@mui/icons-material";
import { AddCircleOutlineOutlined } from "@mui/icons-material";
import { Button } from "@headlessui/react";

const CartItem = () => {
    return (
        <div className="p-5 shadow-lg border rounded-md">
            <div className="flex items-center">
                <div className="w-20 h-20 lg:w-36 lg:h-36">
                    <img
                        className="w-full h-full object-cover object-center"
                        src="https://i.postimg.cc/tgyvyRPP/woman-6466382-640.jpg"
                        alt="Cart Item"
                    />
                </div>
                <div className="ml-5 space-y-1">
                    <p className="font-semibold">ptoduct title</p>
                    <p className="opacity-70">size :l-white</p>
                    <p className="opacity-70 mt-2">seller or prod info</p>
                    <div className="flex space-x-5 item-center text-grey-900 pt-6">
                        <p className="font-semibold">199</p>
                        <p className="line-through text-red-500">1000</p>
                        <p className="text-blue-600 font-semibold">80%off</p>
                    </div>

                </div>
            </div>
            <div className="lg:flex items-center lg:space-x-10 pt-4">
                <div className="flex items-center space-x-2">
                    <IconButton>
                        <RemoveCircleOutlineOutlined />
                    </IconButton>
                    <span className="py-1 px-7 border rounded-sm">7</span>
                    <IconButton>
                        <AddCircleOutlineOutlined />
                    </IconButton>
                    <Button style={{ color: "rgb(255, 0, 0)" }}>
                        remove
                    </Button>


                </div>
            </div>
        </div>
    )
}

export default CartItem;