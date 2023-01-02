import React from "react";

export default function ResumeHero() {
  const resumeJobs = [
    {
      headline: "Software Engineer // JP Morgan Chase // 10/2021 - Current",
      bulletPoints: [
        "API infrastructure supporting automated processes for auto-payments and collections.",
        "Big data collection, manipulation, organization, and storage.",
        "DevOps maintenance of custom CI/CD pipeline library built on Jenkins."
      ],
    },
    {
      headline: "Lead Instructor - Software Engineering // Flatiron School // 06/2020 - 10/2021",
      bulletPoints: [
        "Delivery of lectures and facilitation of fast paced code bootcamp curriculum around full stack React, Redux, & Rails.",
        "Plan mid-size software projects and execute them on a tight timeframe.",
        "Assist students in troubleshooting issues and understanding larger concepts.",
      ],
    },
    {
      headline: "Product Designer & Scrum Master // Goco.io // 05/2019 - 04/2020",
      bulletPoints: [
        "Create specs to guide functionality and user experience for reference when developing features.",
        "Facilitate the Scrum process and track progress. Identify and remove impediments to productivity.",
        "Write and maintain automated testing in the frontend using Javascript & Cypress framework."
      ],
    },
    {
      headline: "Product Manager // Xola // 10/2016 - 05/2019",
      bulletPoints: [
        "Manage product backlog and prioritize sprint backlog. Document scope of upcoming builds and work closely with engineers and design team to provide value and meet the team’s deliverables.",
        "Contributed to automated marketing tools used to increase client revenue.",
      ],
    },
    {
      headline: "Lead Genius & Technical Trainer // Apple // 11/2012 - 10/2016",
      bulletPoints: [
        "Facilitated technician training courses for both hardware and software, culminating with three certification tests in order to become a Macintosh certified technician. Certified hundreds of students for seven teams in the Houston market.",
        "Responsible for a team of eighty technicians, trainers, & admins. Lead and developed team members on an individual basis as well as promoted healthy and productive culture.",
      ]
    }
  ];

  const renderJobs = () => {
    return resumeJobs.map((job, idx) => {
      return (
        <div className="resume-job">
          <h4>{ job.headline }</h4>
          {job.bulletPoints.map((jobPoint, idx) => {
            return <li>{ jobPoint }</li>
          })}
        </div>
      )
    })
  }

  return (
    <div>
      <h2>EXPERIENCE</h2>
      {renderJobs()}
    </div>
  )
}
