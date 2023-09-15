import {JSX} from "react";
import * as React from "react";

export default function Button({ text, classname, clickEvent, inputValue }:
  {text: string, classname: string, clickEvent?: React.MouseEventHandler<HTMLButtonElement>, inputValue?: string}
): JSX.Element {
  return (
      <button
        onClick={clickEvent}
        disabled={!inputValue}
        className={classname}
      >
        {text}
      </button>
  );
}
