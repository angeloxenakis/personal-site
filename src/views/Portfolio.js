import React, { useState } from "react";
import { EngineeringPortfolio } from "../components/Portfolio/EngineeringPortfolio";
import { DesignPortfolio } from "../components/DesignPortfolio";
import { MusicPortfolio } from "../components/MusicPortfolio";
import "../style/Portfolio.css";

export function Portfolio() {
  const [portfolioOption, setPortfolioOption] = useState("engineering");

  const renderPortfolio = () => {
    if (portfolioOption === "engineering") {
      return <EngineeringPortfolio />;
    } else if (portfolioOption === "design") {
      return <DesignPortfolio />;
    } else if (portfolioOption === "music") {
      return <MusicPortfolio />;
    }
  };

  return (
    <div className="portfolio">
      {renderPortfolio()}
    </div>
  );
}
