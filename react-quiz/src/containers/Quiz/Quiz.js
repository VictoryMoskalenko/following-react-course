import React, { Component } from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'

class Quiz extends Component {

    state = {
        results: {},  //{[id]: 'success' 'error'} for all questions
        isFinished: false,
        activeQuestion: 0,
        answerState: null,  //{[id]: 'success' 'error'}
        quiz: [
           {
               question: 'What color is the sky?',
               rightAnswerId: 2, 
               id: 2,
               answers: [
               {text: '1 Black', id: 1},
               {text: '2 Blue', id: 2},
               {text: '3 Red', id: 3},
               {text: '4 Green', id: 4}
           ]},
            {
                question: 'In what year was this city founded?',
                rightAnswerId: 3, 
                id: 3,
                answers: [
                {text: '1 1700', id: 1},
                {text: '2 1705', id: 2},
                {text: '3 1703', id: 3},
                {text: '4 1803', id: 4}
            ]
        }
        ] 
        }

    onAnswerClickHandler = answerId => {
        // console.log('Answer Id: ', answerId)
        if (this.state.answerState) {
           const key = Object.keys(this.state.answerState)[0]
           if (this.state.answerState[key] === 'success') {
               return
           } 
        }

        const question = this.state.quiz[this.state.activeQuestion]
        const results = this.state.results

        if (question.rightAnswerId === answerId) {
            if (!results[question.id]) {
                results[question.id] = 'success'
            }

            this.setState({
                answerState: {[answerId]: 'success'},
                results
            })

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true
                    })
                        //  console.log('Finished')
                     } else {
                        this.setState({
                            activeQuestion: this.state.activeQuestion + 1,
                            answerState: null
                        })  
                     }

                window.clearTimeout(timeout)
            }, 1000)
   
        } else {
            results[question.id] = 'error'
            this.setState({
                answerState: {[answerId]: 'error'},
                results  // просто results т.к. ключи совпадают
            })
        } 
    }

    isQuizFinished() {
       return this.state.activeQuestion + 1 === this.state.quiz.length 
    }

    retryHandler = () => {
       this.setState({
           activeQuestion: 0,
           answerState: null,
           isFinished: false,
           results: {}
       }) 
    }

    componentDidMount() {
       console.log('Quiz ID = ', this.props.match.params.id); 
    }

    render() {
        return (
            <div className={classes.Quiz}>
                
                <div className={classes.QuizWrapper}>
                    <h1>Answer all the questions</h1>
                    
                    {
                        this.state.isFinished
                        ? <FinishedQuiz
                           results={this.state.results}
                           quiz={this.state.quiz}
                           onRetry={this.retryHandler} 
                            />
                        : <ActiveQuiz
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                        state={this.state.answerState} 
                            />  
                    }

                    
                </div>
            </div>
        )
    }
}
export default Quiz;
