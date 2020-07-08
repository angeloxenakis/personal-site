import React from 'react'
import { useHistory } from 'react-router'

export function Header() {
    let history = useHistory()

    let about = () => {
        history.push('/')
    }

    let connect = () => {
        history.push('/connect')
    }

    let portfolio = () => {
        history.push('/portfolio')
    }

    return (
        <div className="nav">
            <div className="nav-btn" onClick={about}>ABOUT</div>
            <div className="nav-btn" onClick={connect}>CONNECT</div>
            <div className="nav-btn" onClick={portfolio}>PORTFOLIO</div>
            <div className="nav-btn"><a href="https://docs.google.com/document/d/1pFqCxwR37b5dYWXmD8NAVhd3Uu94NOhNVQbu7xE4tZY/edit" target="_blank">RESUME</a></div>
            <div className="nav-btn"><a href="https://medium.com/@angeloxenakis" target="_blank">BLOG</a></div>
        </div>
    )
}