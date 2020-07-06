import React from 'react'
import { Fight } from '../assets/fight.jpeg'

export function About() {
    return (
        <div className="about">
            <div className="hero">
                <h1>Angelo Xenakis</h1>
                <div className="bio">
                    <p className="large-text"><a href="">Software</a> &</p>
                    <p className="large-text"><a href="#">Design</a> &</p>
                    <p className="large-text"><a href="#">Music</a> &</p>
                    <p className="large-text"><a href="#">Fighting</a> &</p>
                    <p className="large-text"><a href="https://medium.com/@angeloxenakis">Articles</a></p>
                </div>
                <p className="small-text">...And calling my blog posts articles because it feels more distigushed</p>
            </div>
            <hr></hr>
            <div className="tri-img">
                <div className="fight-img"></div>
            </div>
        </div>
    )
}