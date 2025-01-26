import React from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import AddressCard from "../components/AddressCard/AddressCard";

const Delivery = () => {


    const handelSubmit=(e)=>{
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const address={
            firstName:data.get("firstName"),
            lastName:data.get("lastName"),
            useraddress:data.get("address"),
            city:data.get("city"),
            state:data.get("state"),
            zip:data.get("zip"),
            mobileNumber:data.get("mobileNumber")
        }
        console.log("address",address)
    }

  return (
    <div style={{width: "100%",overflowX: "hidden", }}>
      <Grid container spacing={2} sx={{flexDirection: { xs: "column", md: "row" }, }}>
        {/* Address List Section */}
        <Grid item xs={12} md={5}sx={{maxWidth: "100%",overflowY: "scroll", border: "1px solid #ddd",borderRadius: "8px",boxShadow: 3,height: { xs: "auto", md: "30.5rem" },}}>
          <Box sx={{ p: 2 }}>
            <AddressCard />
            <Button sx={{mt: 2,bgcolor: "rgb(255,255,0)",width: { xs: "100%", md: "auto" },}}size="large" variant="contained">
              Deliver Here
            </Button>
          </Box>
        </Grid>

        {/* Address Form Section */}
        <Grid item xs={12} md={7} sx={{maxWidth: "100%",border: "1px solid #ddd",borderRadius: "8px",boxShadow: 3,}}>
          <Box sx={{ p: 2 }}>
            <form onSubmit={handelSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth required id="firstName" name="firstName" label="First Name" autoComplete="name"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth required id="lastName" name="lastName"label="Last Name" autoComplete="last name" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth required id="address"name="address" label="Address" multiline rows={4} />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth required id="city" name="city" label="City"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth required id="state" name="state" label="State/Provience/Region" autoComplete="State/Provience/Region"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth required id="zip" name="zip" label="Zip Code / Postal code" autoComplete="shipping postal code"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth required id="mobileNumber" name="mobileNumber" label="mobileNumber" autoComplete="given-name"/>
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" size="large" sx={{width: { xs: "100%", md: "auto" }, bgcolor: "rgb(255,255,0)"}}>
                    Save Address
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Delivery;
