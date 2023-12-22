import { useState } from "react";
import PricingCard from "./components/PricingCard";
import "./styles/PricingApp.css";

import './App.css'
function App() {
  
  const [selectMonthly, setSelectMonthly] = useState(true);
  console.log(selectMonthly);
  return (
    <>
    <div className="navbar">
    <img className="logo" src="https://www.clker.com/cliparts/b/f/j/P/w/j/purple-flame-logo-2-hi.png" width='50' alt="" />
    <button className="btn"><i class="fa-solid fa-building"></i>xyz enterprise</button>
    <i class="fa-solid fa-bell "></i>
    </div>
    <div className="PricingApp">
      <div className="app-container">
        {/* Header */}
        <header>
          <h1 className="header-topic">Choose a plan that's just right for you</h1>
          <div className="header-row">
            <p>Annually</p>
            <label className="price-switch">
              <input className="price-checkbox"
                onChange={() => {
                  setSelectMonthly((prev) => !prev);
                }}
                type="checkbox"
              />
              <div className="switch-slider"></div>
            </label>
            <p>Monthly</p>
          </div>
        </header>
        {/* Cards here */}
        <div className="pricing-cards">
          <PricingCard
            title="Basic"
            price={selectMonthly ? "$20.99/mo" : "$188.9/mo"}
            storage="60 GB Storage"
            users="5"
            sendUp="5"
          />
          <PricingCard
            title="Standard"
            price={selectMonthly ? "$34.99/mo" : "$349.9/mo"}
            storage="70 GB Storage"
            users="10"
            sendUp="10"
          />
          <PricingCard
            title="Premium"
            price={selectMonthly ? "$79.99/mo" : "$499.9/mo"}
            storage="90 GB Storage"
            users="20"
          />
        </div>
      </div>
    </div>
    
    </>
    
  );
}

export default App;