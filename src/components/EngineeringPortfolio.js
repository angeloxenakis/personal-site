import React, {useState} from 'react'
import { useTrail, animated } from 'react-spring';
import { useHistory } from 'react-router'
import '../style/EngineeringPortfolio.css';

export function EngineeringPortfolio() {

    const content = [
        <div className="eng-tile">
            <h2>XENLOOP-5T</h2>
            <h5>React, Node</h5>
            <div className="eng-tile-content">
                <div className="eng-tile-hero">
                    <iframe className="video" src="https://www.youtube.com/embed/dsOUQrqS-Ws" frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>
                </div>
                <div className="eng-tile-info">
                    <p>
                        The XenLoop-5T is a software audio loop station designed to enhance live musical performance. Record and 
                        playback audio on 5 separate tracks and conrtol individual track volume and effects.
                    </p>
                    <br></br>
                    <a href="https://github.com/angeloxenakis/mars-weather-app" target="_blank">GitHub</a>
                </div>
            </div>
        </div>,
        <hr></hr>,
        <div className="eng-tile">
            <h2>THIS SITE</h2>
            <h5>React</h5>
            <div className="eng-tile-content">
                <div className="eng-tile-hero">
                    <iframe className="video" src="https://www.youtube.com/embed/dsOUQrqS-Ws" frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>
                </div>
                <div className="eng-tile-info">
                    <p>
                        This site itself is built and styled 100% by me using React.js and native CSS. No use of any styling library
                        or prebuilt components. The only library it does take advantage of is the React Spring library for the animation
                        transistions, which render the elements through a function. Responsive design that is mobile friendly.
                    </p>
                    <br></br>
                    <a href="https://github.com/angeloxenakis/mars-weather-app" target="_blank">GitHub</a>
                </div>
            </div>
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
        <div className="engineering-portfolio">
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