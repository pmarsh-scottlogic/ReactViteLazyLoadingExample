import { lazy } from "react";
import "./App.css";

function App() {
  // lazy loading the component breaks the website. Importing normally (at the top of the file, non-dynamically) works fine.
  const MyComponent = lazy(() => import("./MyComponent"));
  return (
    <>
      <h1>My page</h1>
      <MyComponent />
    </>
  );
}

export default App;
