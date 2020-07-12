import React, {useState} from 'react'
import { useSpring, useTransition, useTrail, animated } from 'react-spring';
import { useHistory } from 'react-router'

export function Connect() {

    const content = [
        <h1>Connect</h1>,
        <p className="large-text"><a href="https://www.linkedin.com/in/angeloxenakis/" target="_blank">Linked In &</a></p>,
        <p className="large-text"><a href="https://github.com/angeloxenakis/" target="_blank">GitHub &</a></p>,
        <p className="large-text"><a href="https://medium.com/@angeloxenakis" target="_blank">Medium &</a></p>,
        <p className="large-text"><a href="https://dribbble.com/AngeloTheThird" target="_blank">Dribbble &</a></p>,
        <p className="large-text"><a href="https://behance.com" traget="_blank">Behance</a></p>,
        // <p className="large-text"><a href="https://medium.com/@angeloxenakis">YouTube</a></p>,
        // <p className="large-text"><a href="https://medium.com/@angeloxenakis">Spotify</a></p>,
        // <p className="large-text"><a href="https://medium.com/@angeloxenakis">Apple Music</a></p>,
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
            <hr></hr>
        </div>
    )
}