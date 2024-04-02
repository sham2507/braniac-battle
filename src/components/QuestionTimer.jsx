import {useState,useEffect} from "react";

export default function QuestionTimer({timeout , onTimeout , mode}){

    let [remainingTime,setRemainingTime] = useState(timeout);

    useEffect(() =>{        
        let timer = setTimeout(() =>{
            if(onTimeout){
                onTimeout();
            }            
        },timeout);

        return(() =>{
            clearTimeout(timer);
        });
        
    },[timeout,onTimeout]);

    
    useEffect(() =>{        
        let timer = setInterval(() =>{
            setRemainingTime((prevTime) =>{
                return prevTime - 100;
            });
        },100);

        return(() =>{
            clearInterval(timer);
        });
    },[]);

    return(
        <progress id="question-time" max={timeout} value={remainingTime} className={mode} />
    );
}