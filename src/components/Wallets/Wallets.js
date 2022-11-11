// import * as React from 'react';
// import "./Wallets.css"
// import Heading from "../Heading/Heading"
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import ButtonBase from '@mui/material/ButtonBase';
// import Typography from '@mui/material/Typography';



// const imageWallet = [
//   {
//     url: 'metamask.png',
//     title: 'MetaMask',
//     width: '25%',
//   },
//   {
//     url: 'coinbase.png',
//     title: 'Coinbase Wallet',
//     width: '25%',
//   },
//   {
//     url: 'alpha.png',
//     title: 'AlphaWallet',
//     width: '25%',
//   },
//   {
//     url: 'enjin.png',
//     title: 'Enjin Wallet',
//     width: '25%',
//   },
//   {
//     url: 'trust.jpg',
//     title: ' Trust Wallet',
//     width: '30%',
//   },
//   {
//     url: 'math.png',
//     title: 'Math Wallet',
//     width: '30%',
//   },
//   {
//     url: 'coinomi.png',
//     title: 'Coinomi',
//     width: '30%',
//   },
// ];

// const ImageButton = styled(ButtonBase)(({ theme }) => ({
//   position: 'relative',
//   height: 200,
//   [theme.breakpoints.down('sm')]: {
//     width: '100% !important', // Overrides inline-style
//     height: 100,
//   },
//   '&:hover, &.Mui-focusVisible': {
//     zIndex: 1,
//     '& .MuiImageBackdrop-root': {
//       opacity: 0.15,
//     },
//     '& .MuiImageMarked-root': {
//       opacity: 0,
//     },
//     '& .MuiTypography-root': {
//       border: '4px solid currentColor',
//     },
//   },
// }));

// const ImageSrc = styled('span')({
//   position: 'absolute',
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center 40%',
// });

// const Image = styled('span')(({ theme }) => ({
//   position: 'absolute',
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   color: theme.palette.common.white,
// }));

// const ImageBackdrop = styled('span')(({ theme }) => ({
//   position: 'absolute',
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   backgroundColor: theme.palette.common.black,
//   opacity: 0.4,
//   transition: theme.transitions.create('opacity'),
// }));

// const ImageMarked = styled('span')(({ theme }) => ({
//   height: 3,
//   width: 18,
//   backgroundColor: theme.palette.common.white,
//   position: 'absolute',
//   bottom: -2,
//   left: 'calc(50% - 9px)',
//   transition: theme.transitions.create('opacity'),
// }));

// export default function ButtonBases() {
//   return (
//     <div className="wallet">
//       <Heading title={"NFTs Wallets"} />
//       <Box
//         sx={{ display: "flex", flexWrap: "wrap", minWidth: 300, width: "100%" }}
//       >
//         {imageWallet.map((image) => (
//           <ImageButton
//             focusRipple
//             key={image.title}
//             style={{
//               width: image.width,
//             }}
//           >
//             <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
//             <ImageBackdrop className="MuiImageBackdrop-root" />
//             <Image>
//               <Typography
//                 component="span"
//                 variant="subtitle1"
//                 color="inherit"
//                 sx={{
//                   position: "relative",
//                   p: 4,
//                   pt: 2,
//                   pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
//                 }}
//               >
//                 {image.title}
//                 <ImageMarked className="MuiImageMarked-root" />
//               </Typography>
//             </Image>
//           </ImageButton>
//         ))}
//       </Box>
//     </div>
//   );
// }
import * as React from "react";
import { styled } from "@mui/material/styles";
import "./Wallets.css"
import Heading from "../Heading/Heading"
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from '@mui/material/Container';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function AutoGrid() {
  return (
    <Container>
      <Heading title ={"Nft Wallets"}/>
      <div className="wallet_1">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            <Grid item xs >
              <Item >
                <img src="metamask.png" alt="" />
              </Item>
            </Grid>
            <Grid item xs>
              <Item>
                <img src="coinbase.png" alt="" />
              </Item>
            </Grid>
            <Grid item xs>
              <Item>
                <img src="alpha.png" alt="" />
              </Item>
            </Grid>
            <Grid item xs>
              <Item>
                <img src="enjin.png" alt="" />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div className="wallet_2" >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            <Grid item xs>
              <Item>
                <img src="trust.jpg" alt="" />
              </Item>
            </Grid>
            <Grid item xs>
              <Item>,
                <img src="math.png" alt="" />
              </Item>
            </Grid>
            <Grid item xs>
              <Item>
                <img src="coinomi.png" alt="" />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Container>
  );
}