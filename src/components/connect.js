import React, {useState} from 'react'
import { useSpring, useTransition, useTrail, animated } from 'react-spring';
import { useHistory } from 'react-router'

export function Connect() {

    const content = [
        <h1>Connect</h1>
    ]

    const linkTreeLeft = [
        <div className="link-tree-logo">
            <div className="linkedin-panel"></div>
            <h5><a href="https://www.linkedin.com/in/angeloxenakis" target="_blank">Linked In</a></h5>
        </div>,
        <div className="link-tree-logo">
            <div className="github-panel"></div>
            <h5><a href="https://github.com/angeloxenakis" target="_blank">GitHub</a></h5>
        </div>,
        <div className="link-tree-logo">
            <div className="medium-panel"></div>
            <h5><a href="https://medium.com/@angeloxenakis" target="_blank">Medium</a></h5>
        </div>
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
        <div className="link-tree-container">
            {trail.map(({ x, marginBottom, ...rest }, index) => (
                <animated.div
                    key={content[index]}
                    className="trails-text"
                    style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                    <animated.div style={{ marginBottom }}>{content[index]}</animated.div>
                </animated.div>
            ))} 
            <div className="link-tree">
                <div className="link-tree-left">
                    {trail.map(({ x, marginBottom, ...rest }, index) => (
                        <animated.div
                            key={linkTreeLeft[index]}
                            className="link-tree-logo"
                            style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                            <animated.div style={{ marginBottom }}>{linkTreeLeft[index]}</animated.div>
                        </animated.div>
                    ))} 
                </div>
                <div className="link-tree-left">
                    <div className="link-tree-logo">
                        <div className="behance-panel"></div>
                        <h5><a href="https://dribbble.com/AngeloTheThird" target="_blank">Behance</a></h5>
                    </div>
                    <div className="link-tree-logo">
                        <div className="dribbble-panel"></div>
                        <h5><a href="https://dribbble.com/AngeloTheThird" target="_blank">Dribbble</a></h5>
                    </div>
                </div>
                <div className="link-tree-right">
                    <div className="link-tree-logo">
                        <div className="youtube-panel"></div>
                        <h5><a href="https://www.youtube.com/watch?v=99Fql6xGipU" target="_blank">YouTube</a></h5>
                    </div>
                    <div className="link-tree-logo">
                        <div className="spotify-panel"></div>
                        <h5><a href="https://open.spotify.com/artist/4iFCXVjW4KECpZ4tbY0eon" target="_blank">Spotify</a></h5>
                    </div> 
                    <div className="link-tree-logo">
                        <div className="applemusic-panel"></div>
                        <h5><a href="https://music.apple.com/us/artist/angelo-the-third/1457300377" target="_blank">Apple Music</a></h5>
                    </div>  
                </div>
            </div>
        </div>
    )
}