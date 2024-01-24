import React from 'react'
import './Quiz.css'

class QuizContainer extends React.Component {
    render() {
        return (
            <div className="quiz-container">
                <h1 className="question">Question</h1>
                <p className='number'>1 of 15</p>
                <h5 className='main-q'>Which is the only mammal that can jump</h5>
                <div className='option-cointainer'>
                    <button className="option">Dog</button>
                    <button className="option">Elephant</button>
                    <button className="option">Goat</button>
                    <button className="option">Lion</button>
                </div>
                <div className="controls">
                    <button className="control">Previous</button>
                    <button className="control">Next</button>
                    <button className="control">Quit</button>
                </div>
            </div>
        );
    }
}

export default QuizContainer