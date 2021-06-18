import React, { useCallback, useState } from "react";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState<boolean>(false);
  const [allowToggle, setAllowToggle] = useState<boolean>(false);

  console.log("App Running");
  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) setShowParagraph((prev) => !prev);
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <div>
        <Button onClick={allowToggleHandler}>Allow Toggling!</Button>
        <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
      </div>

      <DemoOutput show={showParagraph} />
    </div>
  );
}

export default App;
