import {JSX} from "react";
import {motion, AnimatePresence} from "framer-motion";
import Question from "./Question.tsx";
import Button from "./Button.tsx";

interface IData {
  id: number;
  question: string;
  code?: string,
  correct: string,
  answers: [string],
  category: string
}

export default function Quiz({ data, questionIndex }: IData[] | null): JSX.Element {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{
            scale: 0
          }} animate={{
            scale:1
          }} transition={{
            duration: .3,
            type: "spring",
            stiffness: 100
          }} exit={{
            scale: 0
          }}
          className="w-full min-h-[350px] max-h-[550px] rounded-md bg-gray-700 p-2 py-3"
        >
          <div className="py-3">
            <Question
              question={data[questionIndex].question}
              classname={"first-letter:font-extrabold font-medium text-center capitalize text-gray-400 text-[20px] mb-3"}
            />
            <code className={""}>
                {data[questionIndex].code && <pre className={"bg-gray-800 rounded-md px-5 py-3 text-purple-400 w-full border-4 border-gray-900"}>
                  {data[questionIndex].code}
                </pre>}
            </code>
          </div>
          <div className="py-2">
            <ul>
              {data[questionIndex]?.answers.map((answer) => (
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
                  className={"bg-gray-800 text-gray-400 w-full py-3 px-2 rounded-md cursor-pointer my-2 hover:opacity-90 select-none"}
                >
                  {answer}
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="">
            <button className={"px-6 h-10 w-full rounded-md bg-emerald-500 text-gray-300 font-bold text-[18px] capitalize"}>
              next
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
