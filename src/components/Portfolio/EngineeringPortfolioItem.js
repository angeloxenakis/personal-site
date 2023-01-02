import React from "react";
import "../../style/EngineeringPortfolio.css";

export default function EngineeringPortfolioItem({
  title,
  techStack,
  videoUrl,
  image,
  description,
  gitHubUrl,
  hostUrl,
  isLast,
}) {
  const renderHero = () => {
    if (videoUrl) {
      return (
        <iframe
          className="video"
          src={videoUrl}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      );
    }
    // Need to add condition for rendering an image if no video is present here
  };

  const renderDivider = () => {
    if (!isLast) return <hr></hr>
  }

  return (
    <div className="eng-tile">
      <h2>{title}</h2>
      <h5>{techStack}</h5>
      <div className="eng-tile-content">
        <div className="eng-tile-hero">
          { renderHero() }
        </div>
        <div className="eng-tile-info">
          <p>{description}</p>
          <br></br>
          <a href={gitHubUrl} target="_blank">
            GitHub
          </a>
        </div>
      </div>
     { renderDivider() }
    </div>
  );
}
