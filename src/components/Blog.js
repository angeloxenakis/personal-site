import React, {useState} from 'react'
import { useTrail, animated } from 'react-spring';
import { useHistory } from 'react-router'
import '../style/Blog.css';

export function Blog() {

    const blogContent = [
        <div className="blog-container">
            <a href="https://blog.usejournal.com/job-hunters-cookbook-6c033a295f38" target="_blank"><h1>JOB HUNTER'S COOKBOOK</h1></a>
            <div className="blog-hero">
                <a href="https://blog.usejournal.com/job-hunters-cookbook-6c033a295f38" target="_blank">
                    <img className="blog-hero-img" src="https://miro.medium.com/max/3904/1*BiHCImmS4dviAD_JXlCplQ.png"/>
                </a>
                <div className="blog-hero-text">
                    <p>
                        The Job Hunter's Cookbook is a longform guide to job searching techniques. This isn't some sale of snake 
                        oil, they are the tangible things I've done in my own job searches that I have found to work. 
                        <a href="https://blog.usejournal.com/job-hunters-cookbook-6c033a295f38" target="_blank"> Click here to check it out on Medium.</a>
                    </p>
                </div>
            </div>
        </div>,
        <hr></hr>,
        <div className="blog-container">
            <h2>PROFESSIONAL</h2>
            <div className="blog-index">
                <div className="blog-tile">
                    <a href="https://medium.com/@angeloxenakis/software-engineers-the-modern-typists-3ee96c99a4c4" target="_blank"><h4>Software Engineers: The Modern Typists</h4></a>
                    <a href="https://medium.com/@angeloxenakis/software-engineers-the-modern-typists-3ee96c99a4c4" target="_blank">
                        <h4><img src="https://miro.medium.com/max/2700/1*RriXsb60otceQCh2pfPTEw.jpeg"/></h4>
                    </a>
                    <p>An analagous comparison of the workforce's resistance to learning how to type in the 1920's, with the resistance to learning how to code today.</p>
                </div>
                <div className="blog-tile">
                    <a href="https://medium.com/@angeloxenakis/a-beginners-tale-of-over-engineering-9a3a4a3c0fa2" target="_blank"><h4>A Beginner's Tale of Over Engineering</h4></a>
                    <a href="https://medium.com/@angeloxenakis/a-beginners-tale-of-over-engineering-9a3a4a3c0fa2" target="_blank">
                        <img src="https://miro.medium.com/max/1658/1*2azqR0AODUCgsgQBY4H9rg.png"/>
                    </a>
                    <p>Reflections on early advice from a senior engineer.</p>
                </div>
            </div>
        </div>,
        <div className="blog-container">
            <h2>COMBAT SPORTS</h2>
            <div className="blog-index">
                <div className="blog-tile">
                    <a href="https://angeloxenakis.medium.com/the-science-of-low-kicks-part-1-a4c853272671" target="_blank"><h4>The Science of Low Kicks: Part 1</h4></a>
                    <a href="https://angeloxenakis.medium.com/the-science-of-low-kicks-part-1-a4c853272671" target="_blank">
                        <h4><img src="https://miro.medium.com/max/3362/1*BIYQdGc73dxhRpSFNReB1A.jpeg"/></h4>
                    </a>
                    <p>A technical breakdown of how kicking to the legs can be an effective path to victory.</p>
                </div>
            </div>
        </div>
    ]

    const config = { mass: 5, tension: 2000, friction: 200 }
    const [toggle, set] = useState(true)
    const blogTrail = useTrail(blogContent.length, {
        config,
        opacity: toggle ? 1 : 0,
        x: toggle ? 0 : -100,
        marginBottom: toggle ? 24 : 0,
        from: { opacity: 0, x: -100, marginBottom: 0 },
    })


    return (
        <div className="engineering-portfolio">
            {blogTrail.map(({ x, marginBottom, ...rest }, index) => (
                <animated.div
                    key={blogContent[index]}
                    className="trails-text"
                    style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                    <animated.div style={{ marginBottom }}>{blogContent[index]}</animated.div>
                </animated.div>
            ))}           
        </div>
    )
}