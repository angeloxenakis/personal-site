import React from "react"
import "../../style/NavBar.css";
export default function Navbtn({ navOption }) {

    return (
        <div className="nav-btn">{navOption.text}</div>
    )
}