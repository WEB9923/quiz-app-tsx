import {JSX} from "react";
import Start from "./components/Start.tsx";

export default function App(): JSX.Element {

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <Start />
      </div>
    </>
  )
}
