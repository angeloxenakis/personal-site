import React, {useState} from 'react'
import { useSpring, useTransition, useTrail, animated } from 'react-spring';
import { useHistory } from 'react-router'

export function Connect() {

    const content = [
        <h1>CONNECT</h1>,
        <h4><a href="https://www.linkedin.com/in/angeloxenakis/" target="_blank">LINKED IN</a></h4>,
        <h4><a href="https://github.com/angeloxenakis/" target="_blank">GITHUB</a></h4>,
        <h4><a href="https://medium.com/@angeloxenakis" target="_blank">MEDIUM</a></h4>,
        <h4><a href="https://medium.com/@angeloxenakis" target="_blank">INSTAGRAM</a></h4>,
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
        <div className="about">
            <div className="hero">
                <div className="bio">
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
            </div>
        </div>
    )
}