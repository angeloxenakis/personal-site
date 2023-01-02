import React, { useState } from "react";
import EngineeringPortfolioItem from "./EngineeringPortfolioItem";
import "../../style/EngineeringPortfolio.css";

export function EngineeringPortfolio() {
  const engineeringPortFolioItems = [
    {
      title: "XENLOOP-5T",
      techStack: "React",
      videoUrl: "https://www.youtube.com/embed/dsOUQrqS-Ws",
      image: null,
      description:
        "The XenLoop-5T is a software audio loop station designed to enhance live musical performance. Record and playback audio on 5 separate tracks and control individual track volume and effects.",
      gitHubUrl: "https://github.com/angeloxenakis/XenLoop-5T",
      hostUrl: null,
    },
    {
      title: "THIS SITE",
      techStack: "React",
      videoUrl: null,
      image: null,
      description:
        "This site itself is built and styled 100% by me using React.js an native CSS. No use of any styling library or prebuilt components.The only library it does take advantage of is the React Spring library for the animation transistions, which render the elements through a function. Responsive design that is mobile friendly.",
      gitHubUrl: "https://github.com/angeloxenakis/personal-site",
      hostUrl: "https://angeloxenakis.com",
    },
  ];

  const isLast = (portfolioItem) => {
    return engineeringPortFolioItems.indexOf(portfolioItem) + 1 === engineeringPortFolioItems.length
  }

  const renderPortfolioItems = () => {
    return engineeringPortFolioItems.map((portfolioItem, idx) => {
      return (
        <EngineeringPortfolioItem
          title={portfolioItem.title}
          techStack={portfolioItem.techStack}
          videoUrl={portfolioItem.videoUrl}
          image={portfolioItem.image}
          description={portfolioItem.description}
          gitHubUrl={portfolioItem.gitHubUrl}
          hostUrl={portfolioItem.hostUrl}
          isLast={ isLast(portfolioItem) }
        />
      );
    });
  };

  return <div className="engineering-portfolio">{renderPortfolioItems()}</div>;
}
