import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './components/Pages/HomePage/HomePage';
import Explore from './components/Pages/Explore/Explore';
import BuyNft from './components/Pages/BuyNft/BuyNft';




function App() {


  return (
    <React.Fragment>
			<BrowserRouter>
				<Routes>
					<Route element={<HomePage/>} path="/" />
					<Route element={<Explore/>} path="/explore" />
					<Route element={<BuyNft/>} path="/buynft" />
				
					
				</Routes>
			</BrowserRouter>

		
		</React.Fragment>
	
  );
}

export default App;


