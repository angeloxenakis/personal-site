import React, {useState} from 'react'
import { useSpring, useTransition, useTrail, animated } from 'react-spring';
import { useHistory } from 'react-router'

export function About() {
    let history = useHistory()

    const heroTitle = [
        <h1>ANGELO XENAKIS</h1>
    ]

    const heroDetails = [
        <h4 onClick={() => history.push('/portfolio')}>SOFTWARE ENGINEER</h4>,
        <h4 onClick={() => history.push('/portfolio')}>DESIGNER & ARTIST</h4>,
        <h4>MUSIC MAKING</h4>,
        <h4>FIGHT TRAINING</h4>,
    ]

    const config = { mass: 5, tension: 2000, friction: 200 }
    const [toggle, set] = useState(true)

    const titleTrail = useTrail(heroDetails.length, {
        config,
        opacity: toggle ? 1 : 0,
        x: toggle ? 0 : -100,
        marginBottom: toggle ? 24 : 0,
        from: { opacity: 0, x: -100, marginBottom: 0 },
    })

    const detailsTrail = useTrail(heroDetails.length, {
        config,
        opacity: toggle ? 1 : 0,
        x: toggle ? 0 : -100,
        marginBottom: toggle ? 24 : 0,
        from: { opacity: 0, x: -100, marginBottom: 0 },
    })

    return (
        <>
            <div className="hero">
                <div className="about">

                    {titleTrail.map(({ x, marginBottom, ...rest }, index) => (
                        <animated.div
                            key={heroTitle[index]}
                            className="trails-text"
                            style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                            <animated.div style={{ marginBottom }}>{heroTitle[index]}</animated.div>
                        </animated.div>
                    ))} 

                    {detailsTrail.map(({ x, marginBottom, ...rest }, index) => (
                        <animated.div
                            key={heroDetails[index]}
                            className="trails-text"
                            style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                            <animated.div style={{ marginBottom }}>{heroDetails[index]}</animated.div>
                        </animated.div>
                    ))} 

 
                </div>
            </div>
        </>
    )
}