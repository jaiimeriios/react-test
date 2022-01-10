import { useEffect, useRef, useState } from 'react';

const MathGame = () => {
    const [score, setScore] = useState(0);
    const [mistake, setMistake] = useState(0);
    const [currentProblem, setCurrentProblem] = useState(generateProblem());
    const [userAnswer, setUserAnswer] = useState('');
    const [showError, setShowError] = useState(false);

    const answerField = useRef(null);
    const resetButton = useRef(null);

    useEffect(() => {
        if (score == 10 || mistake == 3) {
            setTimeout(() => {
                resetButton.current.focus();
            }, 300)
        }
    }, [score, mistake]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let correctAnswer;
        if (currentProblem.operator == '+') {
            correctAnswer = currentProblem.numberOne + currentProblem.numberTwo;
        }
        if (currentProblem.operator == '-') {
            correctAnswer = currentProblem.numberOne - currentProblem.numberTwo;
        }
        if (currentProblem.operator == 'x') {
            correctAnswer = currentProblem.numberOne * currentProblem.numberTwo;
        }

        if (correctAnswer == parseInt(userAnswer, 10)) {
            setScore(score + 1);
            setCurrentProblem(generateProblem());
        } else {
            setMistake(mistake + 1);
            setShowError(true);
            setTimeout(() => {
                setShowError(false);
            }, 400);
        }

        setUserAnswer('');
        answerField.current.focus();
    };

    const resetGame = () => {
        console.log('reset');
        setScore(0);
        setMistake(0);
        setUserAnswer('');
        setCurrentProblem(generateProblem());
        answerField.current.focus();
    };

    function generateProblem() {
        return {
            numberOne: generateRandomNumber(10),
            numberTwo: generateRandomNumber(10),
            operator: ['+', '-', 'x'][generateRandomNumber(2)],
        };
    }

    function generateRandomNumber(max) {
        return Math.floor(Math.random() * (max + 1));
    }

    return (
        <>
            <div className="mathgame">
                <p className={`problem${showError ? ' animate-wrong' : ''}`}>
                    {currentProblem.numberOne}
                    {currentProblem.operator}
                    {currentProblem.numberTwo}
                </p>

                <form onSubmit={handleSubmit} className="our-form">
                    <input
                        ref={answerField}
                        type="text"
                        name="userAnswer"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        autoComplete="off"
                    />
                    <button>Submit</button>
                </form>
                <Status score={score} mistake={mistake} />
                <ProgressBar score={score} />
            </div>
            <div
                className={`overlay ${
                    mistake == 3 || score == 10 ? 'overlay-visible' : ''
                }`}
            >
                <div className="overlay-inner">
                    <p className="end-message">
                        {score == 10 ? 'Won' : 'Loss'}
                    </p>
                    <button ref={resetButton} onClick={resetGame} className="reset-button">
                        Start Over
                    </button>
                </div>
            </div>
        </>
    );
};

const Status = ({ score, mistake }) => {
    return (
        <p className="status">
            You need {10 - score} more points, and are allowed to make{' '}
            {2 - mistake} more mistakes.
        </p>
    );
};

const ProgressBar = ({ score }) => {
    console.log(score);
    return (
        <div className="progress">
            <div className="boxes">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>
            <div
                className="progress-inner"
                style={{
                    transform: `scaleX(${score / 10})`,
                    opacity: `${score < 3 ? '.25' : score > 6 ? '.7' : '.5'}`,
                }}
            ></div>
        </div>
    );
};

export default MathGame;
