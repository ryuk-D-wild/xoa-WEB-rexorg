import { Grid } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust"
import React from "react";

const OrderCard =()=>{
    return(
        <div>
            <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
                <Grid item sx={6}>
                <div style={{ display: "flex", alignItems: "center" }}>                    <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://i.postimg.cc/dtRngz8C/girl-1333640-640.jpg " alt="" />
                    <div className='ml-5'>
                        <p className='ml-5 space-y-2'>title goes here</p>
                        <p className='opacity-50 text-xs font-semibold'>size</p>
                        <p className='opacity-50 text-xs font-semibold'>color</p>
                    </div>
                </div>
                
                </Grid>
                <Grid item xs={2}>
                    <p>price 1999</p>
                </Grid>
                <Grid item xs={4}>
                    { true && <p> <AdjustIcon/> <span>Delivered on dant of delivery</span> </p>}
                    {false && <p> <span>expected delivery</span></p>}
                </Grid>
            </Grid>
        </div>
    )
}

export default OrderCard;
