import React, {useState} from 'react'
import { useTrail, animated } from 'react-spring';
import { useHistory } from 'react-router'
import '../style/NavBar.css';

export function NavBar() {
    let history = useHistory()
    const content = [
        <div className="nav-btn"><h7 onClick={() => history.push('/')}>HOME</h7></div>,
        <div className="nav-btn"><h7 onClick={() => history.push('/portfolio')}>PORTFOLIO</h7></div>,
        <div className="nav-btn"><h7 onClick={() => history.push('/resume')}>RESUME</h7></div>,
        <div className="nav-btn"><h7 onClick={() => history.push('/blog')}>BLOG</h7></div>,
        <div className="nav-btn"><h7 onClick={() => history.push('/connect')}>CONNECT</h7></div>,
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