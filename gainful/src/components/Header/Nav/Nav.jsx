import React, { useState } from 'react'
import './styles.css'

function Nav(props) {


    return (
        <div className="Nav-wrapper">
            <div className="logo">
                <a class="brand-logo" href="/" onclick="sendGTM('Home Page','Click','navbar home_img')">
                    <picture>
                        <img src="https://dlye1hka1kz5z.cloudfront.net/site/img/hs/base/logo.000da48ea9ca.svg" alt=""
                            class="imgIndicator" />
                    </picture>
                </a>
                <div className="menu">
                    <ul className="menu-list">
                        <li>Mission</li>
                        <li>Flavor Boost</li>
                        <li>Help</li>
                    </ul>
                </div>
            </div>

            <div className="sign-in">
                Sign In
            </div>
        </div>
    )
}


export default Nav;