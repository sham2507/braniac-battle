import quiz_logo from "../assets/quiz-logo.png"

export default function Header(){
    return(
        <header>
            <img src={quiz_logo} alt="quiz logo"/>
            <h1>REACT QUIZ</h1>
        </header>
    );
}