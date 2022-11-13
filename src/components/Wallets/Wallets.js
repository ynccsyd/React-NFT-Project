import * as React from "react";
import { styled } from "@mui/material/styles";
import "./Wallets.css";
import Heading from "../Heading/Heading";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import { ethers } from "ethers";
import { useState } from "react";




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function AutoGrid() {
  const [account, setAccount] = useState("");
  const [data, setData] = useState([]);

  const connect = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    let res = await provider.send("eth_requestAccounts", []);
    // console.log(res);
    setAccount(res[0]);
    // getNftData(res[0]);
  };




  return (
    <Container className="wallet">
      <Heading title={"Nft Wallets"} />
      <div className="wallet_1">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            <Grid item xs>
              <Item>
                <img src="metamask.png" alt="metamask"  onClick={connect}/>
                <p >MetaMask</p>
                
              </Item>
            </Grid>
            <Grid item xs>
              <Item >
                <img src="coinbase.png" alt="" />
                <p>Coinbase</p>
              </Item>
            </Grid>
            <Grid item xs>
              <Item>
                <img src="alpha.png" alt="" />
                <p>Alpha Wallet</p>
              </Item>
            </Grid>
            <Grid item xs>
              <Item>
                <img src="enjin.png" alt="" />
                <p>Enjin Wallet</p>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div className="wallet_2">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            <Grid item xs>
              <Item>
                <img src="trust.jpg" alt="" />
                <p>Trust Wallet</p>
              </Item>
            </Grid>
            <Grid item xs>
              <Item>
                ,
                <img src="math.png" alt="" />
                <p>Math Wallet</p>
              </Item>
            </Grid>
            <Grid item xs>
              <Item>
                <img src="coinomi.png" alt="" />
                <p>Coinomi</p>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Container>
  );
}
