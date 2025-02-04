import React from "react";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const navigate=useNavigate();
    const handelCheckOut=()=>{
        navigate("/checkout/?step=2")
    }
    return (
        <div className="bg-gray-100 min-h-screen p-5">
            <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-5">
                {/* Heading */}
                <h1 className="text-2xl font-bold pb-4 border-b">Shopping Cart</h1>

                <div className="lg:grid grid-cols-3 gap-6 mt-6">
                    {/* Cart Items Section */}
                    <div className="col-span-2">
                        <CartItem />
                        {/* Additional Cart Items */}
                        <CartItem />
                        <CartItem />
                        {/* Total Items Note */}
                        <p className="mt-4 text-gray-500">
                            Total (3 items): <span className="font-bold">$2000</span>
                        </p>
                    </div>

                    {/* Price Details Section */}
                    <div className="bg-gray-50 p-5 rounded-lg shadow-md sticky top-0 h-fit">
                        <h2 className="text-lg font-bold pb-4">Price Details</h2>
                        <hr />
                        <div className="space-y-4 mt-4">
                            <div className="flex justify-between text-gray-600">
                                <span>Price (3 items)</span>
                                <span>$2000</span>
                            </div>
                            <div className="flex justify-between text-green-600">
                                <span>Discount</span>
                                <span>-$200</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Delivery Charges</span>
                                <span>Free</span>
                            </div>
                            <hr />
                            <div className="flex justify-between text-lg font-bold text-black">
                                <span>Total Amount</span>
                                <span>$1800</span>
                            </div>
                        </div>
                        <button onClick={handelCheckOut} className="w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg mt-5 hover:bg-yellow-600">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
