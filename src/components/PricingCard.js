import React from "react";
import "../styles/PricingCard.css";
import Sidebar from "./Sidebar";


const PricingCard = ({ title, price, storage, users, sendUp }) => {
  return (
    
    <div className="PricingCard">
      <Sidebar />
      <header>
        <p className="card-title" >{title}</p>
        <h1 className="card-price">{price}</h1>
        <button className="card-btn">Get started <span><i class="fa-solid fa-arrow-right"></i></span></button>
      </header>
      {/* features here */}
      <div className="card-features">
        <div className="card-storage"><i className="icon" class="fa-regular fa-hard-drive"></i>{storage}</div>
        <div className="card-users-allowed"><i class="fa-solid fa-user"></i>{users} users in total</div>
        <div className="card-send-up">Send up to {sendUp}</div>
      </div>
      {/* <button className="card-btn">READ MORE</button> */}
      <a href="">Explore More Features<i class="fa-solid fa-arrow-right"></i></a>
    </div>
  );
};

export default PricingCard;