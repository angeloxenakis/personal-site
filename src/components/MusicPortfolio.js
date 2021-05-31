import React, {useState} from 'react'
import { useSpring, useTransition, useTrail, animated } from 'react-spring';
import { useHistory } from 'react-router'

export function MusicPortfolio() {

    const content = [
        <div className="portfolio-header">
            <h2>MUSIC PORTFOLIO</h2>
        </div>
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