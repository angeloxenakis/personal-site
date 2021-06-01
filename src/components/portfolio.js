import React, {useState} from 'react'
import { useSpring, useTransition, useTrail, animated } from 'react-spring';
import { useHistory } from 'react-router'
import { EngineeringPortfolio } from './EngineeringPortfolio'
import { DesignPortfolio } from './DesignPortfolio'
import { MusicPortfolio } from './MusicPortfolio'
import '../style/Portfolio.css';


export function Portfolio() {

    const [portfolioOption, setPortfolio] = useState("engineering")

    const content = [
        // <div className="portfolio-header">
        //     <button className="btn" onClick={(e) => handleSelect("design", e)}>DESIGN</button>
        //     <button className="selected-btn" onClick={(e) => handleSelect("engineering", e)}>ENGINEERING</button>
        //     <button className="btn" onClick={(e) => handleSelect("music", e)}>MUSIC</button>
        // </div>
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

    const handleSelect = (selectedPortfolio, e) => {
        if (selectedPortfolio === "engineering") {
            e.target.parentElement.childNodes[0].className = "btn"
            e.target.parentElement.childNodes[1].className = "selected-btn"
            e.target.parentElement.childNodes[2].className = "btn"
        } else if (selectedPortfolio === "design") {
            e.target.parentElement.childNodes[0].className = "selected-btn"
            e.target.parentElement.childNodes[1].className = "btn"
            e.target.parentElement.childNodes[2].className = "btn"
        } else if (selectedPortfolio === "music") {
            e.target.parentElement.childNodes[0].className = "btn"
            e.target.parentElement.childNodes[1].className = "btn"
            e.target.parentElement.childNodes[2].className = "selected-btn"
        }
        setPortfolio(selectedPortfolio)
        console.log(e.target.parentElement.childNodes[0].className)
    }

    const renderPortfolio = () => {
        if (portfolioOption === "engineering") {
            return <EngineeringPortfolio/>
        } else if (portfolioOption === "design") {
            return <DesignPortfolio/>
        } else if (portfolioOption === "music") {
            return <MusicPortfolio/>
        }
    }

    return (
        <>
            <div className="portfolio">
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
                {renderPortfolio()}
            </div>
        </>
    )
}