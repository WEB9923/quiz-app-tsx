import {
  JSX,
  useEffect,
  useState
} from "react";
import Start from "./components/Start.tsx";
import Finish from "./components/Finish.tsx";
import Quiz from "./components/Quiz.tsx";
import * as React from "react";
import axios from "axios";
interface IData {
  id: number;
  question: string;
  code?: string,
  correct: string,
  answers: string[],
  category: string
}
export default function App(): JSX.Element {
  const [inputValue, setInputValue] = useState<string>("");
  const [isStart, setIsStart] = useState<boolean>(true);
  const [isQuiz, setIsQuiz] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isFinish, setIsFinish] = useState<boolean>(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [data, setData] = useState<IData[] | null>(null);
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  //fns
  const inputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  }
  const submitForm = (event: React.FormEvent<HTMLFormElement>): void | boolean => {
    event.preventDefault();
    if(inputValue === "" || inputValue === null || inputValue === undefined) {
      return false;
    } else {
      setIsStart(false);
      setIsQuiz(true);
      return true;
    }
  }
  const getQuizes = async (): Promise<void> => {
    try {
      const res = await axios.get("http://localhost:8080/quiz");
      if(res)
        setData(res.data);
    } catch (err) {
      console.error(err);
    }
  }
  //game logic
  const handleAnswerSelected = (answer: string): void => {
    setSelected(answer);
  }
  const handleNextQuestion = () => {
    if(data && selected === data[questionIndex].correct) {
      setScore(score + 1);
    }
    setSelected(null);
    if(selected !== null) {
      setQuestionIndex(questionIndex + 1);
    }
  }
  const handleEndQuiz = (): void => {
    setIsFinish(true);
    setIsQuiz(false);
  }
  const handleResetQuiz = (): void => {
    setIsQuiz(true);
    setIsFinish(false);
    setQuestionIndex(0);
    setScore(0);
  }
  const restartQuiz = (): void => {
    setIsQuiz(false);
    setIsFinish(false);
    setIsStart(true);
    setQuestionIndex(0);
    setScore(0);
  }
  useEffect(() => {
    getQuizes();
  }, []);
  return (
    <>
      <div className={"w-full h-screen flex items-center justify-center"}>
        <div className="md:w-[600px] w-[350px] overflow-hidden">
          {isStart && <Start
            inputValue={inputValue}
            inputChange={inputChange}
            submitForm={submitForm}
          />}
          {isQuiz && <Quiz
            data={data}
            questionIndex={questionIndex}
            handleAnswerSelected={handleAnswerSelected}
            handleNextQuestion={handleNextQuestion}
            selected={selected}
            score={score}
            handleEndQuiz={handleEndQuiz}
          />}
          {isFinish && <Finish
            score={score}
            resetQuiz={handleResetQuiz}
            restartQuiz={restartQuiz}
          />}
        </div>
      </div>
    </>
  )
}
