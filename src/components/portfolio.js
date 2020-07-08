import React from 'react'

export function Portfolio() {
    return (
        <div className="portfolio">
            <div className="eng-port">
                <h1>Engineering Portfolio</h1>
                <div className="eng-tile">
                    <h2>XenLoop-5T</h2>
                    <h5>Software Audio Loop Station | React, NodeJS</h5>
                    <div className="eng-tile-content">
                        <div className="eng-tile-hero">
                            <iframe className="video" src="https://www.youtube.com/embed/dsOUQrqS-Ws" frameborder="0" 
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                            </iframe>
                        </div>
                        <div className="eng-tile-info">
                            <p>
                                The XenLoop-5T is a software audio loop station designed to enhance live musical performance.
                                Record and playback audio on 5 separate tracks, and play each track individually or synchronously.
                                Use a built in metronome with BPM control to stay on the right timing, and conrtol individual 
                                track volume and effects.
                            </p>
                            <br></br>
                            <a href="https://github.com/angeloxenakis/XenLoop-5T" target="_blank">GitHub</a>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="eng-tile">
                    <h2>Mars Weather App</h2>
                    <h5>Up to Date Mars Weather Data | React, Redux, Ruby on Rails</h5>
                    <div className="eng-tile-content">
                        <div className="eng-tile-hero">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/dsOUQrqS-Ws" frameborder="0" 
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
            </div>
            <hr></hr>
            <h1>Design Portfolio</h1>
            <h4>Slow Ride Trade Co Series</h4>
            <hr></hr>
            <h4>Fight Cult Series</h4>
        </div>
    )
}