import React, {useState} from 'react'
import { useTrail, animated } from 'react-spring';
import { useHistory } from 'react-router'
import '../style/EngineeringPortfolio.css';

export function EngineeringPortfolio() {

    const content = [
        <div className="eng-tile">
            <h2>MARS WEATHER APP</h2>
            <h5>React, Redux, Ruby on Rails</h5>
            <div className="eng-tile-content">
                <div className="eng-tile-hero">
                    <iframe className="video" src="https://www.youtube.com/embed/dsOUQrqS-Ws" frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>
                </div>
                <div className="eng-tile-info">
                    <p>
                        The Mars Weather App gives you the most recent weather data received form Mars weather station, Insight.
                        Utilizing Nasa, and Open Weather's APIs, we feed data into the app that gives you the ability to compare
                        you current local weather conditions with the climate of The Red Planet.
                    </p>
                    <br></br>
                    <a href="https://github.com/angeloxenakis/mars-weather-app" target="_blank">GitHub</a>
                </div>
            </div>
        </div>,
        <hr></hr>,
        <div className="eng-tile">
            <h2>MARS WEATHER APP</h2>
            <h5>React, Redux, Ruby on Rails</h5>
            <div className="eng-tile-content">
                <div className="eng-tile-hero">
                    <iframe className="video" src="https://www.youtube.com/embed/dsOUQrqS-Ws" frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>
                </div>
                <div className="eng-tile-info">
                    <p>
                        The Mars Weather App gives you the most recent weather data received form Mars weather station, Insight.
                        Utilizing Nasa, and Open Weather's APIs, we feed data into the app that gives you the ability to compare
                        you current local weather conditions with the climate of The Red Planet.
                    </p>
                    <br></br>
                    <a href="https://github.com/angeloxenakis/mars-weather-app" target="_blank">GitHub</a>
                </div>
            </div>
        </div>,
        <hr></hr>,
            <div className="eng-tile">
            <h2>MARS WEATHER APP</h2>
            <h5>React, Redux, Ruby on Rails</h5>
            <div className="eng-tile-content">
                <div className="eng-tile-hero">
                    <iframe className="video" src="https://www.youtube.com/embed/dsOUQrqS-Ws" frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>
                </div>
                <div className="eng-tile-info">
                    <p>
                        The Mars Weather App gives you the most recent weather data received form Mars weather station, Insight.
                        Utilizing Nasa, and Open Weather's APIs, we feed data into the app that gives you the ability to compare
                        you current local weather conditions with the climate of The Red Planet.
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