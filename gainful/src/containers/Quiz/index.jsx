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
        <div className="quiz-wrapper">
            <h1 className="quiz-header">GAINFUL</h1>
            <div className="middle">
                <div className="question">
                    <h3>I identify most as</h3>
                </div>
                <div className="selections">
                    Select me
                </div>
            </div>
            <div className="quiz-footer">
                <button disabled={step === 1 ? true : false}>Back</button>
                <button disabled={step === 13 ? true : false}>Next</button>
            </div>
        </div>
    )
}



export default Quiz;