import {JSX} from "react";

export default function Question({ question, classname }: {question: string | undefined, classname: string}): JSX.Element {
  return (
    <h2 className={classname}>{question}</h2>
  );
}
