import React from "react"
import { useContext } from "react" 
import { BsFillMoonStarsFill } from "react-icons/bs";
import { themeContext } from "../../context"
// import { useContext } from "react";
// import { themeContext } from "./context";


const Dark = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = () => {
   
    theme.dispatch({ type: "toggle" });
  };
  return (
    
    <div onClick={handleClick}>
      <BsFillMoonStarsFill
            onClick={() => Dark(!darkMode)}
            className=" cursor-pointer text-2xl"
        />

    </div>
  );
};

export default Dark;