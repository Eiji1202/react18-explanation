import { Transition } from "./components/Transition";
import "./App.css";
import { ReactQuery } from "./components/ReactQuery";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <div className="App">
      <Transition />
      <hr />
      <ErrorBoundary fallback={<p>全体エラーです！</p>}>
        <Suspense fallback={<p>全体ローディング中だよ〜</p>}>
          <ReactQuery />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
