import React from 'react'
import { linkedIn } from '../assets/linkedin-logo.png'

export function LinkTree() {
    return (
        <div className="link-tree-container">
            <h1>Link Tree</h1>
            <div className="link-tree">
                <div className="link-tree-left">
                    <div className="link-tree-logo">
                        <div className="linkedin-panel"></div>
                        <h5>Linked In</h5>
                    </div>
                    <div className="link-tree-logo">
                        <div className="github-panel"></div>
                        <h5>GitHub</h5>
                    </div>
                    <div className="link-tree-logo">
                        <div className="dribbble-panel"></div>
                        <h5>Dribbble</h5>
                    </div>
                    <div className="link-tree-logo">
                        <div className="portfolio-panel"></div>
                        <h5>Portfolio</h5>
                    </div>
                    <div className="link-tree-logo">
                        <div className="spotify-panel"></div>
                        <h5>Spotify</h5>
                    </div>
                    <div className="link-tree-logo">
                        <div className="soundcloud-panel"></div>
                        <h5>SoundCloud</h5>
                    </div>  
                </div>
                <div className="link-tree-right">
                    <div className="link-tree-logo-right">
                        <div className="medium-panel"></div>
                        <h5>Medium</h5>
                    </div>
                    <div className="link-tree-logo">
                        <div className="portfolio-panel"></div>
                        <h5>Portfolio</h5>
                    </div>
                    <div className="link-tree-logo">
                        <div className="behance-panel"></div>
                        <h5>Behance</h5>
                    </div>
                    <div className="link-tree-logo">
                        <div className="youtube-panel"></div>
                        <h5>YouTube</h5>
                    </div>
                    <div className="link-tree-logo">
                        <div className="applemusic-panel"></div>
                        <h5>Apple Music</h5>
                    </div>  
                </div>
            </div>
        </div>
    )
}