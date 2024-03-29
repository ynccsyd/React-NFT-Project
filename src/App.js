import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import Explore from './Pages/Explore/Explore';
import BuyNft from './Pages/BuyNft/BuyNft';
import NotFound from "./Pages/NotFound/NotFound"



function App() {


  return (
    <React.Fragment>
			
			<BrowserRouter>
				<Routes>
					<Route element={<HomePage/>} path="/" />
					<Route element={<Explore/>} path="/explore" />
					<Route element={<BuyNft/>} path="/buynft" />
					<Route  element={<NotFound/>} path="/404" />
          			
					
				</Routes>
			</BrowserRouter>

		
		</React.Fragment>
	
  );
}

export default App;


