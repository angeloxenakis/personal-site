import React, {useState} from 'react'
import { useTrail, animated } from 'react-spring';
import { useHistory } from 'react-router'
import '../style/Home.css';

export function Home() {
    let history = useHistory()

    const homeDetails = [
        <h1>ANGELO XENAKIS</h1>,
        <h4>SOFTWARE ENGINEER</h4>,
        <h4>FULL STACK INSTRUCTOR</h4>,
        <h4>DESIGNER & ARTIST</h4>,
        <h4>HOBBYIST MUSICIAN</h4>,
    ]

    const config = { mass: 5, tension: 2000, friction: 200 }
    const [toggle, set] = useState(true)
    const detailsTrail = useTrail(homeDetails.length, {
        config,
        opacity: toggle ? 1 : 0,
        x: toggle ? 0 : -100,
        marginBottom: toggle ? 24 : 0,
        from: { opacity: 0, x: -100, marginBottom: 0 },
    })

    return (
        <>
            <div className="home">
                {detailsTrail.map(({ x, marginBottom, ...rest }, index) => (
                    <animated.div
                        key={homeDetails[index]}
                        className="trails-text"
                        style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                        <animated.div style={{ marginBottom }}>{homeDetails[index]}</animated.div>
                    </animated.div>
                ))} 
            </div>
        </>
    )
}