import {JSX, useState} from "react";
import Start from "./components/Start.tsx";
import Finish from "./components/Finish.tsx";
import Quiz from "./components/Quiz.tsx";
import * as React from "react";

export default function App(): JSX.Element {
  const [inputValue, setInputValue] = useState<string>("");
  const [isStart, setIsStart] = useState<boolean>(true);
  const [isQuiz, setIsQuiz] = useState<boolean>(false);
  const [isFinish, setIsFinish] = useState<boolean>(false);

  const [questionIndex, setQuestionIndex] = useState<number>(0);
  //fns
  const inputChange = (event: React.ChangeEvent<HTMLInputElement>): void => setInputValue(event.target.value);


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

  return (
    <>
      <div className={"w-full h-screen flex items-center justify-center"}>
        <div className="md:w-[450px] w-[350px] overflow-hidden">
          {isStart && <Start
            inputValue={inputValue}
            inputChange={inputChange}
            submitForm={submitForm}
          />}
          {isQuiz && <Quiz />}
          <Finish />
        </div>
      </div>
    </>
  )
}
