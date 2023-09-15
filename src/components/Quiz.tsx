import {JSX} from "react";
import {motion, AnimatePresence} from "framer-motion";
import Question from "./Question.tsx";

export default function Quiz(): JSX.Element {
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
          className="w-full min-h-[350px] max-h-[550px] rounded-md bg-gray-700"
        >
          <div className="p-2">
            <Question
              question={"hello how are you?"}
              classname={"first-letter:font-extrabold font-medium text-center capitalize text-gray-400 text-[20px]"}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
