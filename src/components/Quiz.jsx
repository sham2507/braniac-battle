import {useState,useCallback} from "react";
import questions from "../questions.js";

import Question from "./Question.jsx";
import Summary from "./Summary.jsx";



export default function Quiz(){      

    let [userAnswers,setUserAnswers]  = useState([]);    

    let activeQuestionIndex = userAnswers.length;
    let quizIsComplete = (activeQuestionIndex === questions.length);

    let handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){        
        setUserAnswers((prevAnswers) => {
            return([...prevAnswers,selectedAnswer]);
        });        
        },[]);        
        
    let handleSkipAnswer = useCallback(() =>{
        handleSelectAnswer(null);
    },[handleSelectAnswer]);
    
    if(quizIsComplete){
        return(
            <Summary userAnswers = {userAnswers}/>
        );
    }
    
    return(
        <div id="quiz">
            <Question 
                key = {activeQuestionIndex}
                index  = {activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}                                
                onSkipAnswer={handleSkipAnswer}
            />        
        </div>
    );
    
}