import React, {useState} from 'react'
import { useTrail, animated } from 'react-spring';
import { useHistory } from 'react-router'
import '../style/NavBar.css';

export function NavBar() {
    let history = useHistory()
    const content = [
        <div className="nav-btn" onClick={() => history.push('/')}><h7>HOME</h7></div>,
        <div className="nav-btn" onClick={() => history.push('/portfolio')}><h7>PORTFOLIO</h7></div>,
        <div className="nav-btn" onClick={() => history.push('/resume')}><h7>RESUME</h7></div>,
        <div className="nav-btn" onClick={() => history.push('/blog')}><h7>BLOG</h7></div>,
        <div className="nav-btn" onClick={() => history.push('/connect')}><h7>CONNECT</h7></div>,
    ]

    const config = { mass: 5, tension: 2000, friction: 200 }
    const [toggle, set] = useState(true)
    const trail = useTrail(content.length, {
        config,
        opacity: toggle ? 1 : 0,
        x: toggle ? 0 : -100,
        marginBottom: toggle ? 0 : 0,
        from: { opacity: 0, x: -100, marginBottom: 0 },
    })


    return (
        <div className="nav">
            {trail.map(({ x, marginBottom, ...rest }, index) => (
                <animated.div
                    key={content[index]}
                    className="trails-text"
                    style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                    <animated.div style={{ marginBottom }}>{content[index]}</animated.div>
                </animated.div>
            ))} 
        </div>
    )
}