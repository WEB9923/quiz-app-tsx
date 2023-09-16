import {JSX} from "react";
import * as React from "react";
import {motion} from "framer-motion";
enum Type {
  SPRING = "spring",
  TWEEN = "tween"
}
export default function Button({ text, classname, clickEvent }:
  {
    text: string,
    classname: string,
    clickEvent?: React.MouseEventHandler<HTMLButtonElement>,
    inputValue?: string
  }
): JSX.Element {
  return (
      <motion.button
        initial={{
          scale: 1
        }} whileTap={{
          scale: 0.95
        }} transition={{
          duration: 0.1,
          type: `${Type.SPRING}`,
          stiffness: 250
        }}
        onClick={clickEvent}
        className={classname}
      >
        {text}
      </motion.button>
  );
}
