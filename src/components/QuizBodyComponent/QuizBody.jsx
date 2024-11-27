import './quiz-body.css';
import { QuizProgressBar } from '../QuizProgressBarComponent/QuizProgressBar';

export function QuizBody({ quizstep, answersarray, slidetitle, onClick, progress }) {

    return (
        <div className="quiz-body">
            <QuizProgressBar width={progress}/>
            <div className="quiz-slide">
                <h3 className='quiz-slide__title'>{ slidetitle }</h3>
                <ul className="quiz-slide__list">
                    {
                      answersarray.map((question, index) => {
                        return (
                            <li className="quiz-slide__list-item"
                                key={`Слайд ${quizstep + 1}, вариант ответа ${index + 1}`}
                                onClick={() => {(onClick({ index }))}} //ЭТО ПРАВИЛЬНО. НЕ ТРОГАЙ, ДОЛБОЕБ!
                            >
                                    {question}
                            </li>
                        )
                      })  
                    }
                </ul>
            </div>
        </div>
    )
}