import React, { useState, useEffect } from 'react'
import './styles.css'

function Quiz(props) {
    const [step, setStep] = useState(1);
    const [quizData, setQuizData] = useState({
        gender: null,
        height: null,
        currentWeight: null,
        goalWeight: null,
        exerciseFreq: null,
        useProteinBefore: null,
        proteinFreq: null,
        mealsPerDay: null,
        sleepHrs: null,
        currentBody: null,
        goalBody: null,
        DOB: null,

    })
    const [typeOfExercise, setTypeOfExercise] = useState({

    })
    const [reasons, setReasons] = useState({

    })

    const [dietary, setDietary] = useState({

    })

    const next = e => {
        e.preventDefault();
        setStep(prev => prev + 1);
    }

    const back = e => {
        e.preventDefault();
        setStep(prev => prev - 1);
    }


    return (

        <div className="page-wrapper">
            <h1 className="quiz-header">GAINFUL</h1>
            <div className="quiz-wrapper">
                {(() => {
                    switch (step) {
                        case 1:
                            return (
                                <div className="middle">
                                    <div className="question">
                                        <h3>I identify most as</h3>
                                    </div>
                                    <div className="question-1">
                                        <p class="form__answer">
                                            {/* <input type="radio" name="gender" id="match_1_1" value="Male" class="answer_1" checked="" /> */}
                                            <label for="match_1_1">
                                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19.54 14.83C22.2793 14.83 24.5 12.6093 24.5 9.87C24.5 7.13067 22.2793 4.91 19.54 4.91C16.8007 4.91 14.58 7.13067 14.58 9.87C14.58 12.6093 16.8007 14.83 19.54 14.83Z" stroke="#333333" stroke-width="1.8239" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M20.43 33.63L27.07 20.17C27.39 19.51 26.92 18.74 26.18 18.74H12.9C12.17 18.74 11.69 19.51 12.01 20.17L18.65 33.63C19.02 34.36 20.07 34.36 20.43 33.63Z" stroke="#333333" stroke-width="1.8239" stroke-miterlimit="10"></path>
                                                </svg>
                                            </label>
                                        </p>
                                        <p class="form__answer">
                                            {/* <input type="radio" name="gender" id="match_2_1" value="Female" class="answer_1" /> */}
                                            <label for="match_2_1">
                                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.97 19.05L11.99 33.19C11.73 33.71 12.11 34.32 12.69 34.32H26.64C27.22 34.32 27.6 33.71 27.34 33.19L20.37 19.05C20.08 18.47 19.26 18.47 18.97 19.05Z" stroke="#333333" stroke-width="1.8239" stroke-miterlimit="10"></path>
                                                    <path d="M19.67 14.83C22.4094 14.83 24.63 12.6093 24.63 9.87C24.63 7.13067 22.4094 4.91 19.67 4.91C16.9307 4.91 14.71 7.13067 14.71 9.87C14.71 12.6093 16.9307 14.83 19.67 14.83Z" stroke="#333333" stroke-width="1.8239" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </label>
                                        </p>
                                        <p class="form__answer">
                                            {/* <input type="radio" name="gender" id="match_3_1" value="Prefer Not to State" class="answer_1" /> */}
                                            <label for="match_3_1">
                                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M23.95 35.35H15.07C14.43 35.35 13.92 34.83 13.92 34.2V19.31C13.92 18.67 14.44 18.16 15.07 18.16H23.95C24.59 18.16 25.1 18.68 25.1 19.31V34.19C25.1 34.83 24.59 35.35 23.95 35.35Z" stroke="#333333" stroke-width="1.8239" stroke-miterlimit="10"></path>
                                                    <path d="M19.51 14.83C22.2493 14.83 24.47 12.6093 24.47 9.87C24.47 7.13067 22.2493 4.91 19.51 4.91C16.7707 4.91 14.55 7.13067 14.55 9.87C14.55 12.6093 16.7707 14.83 19.51 14.83Z" stroke="#333333" stroke-width="1.8239" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </label>
                                        </p>
                                    </div>
                                </div>
                            )
                        case 2:
                            return (
                                <div className="middle">
                                    <div className="question">
                                        <h3>Slide the sliders to reflect your height and weight (don't forget the goal weight)</h3>
                                    </div>
                                    <div className="selections">
                                        Select me
                                </div>
                                </div>
                            )
                        case 3:
                            return (
                                <div className="middle">
                                    <div className="question">
                                        <h3>
                                            How many times a week do you exercise?
                                        </h3>
                                    </div>
                                    <div className="question-1">
                                        <p class="form__answer">
                                            <label for="match_1_3">

                                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">

                                                    <circle stroke="#333333" cx="19.7" cy="20" r="3.4"></circle>
                                                </svg>
                                            </label>
                                        </p>
                                        <p class="form__answer">
                                            <label for="match_2_3">
                                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">

                                                    <circle stroke="#333333" cx="10.9" cy="20" r="3.4"></circle>
                                                    <circle stroke="#333333" cx="20" cy="20" r="3.4"></circle>
                                                    <circle stroke="#333333" cx="29.1" cy="20" r="3.4"></circle>
                                                </svg>
                                            </label>
                                        </p>
                                        <p class="form__answer">
                                            <label for="match_3_3">
                                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">

                                                    <circle stroke="#333333" cx="6.3" cy="20" r="3.4"></circle>
                                                    <circle stroke="#333333" cx="15.4" cy="20" r="3.4"></circle>
                                                    <circle stroke="#333333" cx="24.6" cy="20" r="3.4"></circle>
                                                    <circle stroke="#333333" cx="33.7" cy="20" r="3.4"></circle>
                                                </svg>
                                            </label>
                                        </p>


                                    </div>
                                </div>
                            )
                        default:
                            return (
                                <div>
                                    <h1>default</h1>
                                </div>
                            )
                    }
                })()}
                <div className="quiz-footer">
                    <button className="back-btn" onClick={back} disabled={step === 1 ? true : false}>＜</button>
                    <button className="next-btn" onClick={next} disabled={step === 13 ? true : false}>NEXT</button>
                    <button className="help-btn">?</button>
                </div>
            </div>
        </div>
    )
}



export default Quiz;