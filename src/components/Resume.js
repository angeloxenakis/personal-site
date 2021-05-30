import React, {useState} from 'react'
import { useSpring, useTransition, useTrail, animated } from 'react-spring';
import { useHistory } from 'react-router'

export function Resume() {

    const content = [
        <div className="resume-header">
            <h6><a href="https://docs.google.com/document/d/1pFqCxwR37b5dYWXmD8NAVhd3Uu94NOhNVQbu7xE4tZY/edit" target="_blank">VIEW RESUME ON GOOGLE DOCS</a></h6>
        </div>,
        <div>
            <h2>EXPERIENCE</h2>
            <h4>Lead Instructor - Software Engineering  // Flatiron School // 06/2020 - Current</h4>
            <li>Delivery of lectures and facilitation of fast paced code bootcamp curriculum around full stack React, Redux, & Rails.</li>
            <li>Plan mid-size software projects and execute them on a tight timeframe.</li>
            <li>Assist students in troubleshooting issues and understanding larger concepts.</li>
        </div>,
        <div>
            <h4>Product Designer & Scrum Master // Goco.io // 06/2019 - 02/2020</h4>
            <li>Create specs to guide functionality and user experience for reference when developing features.</li>
            <li>Facilitate the Scrum process and track progress. Identify and remove impediments to productivity.</li>
            <li>Write and maintain automated testing in the frontend using Javascript & Cypress framework. </li>
        </div>,
        <div>
            <h4>Product Manager // Xola // 10/2016 - 06/2019</h4>
            <li>Manage product backlog and prioritize sprint backlog. Document scope of upcoming builds and work closely with engineers and design team to provide value and meet the team’s deliverables.</li>
            <li>Contributed to automated marketing tools used to increase client revenue.</li>
        </div>,
        <div>
            <h4>Lead Genius & In Store Trainer // Apple // 11/2012 - 10/2016</h4>
            <li>Facilitated technician training courses for both hardware and software, culminating with three certification tests in order to become a Macintosh certified technician. Certified hundreds of students for seven teams in the Houston market.</li>
            <li>Responsible for a team of eighty technicians, trainers, & admins. Lead and developed team members on an individual basis as well as promoted healthy and productive culture. </li>
        </div>,

        <h2>EDUCATION</h2>,
        
        <div>
            <li>Flatiron School - Fifteen Week Immersive Bootcamp: Full stack with React, Redux, & Ruby on Rails</li>
            <li>Austin Coding Academy - Eight Week Bootcamp: Intro to Frontend</li>
            <li>PSM I - Professional Scrum Master certification from www.scrum.org</li>
        </div>,


        <h2>SKILLS</h2>,
                
        <div>
            <li>Technical: HTML/CSS/JS, Ruby on Rails, React, Redux, NodeJS, SQL/GraphQL, Automated QA, Continuous Integration.</li>
            <li>UX/UI & Product: Backlog management, Sketch, Figma, Adobe Suite,  style guides, icon sets, spec creation, hifi designs.</li>
            <li>Project Management:  Agile & Scrum, data analysis, leading & coaching, JIRA, Wrike, Trello, Aha!</li>
            <li>Leadership: Teaching & Training, coaching, personal development, performance management.</li>
        </div>,
    
        <h5><a href="https://docs.google.com/document/d/1pFqCxwR37b5dYWXmD8NAVhd3Uu94NOhNVQbu7xE4tZY/edit" target="_blank">VIEW RESUME ON GOOGLE DOCS</a></h5>
    ]

    const config = { mass: 5, tension: 2000, friction: 200 }
    const [toggle, set] = useState(true)
    const trail = useTrail(content.length, {
        config,
        opacity: toggle ? 1 : 0,
        x: toggle ? 0 : -100,
        marginBottom: toggle ? 24 : 0,
        from: { opacity: 0, x: -100, marginBottom: 0 },
    })


    return (
        <div className="resume">
            <div className="trails-main">
                <div>
                    {trail.map(({ x, marginBottom, ...rest }, index) => (
                        <animated.div
                            key={content[index]}
                            className="trails-text"
                            style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                            <animated.div style={{ marginBottom }}>{content[index]}</animated.div>
                        </animated.div>
                    ))} 
                </div>
            </div>
        </div>
    )
}