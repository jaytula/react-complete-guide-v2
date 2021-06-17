import React, { useCallback, useState } from "react";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState<boolean>(false);

  console.log("App Running");
  const toggleParagraphHandler = useCallback(
    () => setShowParagraph((prev) => !prev),
    []
  );

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <div>
        <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
      </div>

      <DemoOutput show={false} />
    </div>
  );
}

export default App;
