import quiz_complete from "../assets/quiz-complete.png";
import questions from "../questions.js";

export default function Summary({userAnswers}){
    let skippedAnswers = userAnswers.filter((answer) => {
        return answer === null;
    })

    let correctAnswers = userAnswers.filter((answer , index) =>{
        return (answer === questions[index].answers[0]);
    });

    let wrongAnswers = userAnswers.filter((answer , index) =>{
        return (answer !== questions[index].answers[0]);
    });

    let skippedAnswersShare = Math.round((skippedAnswers.length / userAnswers.length) * 100);
    let correctAnswersShare = Math.round((correctAnswers.length / userAnswers.length) * 100);
    let wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

    
    return(
        <div id="summary">
            <img src={quiz_complete} alt="quiz completed"/>            
            <h2>Quiz Completed</h2>
            <div id="summary-stats">
                <p>
                    <span className="number">{skippedAnswersShare}%</span>
                    <span className="text">skipped</span>
                </p>
                <p>
                    <span className="number">{correctAnswersShare}%</span>
                    <span className="text">answered correctly</span>
                </p>
                <p>
                    <span className="number">{wrongAnswersShare}%</span>
                    <span className="text">answered incorrectly</span>
                </p>                
            </div>
            <ol>
                {userAnswers.map((answer,index) => {
                    let cssClass = "user-answer";
                    if(answer === null){
                        cssClass += " skipped";
                    }
                    else if(answer === questions[index].answers[0]){                        
                        cssClass += " correct";
                    }
                    else{
                        cssClass += " wrong";
                    }
                    
                    return(
                        <li key={index}>
                            <h3>{index+1}</h3>
                            <p className="question">{questions[index].text}</p>
                            <p className={cssClass}>{answer ?? "skipped"}</p>
                        </li>
                    );

                })}                                
            </ol>
        </div>
    );
}