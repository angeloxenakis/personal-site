import React from "react";

export default function ResumeSecondary() {
  const resumeSections = [
    {
      title: "EDUCATION",
      bulletPoints: [
        {
          title: "Flatiron School",
          description: "Fifteen Week Immersive Bootcamp: Full stack with React, Redux, & Ruby on Rails",
        },
        {
          title: "PSM I",
          description: "Professional Scrum Master certification from www.scrum.org"
        },
        {
          title: "Liscened Teacher",
          description: "Certified in Texas, Oregon,California, Georgia, New York, and D.C."
        },
      ]
    },
    {
      title: "SKILLS",
      bulletPoints: [
        {
          title: "Technical",
          description: "Java, Spark, Ruby on Rails, SQL, JavaScript, React, Redux, DevOps, CI/CD, automated QA, Cloud platform and on premise experience"
        },
        {
          title: "Project & Product",
          description: "Agile and Scrum implementation,backlog management, design/spec creation, product refinement, data analysis, training & coaching."
        }
      ]
    }
  ]

  const renderResumeSections = () => {
    return resumeSections.map((section, idx) => {
      return (
        <div key={idx}>
          <h2>{section.title}</h2>
          {section.bulletPoints.map((sectionPoint, idx) => {
            return (
              <li><strong>{ sectionPoint.title }</strong> - {sectionPoint.description}</li>
            )
          })}
        </div>
      )
    })
  }
  return (
    <div>
      {renderResumeSections()}
    </div>
  )
}
