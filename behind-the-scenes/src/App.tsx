import React, { useState } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState<boolean>(false);

  console.log('App Running');
  
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <div>
        <Button onClick={() => setShowParagraph((prev) => !prev)}>
          Toggle Paragraph!
        </Button>
      </div>

      {showParagraph && <p>This is new</p>}
    </div>
  );
}

export default App;
