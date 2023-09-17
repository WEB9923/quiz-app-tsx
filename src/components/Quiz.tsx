import {JSX} from "react";
import {
  motion,
  AnimatePresence
} from "framer-motion";
import Question from "./Question.tsx";
import {RiCopperCoinFill} from "react-icons/ri";
import Button from "./Button.tsx";
interface IData {
  id: number;
  question: string;
  code?: string,
  correct: string,
  answers: string[],
  category: string
}
export default function Quiz({data, questionIndex, handleAnswerSelected, handleNextQuestion, selected, score, handleEndQuiz}:
{ data: IData[] | null,
  questionIndex: number,
  handleAnswerSelected: (answer: string) => void,
  handleNextQuestion: () => void,
  selected: string | null,
  score: number,
  handleEndQuiz: () => void
}): JSX.Element {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{
            scale: 0
          }} animate={{
            scale: 1
          }} transition={{
            duration: .3,
            type: "spring",
            stiffness: 100
          }} exit={{
            scale: 0
          }}
          className="w-full min-h-[250px] h-auto rounded-md bg-gray-700 p-2 py-3 relative"
        >
          <div className="flex items-center justify-between px-2 border-b-[1px] border-gray-800 py-2 select-none">
            <div className="flex items-center gap-3">
              <h2 className={"text-yellow-500 font-bold flex items-center gap-1 text-[18px]"}>
                <RiCopperCoinFill size={22}/>
                {score}
              </h2>
              <span className={"bg-gray-800 px-3 py-1 rounded-md text-gray-400 font-medium"}>
                {questionIndex + 1 + "/" + data?.length}
              </span>
            </div>
            <span className={"bg-gray-800 px-3 py-1 rounded-md text-gray-400 font-medium capitalize"}>
              {data?.[questionIndex]?.category}
            </span>
          </div>
          <div className="py-2">
            <Question
              question={data?.[questionIndex].question}
              classname={"first-letter:font-extrabold font-medium text-center capitalize text-gray-400 text-[20px] mb-3"}
            />
            <code className={""}>
              {data?.[questionIndex].code &&
                <pre className={"bg-gray-800 rounded-md px-2 py-3 text-purple-400 w-full border-4 border-gray-900 break-words whitespace-pre-wrap"}>
                  {data?.[questionIndex].code}
                </pre>
              }
            </code>
          </div>
          <div className="py-2">
            <ul>
              {data?.[questionIndex]?.answers.map((answer) => (
                <motion.li
                  initial={{
                    scale: 1
                  }} whileTap={{
                    scale: 0.95
                  }} transition={{
                    duration: 0.1,
                    type: "spring",
                    stiffness: 250
                  }}
                  key={answer}
                  className={`${selected?.toLowerCase() === answer?.toLowerCase() ? "before:w-1 before:h-full before:absolute before:left-0 before:top-0 before:bg-slate-600 before:rounded-md" : ""} relative bg-gray-800 text-gray-400 w-full py-3 px-2 rounded-md cursor-pointer my-2 hover:opacity-90 select-none`}
                  onClick={() => handleAnswerSelected(answer)}
                >
                  <pre className={"break-words whitespace-pre-wrap"}>{answer}</pre>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="">
            {questionIndex + 1 < data?.length ? <Button
              text={"next"}
              clickEvent={handleNextQuestion}
              classname={"px-6 h-10 w-full rounded-md bg-emerald-500 text-gray-300 font-bold text-[18px] capitalize"}
            /> : <Button
              text={"finish"}
              clickEvent={handleEndQuiz}
              classname={"px-6 h-10 w-full rounded-md bg-emerald-500 text-gray-300 font-bold text-[18px] capitalize"}
            />}
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
