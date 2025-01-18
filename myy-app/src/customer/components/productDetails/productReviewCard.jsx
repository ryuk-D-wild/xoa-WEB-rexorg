import React from "react";
import { Avatar, Box, Grid2, Rating } from '@mui/material'

const ProductReviewCard = () => {
    return (
        <div>
            <Grid2 cointainer spacing={2} gap={3}>

               <Grid2 item xs={1}>
                <Box>
                    <Avatar className='text-white' sx={{width:56,height:56,bgcolor:"#9155fd"}}></Avatar>
                </Box>
               </Grid2>

               <Grid2 xs={9}>
                <div className='space-y-2'>
                    <div>
                        <p className="font-semibold texr-lg">domo review</p>
                        <p className="opacity-70">jan 14 2025</p>
                    </div>
                </div>
                <Rating value={4.5} name='half-rating' readOnly precision={.5}/>
                <p>al products </p>
               </Grid2>

            </Grid2>
        </div>
    )
}

export default ProductReviewCard;