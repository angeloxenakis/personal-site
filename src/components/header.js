import React from 'react'

export function Header() {
    return (
        <div className="nav">
            <div className="nav-btn"><a href="/">ABOUT</a></div>
            <div className="nav-btn"><a href="/link-tree">CONNECT</a></div>
            <div className="nav-btn"><a href="/portfolio">PORTFOLIO</a></div>
            <div className="nav-btn"><a href="https://docs.google.com/document/d/1pFqCxwR37b5dYWXmD8NAVhd3Uu94NOhNVQbu7xE4tZY/edit" target="_blank">RESUME</a></div>
            <div className="nav-btn"><a href="https://medium.com/@angeloxenakis" target="_blank">BLOG</a></div>
        </div>
    )
}