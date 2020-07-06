import React from 'react'
import { linkedIn } from '../assets/linkedin-logo.png'

export function LinkTree() {
    return (
        <div className="link-tree-container">
            <h2>Connect</h2>
            <div className="link-tree">
                <div className="link-tree-left">
                    <div className="link-tree-logo">
                        <div className="linkedin-panel"></div>
                        <h5><a href="https://www.linkedin.com/in/angeloxenakis" target="_blank">Linked In</a></h5>
                    </div>
                    <div className="link-tree-logo">
                        <div className="github-panel"></div>
                        <h5><a href="https://github.com/angeloxenakis" target="_blank">GitHub</a></h5>
                    </div>
                    <div className="link-tree-logo">
                        <div className="medium-panel"></div>
                        <h5><a href="https://medium.com/@angeloxenakis" target="_blank">Medium</a></h5>
                    </div>
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