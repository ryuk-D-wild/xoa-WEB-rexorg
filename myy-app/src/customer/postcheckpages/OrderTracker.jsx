import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";

const steps = ["Placed", "Order Confirmed", "Shipped", "Out for delivery", "Delivered"];

const OrderTracker = ({ activeStep }) => {
    return (
        <div className="w-full">
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (
                    <Step key={index}>
                        <StepLabel>
                            <span style={{ color: "#9155fd", fontSize: "8px", fontWeight: "bold" }}>
                                {label}
                            </span>
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
};

export default OrderTracker;
