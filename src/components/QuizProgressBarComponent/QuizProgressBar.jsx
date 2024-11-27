import './progress-bar.css';

export function QuizProgressBar({ width }) {
    
    return (
        <div className="progress-bar">
            <div className="progress-bar__inner" style={{width: `${width}%`}}></div>
        </div>
    )
}