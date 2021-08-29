import React, {useState} from 'react'
import { useTrail, animated } from 'react-spring';
import { useHistory } from 'react-router'

export function Connect() {

    const connectContent = [
        <h1>CONNECT</h1>,
        <h4>ANGELOXENAKIS@GMAIL.COM</h4>,
        <h4><a href="https://www.linkedin.com/in/angeloxenakis/" target="_blank">LINKED IN</a></h4>,
        <h4><a href="https://github.com/angeloxenakis/" target="_blank">GITHUB</a></h4>,
        <h4><a href="https://medium.com/@angeloxenakis" target="_blank">MEDIUM</a></h4>,
        <h4><a href="https://instagram.com/angeloxenakis" target="_blank">INSTAGRAM</a></h4>,
    ]

    const config = { mass: 5, tension: 2000, friction: 200 }
    const [toggle, set] = useState(true)
    const connectTrail = useTrail(connectContent.length, {
        config,
        opacity: toggle ? 1 : 0,
        x: toggle ? 0 : -100,
        marginBottom: toggle ? 24 : 0,
        from: { opacity: 0, x: -100, marginBottom: 0 },
    })

    return (
        <div className="home">
            <div>
                {connectTrail.map(({ x, marginBottom, ...rest }, index) => (
                    <animated.div
                        key={connectContent[index]}
                        className="trails-text"
                        style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                        <animated.div style={{ marginBottom }}>{connectContent[index]}</animated.div>
                    </animated.div>
                ))} 
            </div>
        </div>
    )
}