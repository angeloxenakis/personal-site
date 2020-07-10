import React, {useState} from 'react'
import { Fight } from '../assets/fight.jpeg'
import { useSpring, useTransition, useTrail, animated } from 'react-spring';
import { useHistory } from 'react-router'

export function About() {
    let history = useHistory()
    // const [toggle, set] = useState(false)
    // const topTransitions = useTransition(toggle, null, {
    //     from: { transform: 'translate3d(0,-200px,0)' },
    //     enter: { transform: 'translate3d(0,0px,0)' },
    //     leave: { transform: 'translate3d(0,-200px,0)' },
    // })


    // window.set = set

    const content = [
        <h1>Angelo Xenakis</h1>,
        <p className="large-text" onClick={() => history.push('/portfolio')}>Software &</p>, 
        <p className="large-text" onClick={() => history.push('/portfolio')}>Design &</p>, 
        <p className="large-text" onClick={() => history.push('/portfolio')}>Music &</p>, 
        <p className="large-text" onClick={() => history.push('/portfolio')}>Fighting &</p>,
        <p className="large-text"><a href="https://medium.com/@angeloxenakis">Articles</a></p>,
        <p className="small-text">And calling my blog posts articles because it feels more distinguished</p>
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
                {/* {topTransitions.map(({ item, key, props }) => 
                    // item ? <animated.div style={props}><h1>Angelo Xenakis</h1></animated.div> : null
                    <animated.div style={props}><h1>Angelo Xenakis</h1></animated.div>
                )}    */}
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
            <div className="tri-img">
                <div className="fight-img"></div>
            </div>
        </div>
    )
}