import "./App.css";
import ContactNft from "./components/contactNft/ContactNft";
import MyNavbar from "./components/Navbar";
import { BrowserRouter, Routes} from "react-router-dom";


function App() {


  return (
    <div className="App" 
       
   >
      <BrowserRouter>
        <MyNavbar />
        <ContactNft/>
       
        <Routes>
          
         
        
        </Routes>

     
      </BrowserRouter>
      
    </div>
  );
}

export default App;
