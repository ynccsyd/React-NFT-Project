import React from "react"
import "./button.css"

const Button = (props) => {
    const {btnType, btnText, bntOnClick, customClass}=props;
  return (
    <div className={`${
        btnType=== "PRIMARY"
            ? `button primary-btn ${customClass}`
            : `button secondary-btn ${customClass}`
        }`}
        onClick
    >
        {btnText}
    </div>
  )
}
export default Button