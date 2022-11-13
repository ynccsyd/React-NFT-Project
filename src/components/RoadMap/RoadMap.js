import * as React from "react";
import "./road.css";
import Box from "@mui/system/Box";
import Grid from "@mui/system/Unstable_Grid";
import styled from "@mui/system/styled";
import Discover from "../images/web-address-registration.gif";
import Wallet from "../images/woman-doing-bitcoin-trading.png";
import Trading from "../images/crypto-trading.png";
import Money from "../images/money-investment.png";
import Heading from "../Heading/Heading"


const Item = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  border: "1px solid",
  borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
  padding: theme.spacing(1),
  borderRadius: "4px",
  textAlign: "center",
}));

export default function AutoGrid() {
  return (
    <div className="roadmap">
      <Heading title={"NFTs RoadMap"} />
      
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid xs>
            <Item sx={{ bgcolor: "#62d9bd" }}  >
              <img src={Discover} alt="step1"  />
              <p className="step_1">Step 1</p>
              <p style={{color:' #eb2915' , fontSize: 'large' }}>Filter & Discover</p>
             
            </Item>
          </Grid>
          <Grid xs>
            <Item sx={{ bgcolor: "#62d9bd" }}>
              <img src={Wallet} alt="step2"/>
              {/* <img src={Wallets} alt="" /> */}
              <p className="step_2">Step 2</p>
              <p style={{color:' rgb(24 21 235)' , fontSize: 'large' }}>Connect Wallet</p>
            
            </Item>
          </Grid>
          <Grid xs>
            <Item sx={{ bgcolor: "#62d9bd" }}>
              <img src={Trading} alt="step3" />
              <p className="step_3">Step 3</p>
              <p style={{color:'rgb(126 4 141)' , fontSize: 'large' }}>Start Trading</p>
              {/* <p>
                Connect with wallet, discover, buy Nfts, sell your Nfts and earn
                money
              </p> */}
            </Item>
          </Grid>
          <Grid xs>
            <Item sx={{ bgcolor: "#62d9bd" }}>
              <img src={Money} alt="step4" />
              <p className="step_4">Step 4</p>
              <p style={{color:' rgb(173 7 227)' , fontSize: 'large' }}>Earn Money</p>
            
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

