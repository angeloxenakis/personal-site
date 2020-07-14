import React, {useState, useEffect} from 'react'
import { useSpring, useTransition, useTrail, animated } from 'react-spring';
import { useHistory } from 'react-router'

export function Header() {
    let history = useHistory()
    const content = [
        <div className="nav-btn" onClick={() => history.push('/')}>ABOUT THIS SHIT</div>,
        <div className="nav-btn" onClick={() => history.push('/connect')}>CONNECT</div>,
        <div className="nav-btn" onClick={() => history.push('/portfolio')}>PORTFOLIO</div>,
        <div className="nav-btn"><a href="https://docs.google.com/document/d/1pFqCxwR37b5dYWXmD8NAVhd3Uu94NOhNVQbu7xE4tZY/edit" target="_blank">RESUME</a></div>,
        <div className="nav-btn"><a href="https://medium.com/@angeloxenakis" target="_blank">BLOG</a></div>,
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


    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 620;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
    
        return () => window.removeEventListener("resize", handleWindowResize);
      }, []);

    return width < breakpoint ? 
        <div className="mobile-nav">
            <div className="home-btn"></div>
            <div className="connect-btn"></div>
            <div className="portfolio-btn"></div>
            <div className="resume-btn"></div>
            <div className="blog-btn"></div>
        </div> 
        :   
        <div className="nav-btns">
            {trail.map(({ x, marginBottom, ...rest }, index) => (
                <animated.div
                    key={content[index]}
                    className="trails-text"
                    style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                    <animated.div style={{ marginBottom }}>{content[index]}</animated.div>
                </animated.div>
            ))} 
        </div>;
}