import {Link} from "react-router-dom"
import "./Navigation.css";
import React, { useEffect, useState, useContext } from "react";
import { TrackingContext } from "../../conetxt/track";

const Navigation = ()=>{
    const { currentUser, connectWallet } = useContext(TrackingContext);
  return (
  
    <nav>
        <ul>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/Services">Services</Link>
            </li>
            <li>
            <button
                onClick={() => connectWallet()}>
                Connect Wallet
              </button>
            </li>
            
        </ul>
    </nav>
   
  )
}
export default Navigation;