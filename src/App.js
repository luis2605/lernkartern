import React, { useState } from "react";
import "./App.css";
import Card from "./components/UI/Card";
import Questions from "./components/Questions";
import QA from "./data";

function App() {
  const [data, setData] = useState(QA);

  return (
    <div className="App">
      <Card>
        <Questions data={data} />
      </Card>
    </div>
  );
}

export default App;
