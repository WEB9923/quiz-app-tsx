import ReactDOM from 'react-dom/client'
import './index.css'
import {lazy, Suspense} from "react";
import * as React from "react";
const App: React.LazyExoticComponent<() => React.JSX.Element> = lazy(
   () => import("./App.tsx")
);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Suspense fallback={
       <h1 className={"absolute select-none top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-3xl font-bold text-gray-500"}>
          loading...
       </h1>
    }>
       <App/>
    </Suspense>
)
