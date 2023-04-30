import React, { useState } from "react";
import { useTrail, animated } from "react-spring";
import "../style/Resume.css";

export function Resume() {
  const resumeContent = [
    <div>
      <div className="resume-header">
        <h2>EXPERIENCE</h2>
        <h6>
          <a
            href="https://docs.google.com/document/d/1pFqCxwR37b5dYWXmD8NAVhd3Uu94NOhNVQbu7xE4tZY/edit"
            target="_blank"
          >
            VIEW RESUME ON GOOGLE DOCS
          </a>
        </h6>
      </div>
      <h4>Web Developer // JEOG Resources // 04/2022 - Current</h4>
      <li>
        Development and maintenance of in-house ticketing systems, request
        access systems, and various other internal tools for teams across the
        company.
      </li>
      <li>
        Products built with C#/.NET backend, SQL database and Vue frontend with
        some projects in React.
      </li>
    </div>,
    <div>
      <h4>Software Engineer // JP Morgan Chase // 10/2021 - 04/2022</h4>
      <li>
        Development of API infrastructure supporting automated processes for
        auto-payments and collections. Big data collection, manipulation,
        organization, and storage through a series of Java microservices.{" "}
      </li>
      <li>
        DevOps maintenance of CI/CD pipeline built on Jenkins. Migration of
        applications from on premise platform to AWS.
      </li>
    </div>,
    <div>
      <h4>
        Lead Instructor - Software Engineering // Flatiron School // 06/2020 -
        10/2021
      </h4>
      <li>
        Facilitation of full stack React, Redux, & Rails course curriculum.
        Responsible for daily lectures, group coding activities, publishing
        assignments, and proctoring student testing. Assisted students in
        troubleshooting individual issues as well as understanding larger
        programming concepts.
      </li>
    </div>,
    <div>
      <h4>Product Designer & Scrum Master // Goco.io // 05/2019 - 04/2020</h4>
      <li>
        Spec creation with a heavy emphasis on design, laying out functionality
        and user experience for features on the product roadmap.
      </li>
      <li>
        Facilitation of the scrum process, tracking feature progress to
        completion and keeping lines of communication open between internal
        teams and external investors.
      </li>
    </div>,
    <div>
      <h4>Product Manager // Xola // 10/2016 - 05/2019</h4>
      <li>Feature research, documentation, lofi design and spec creation.</li>
      <li>
        Working with all relevant stakeholders to ensure features solve real
        problems and meet the needs of users.{" "}
      </li>
      <li>Grooming and management of product backlog and user feedback. </li>
      <li>Lead and facilitate scrum rituals.</li>
    </div>,
    <div>
      <h4>Lead Genius & Technical Trainer // Apple // 11/2012 - 10/2016</h4>
      <li>
        Responsible for a team of over eighty technicians, trainers, & admins.
        Lead and developed team members on an individual and group basis.
        Facilitated training courses and certified hundreds of technicians in
        both Apple hardware and software.
      </li>
    </div>,

    <h2>EDUCATION</h2>,

    <div>
      <li>
        <strong>Flatiron School</strong> - Fifteen Week Immersive Bootcamp: Full
        stack with React, Redux, & Ruby on Rails
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
    </div>,

    <h2>SKILLS</h2>,

    <div>
      <li>
        <strong>Technical:</strong> Java, Spark, Ruby on Rails, SQL, JavaScript,
        React, Redux, Vue, DevOps, CI/CD, automated QA, Cloud platform and on premise
        experience.
      </li>
      <li>
        <strong>Product & Project Management:</strong> Agile and Scrum implementation, backlog management, design/spec creation, product refinement, data analysis, training & coaching.
      </li>
    </div>,

    <h5>
      <a
        href="https://docs.google.com/document/d/1pFqCxwR37b5dYWXmD8NAVhd3Uu94NOhNVQbu7xE4tZY/edit"
        target="_blank"
      >
        VIEW RESUME ON GOOGLE DOCS
      </a>
    </h5>,
  ];

  const config = { mass: 5, tension: 2000, friction: 200 };
  const [toggle, set] = useState(true);
  const trail = useTrail(resumeContent.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : -100,
    marginBottom: toggle ? 24 : 0,
    from: { opacity: 0, x: -100, marginBottom: 0 },
  });

  return (
    <div className="resume">
      {trail.map(({ x, marginBottom, ...rest }, index) => (
        <animated.div
          key={resumeContent[index]}
          className="trails-text"
          style={{
            ...rest,
            transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
          }}
        >
          <animated.div style={{ marginBottom }}>
            {resumeContent[index]}
          </animated.div>
        </animated.div>
      ))}
    </div>
  );
}
