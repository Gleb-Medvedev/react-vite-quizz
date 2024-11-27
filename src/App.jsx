import './App.css'
import { QuizBody } from './components/QuizBodyComponent/QuizBody';
import { QuizResult } from './components/QuizResultComponent/QuizResult';
import { quizData } from './assets/data';
import { useState } from 'react';

function App() {

  const [quizStep, setQuizStep] = useState(0);
  const [rightAnswersCounter, setRightAnswersCounter] = useState(0);
  const progressBarWidth = Math.round(quizStep / quizData.length * 100);

  function slideAnswerClicked( index ) {
    setQuizStep(prev => prev +1);
    if (quizData[quizStep].correct === index) {
      setRightAnswersCounter(prev => prev +1)
    }
  }  

  return (
    <div className="container">
      {
        quizStep === quizData.length ? (
          <QuizResult
            correct={rightAnswersCounter}
            total={quizData.length}
            calc={Math.round(rightAnswersCounter / quizData.length * 100)}/>
        ) : (
          <QuizBody
            quizstep={quizStep}
            answersarray={quizData[quizStep].answers} 
            slidetitle={quizData[quizStep].title}
            // onClick={({ index }) => console.log(index)} //РАБОТАЕТ. НЕ ТРОГАЙ, ДОЛБОЕБ!
            // onClick={({ index }) => {setQuizStep(prev => prev + 1), slideRightAnswer === index ? setRightAnswersCounter(prev => prev + 1) : false}} // ЭТО НЕВЕРОЯТНО!
            onClick={({ index }) => {slideAnswerClicked(index)}} // ЭТО ЕЩЕ БОЛЕЕ НЕВЕРОЯТНО!
            progress={progressBarWidth}
        />
        )
      }
    </div>
  )
} 

export default App