import {JSX} from "react";
import Button from "./Button.tsx";
import * as React from "react";
import {AnimatePresence, motion} from "framer-motion";

interface IStart {
  inputValue: string;
  inputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  submitForm: (event: React.FormEvent<HTMLFormElement>) => void | boolean;
}

export default function Start({ inputChange, inputValue, submitForm }: IStart): JSX.Element {
  return (
    <>
      <AnimatePresence>
        <motion.form
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
          onSubmit={submitForm}
          className={"flex flex-col items-center gap-y-5 w-full select-none"}
        >
          <input
            type="text"
            placeholder={"enter your name.."}
            className={"w-full border-none outline-none bg-gray-700 rounded-md px-2 h-14 text-gray-300 font-bold text-[17px]"}
            value={inputValue}
            onChange={inputChange}
          />
          <Button
            text={"submit"}
            inputValue={inputValue}
            classname={"px-6 h-14 w-full rounded-md bg-emerald-500 text-gray-300 font-bold text-[18px] capitalize disabled:opacity-40 disabled:pointer-events-none"}
          />
        </motion.form>
      </AnimatePresence>
    </>
  );
}
