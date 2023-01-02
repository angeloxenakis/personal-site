import React from "react";
import ResumeHero from "../components/Resume/ResumeHero"
import ResumeSecondary from "../components/Resume/ResumeSecondary"
import "../style/Resume.css";

export function Resume() {
  return (
    <div className="resume">
      <ResumeHero />
      <ResumeSecondary />
      {/* <h2>EDUCATION</h2>
      <div>
        <li>
          <strong>Flatiron School</strong> - Fifteen Week Immersive Bootcamp:
          Full stack with React, Redux, & Ruby on Rails
        </li>
        <li>
          <strong>Austin Coding Academy</strong> - Eight Week Bootcamp: Intro to
          Frontend
        </li>
        <li>
          <strong>PSM I</strong> - Professional Scrum Master certification from
          www.scrum.org
        </li>
        <li>
          <strong>Licensed Teacher</strong> - Certified in Texas, Oregon,
          California, Georgia, New York, and D.C.
        </li>
      </div>
      <h2>SKILLS</h2>
      <div>
        <li>
          <strong>Technical:</strong> Java, Spark, Ruby on Rails, SQL,
          JavaScript, React, Redux, DevOps, CI/CD, automated QA, Cloud platform
          and on premise experience
        </li>
        <li>
          <strong>Project Management:</strong> Agile and Scrum implementation,
          backlog management, design/spec creation, product refinement, data
          analysis, training & coaching.
        </li>
      </div> */}
      <h5>
        <a
          href="https://docs.google.com/document/d/1pFqCxwR37b5dYWXmD8NAVhd3Uu94NOhNVQbu7xE4tZY/edit"
          target="_blank"
        >
          VIEW RESUME ON GOOGLE DOCS
        </a>
      </h5>
    </div>
  );
}
