import {JSX} from "react";
import {
  AnimatePresence,
  motion
} from "framer-motion";
import Button from "./Button.tsx";
import {RiCopperCoinFill} from "react-icons/ri";

export default function Finish({score, resetQuiz, restartQuiz, inputValue}:
{
  score: number,
  resetQuiz: () => void,
  restartQuiz: () => void,
  inputValue: string
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
          className={"w-full min-h-[250px] h-auto rounded-md bg-gray-700 p-2 py-3 relative justify-between"}
        >
          <div className="flex flex-col items-center gap-5">
            <h1 className={"text-yellow-500 font-bold flex items-center gap-1 text-2xl"}>
              <p className={"flex items-center gap-1"}>
                hey {inputValue} your final score is:
                <span className={"flex items-center gap-0.5"}>
                    <RiCopperCoinFill size={28}/>
                  {score}
                  </span>
              </p>
            </h1>
            <div className="flex flex-col gap-3 w-full">
              <Button
                text={"reset quiz"}
                clickEvent={resetQuiz}
                classname={"px-6 h-10 w-full rounded-md bg-gray-800 text-gray-300 font-bold text-[18px] capitalize hover:opacity-90"}
              />
              <Button
                text={"back to main menu"}
                clickEvent={restartQuiz}
                classname={"px-6 h-10 w-full rounded-md bg-gray-900 text-gray-300 font-bold text-[18px] capitalize hover:opacity-90"}
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
