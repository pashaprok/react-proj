import React, {useReducer} from 'react';
import BtnFluid from '../buttons/BtnFluid';
import StartSection from '../sections/StartSectionComponent';
import BannerStartSection from '../sections/BannerStartSectionComponent';
import Progress from './components/Progress';
import Question from './components/Question';
import Answers from './components/Answers';
import QuizContext from './context/QuizContext';

import {
    SET_ANSWERS,
    SET_CURRENT_QUESTION,
    SET_CURRENT_ANSWER,
    SET_ERROR,
    SET_SHOW_RESULTS,
    RESET_QUIZ,
} from './reducers/types.js';
import quizReducer from './reducers/QuizReducer';

import './quiz.css';

function QuizApp() {
    const questions = [
        {
            id: 1,
            question: 'What is the capital of Ukraine?',
            answer_a: 'Kharkiv',
            answer_b: 'Kiev',
            answer_c: 'New York',
            answer_d: 'London',
            correct_answer: 'b',
        },
        {
            id: 2,
            question: 'What is JavaScript?',
            answer_a: 'game',
            answer_b: 'programming language',
            answer_c: 'electronic device',
            answer_d: 'country',
            correct_answer: 'b',
        },
        {
            id: 3,
            question: 'What color is grass?',
            answer_a: 'pink',
            answer_b: 'yellow',
            answer_c: 'green',
            answer_d: 'blue',
            correct_answer: 'c',
        },
    ];

    const initialState = {
        questions,
        currentQuestion: 0,
        currentAnswer: '',
        answers: [],
        showResults: false,
        error: '',
    };

    const [state, dispatch] = useReducer(quizReducer, initialState);
    const {currentQuestion, currentAnswer, answers, showResults, error} = state;

    const question = questions[currentQuestion];

    const renderError = () => {
        if (!error) {
            return;
        }

        return <div className="error">{error}</div>;
    };

    const renderResultMark = (question, answer) => {
        if (question.correct_answer === answer.answer) {
            return <span className="correct">Correct</span>;
        }

        return <span className="failed">Failed</span>;
    };

    const renderResultsData = () => {
        return answers.map(answer => {
            const question = questions.find(
                question => question.id === answer.questionId
            );

            return (
                <div key={question.id} className="result-item">
                    <span>{question.question}</span> {renderResultMark(question, answer)}
                </div>
            );
        });
    };

    const restart = () => {
        dispatch({type: RESET_QUIZ});
    };

    const next = () => {
        const answer = {questionId: question.id, answer: currentAnswer};

        if (!currentAnswer) {
            dispatch({type: SET_ERROR, error: 'Please select an option'});
            return;
        }

        answers.push(answer);
        dispatch({type: SET_ANSWERS, answers});
        dispatch({type: SET_CURRENT_ANSWER, currentAnswer: ''});

        if (currentQuestion + 1 < questions.length) {
            dispatch({
                type: SET_CURRENT_QUESTION,
                currentQuestion: currentQuestion + 1,
            });
            return;
        }

        dispatch({type: SET_SHOW_RESULTS, showResults: true});
    };

    if (showResults) {
        return (
            <div className="quiz-app">
                <StartSection
                        bgi="quiz-start start-section start-app-section"
                    >
                        <BannerStartSection
                            title="Quiz App"
                            subtitle=""
                        />   
                    </StartSection>
                <div className="section section-light">
                    <div className="container">
                        <div className="results">
                            <h2>Results</h2>
                            <ul>{renderResultsData()}</ul>
                            <button className="quiz-action-btn" onClick={restart}>
                                Restart
                            </button>
                        </div>
                    </div>
                </div>
                <BtnFluid
                    half={false}
                    link="/apps"
                    text="apps list"
                    icon={<i className="fas fa-arrow-left"></i>}
                />
            </div> 
        );
    } else {
        return (
            <QuizContext.Provider value={{state, dispatch}}>
                <div className="quiz-app">
                    <StartSection
                        bgi="quiz-start start-section start-app-section"
                    >
                        <BannerStartSection
                            title="Quiz App"
                            subtitle=""
                        />   
                    </StartSection>
                    <div className="section section-light">
                        <div className="container">
                            <Progress
                                total={questions.length}
                                current={currentQuestion + 1}
                            />
                            <Question />
                            {renderError()}
                            <Answers />
                            <button className="quiz-action-btn" onClick={next}>
                                Confirm and Continue
                            </button>
                        </div>
                    </div>
                    <BtnFluid
                        half={false}
                        link="/apps"
                        text="apps list"
                        icon={<i className="fas fa-arrow-left"></i>}
                    />
                </div>
            </QuizContext.Provider>
        );
    }
}

export default QuizApp;
