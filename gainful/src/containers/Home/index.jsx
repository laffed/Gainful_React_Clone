import React, { useState, useEffect } from 'react'
import './styles.css';
import Nav from '../../components/Header/Nav/Nav'
import { Link } from 'react-router-dom';

function Home(props) {



    return (
        <div className="home-wrapper">
            <Nav></Nav>
            <div className="section-1">
                <div className="left-text-wraper">
                    <div className="left-text">
                        <p className="tag-line">
                            Your nutrition, personalized.
                        </p>
                        <p className="tag-line-description">
                            Protein powder tailored specifically to your body type and fitness goals
                        </p>
                        <Link to="/quiz">
                            <button className="quiz-btn" >TAKE THE QUIZ→</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;