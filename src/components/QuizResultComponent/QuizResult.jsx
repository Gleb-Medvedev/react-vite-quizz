import './quiz-result.css';

export function QuizResult({ correct, total, calc}) {
    function resultImage( calc ) {
        if (calc <= 25) {
            return 'broke.jpg'
        } else if (calc <= 50) {
            return 'fail.png'
        } else if (calc <= 75) {
            return 'good.jfif'
        } else if (calc <= 100) {
            return 'kappa.jpg'
        }
    }

    return (
        <div className="quiz-result">
            <h3
                className='quiz-result__title'
                style={{marginBottom: '24px', color: 'chartreuse'}}>Ваш результат:</h3>
            <div className="quiz-result__img-container">
                <img
                    src={`../../../src/assets/images/${resultImage(calc)}`}
                    alt="kartinka" />
            </div>            
            <p
                className='quiz-result__report-text'
                style={{marginBottom: '24px'}}>Правильных ответов: {correct}
            </p>
            <p>Всего вопросов: { total }</p>
        </div>
    )
}