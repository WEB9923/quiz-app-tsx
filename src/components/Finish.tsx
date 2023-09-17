import {JSX} from "react";
import {
  AnimatePresence,
  motion
} from "framer-motion";
import Button from "./Button.tsx";
import {RiCopperCoinFill} from "react-icons/ri";

export default function Finish({ score, resetQuiz, restartQuiz }:
{
  score: number,
  resetQuiz: () => void,
  restartQuiz: () => void
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
            <div className="flex flex-col items-center">
              <h1 className={"text-yellow-500 font-bold flex items-center gap-1 text-2xl"}>
                <RiCopperCoinFill size={28}/>
                {score}
              </h1>
              <div className="flex flex-col gap-3">
                <Button
                  text={"reset"}
                  clickEvent={resetQuiz}
                  classname={"px-6 h-10 w-full rounded-md bg-red-500 text-gray-300 font-bold text-[18px] capitalize"}
                />
                <Button
                  text={"restart"}
                  clickEvent={restartQuiz}
                  classname={"px-6 h-10 w-full rounded-md bg-red-500 text-gray-300 font-bold text-[18px] capitalize"}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
    </>
  );
}
