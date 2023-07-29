import { useState } from "react";
import * as math from "mathjs";

import "./App.css";
import Button from "./components/Button";
import InputElement from "./components/InputElement";
const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (val) => {
    setText((text) => [...text, val + ""]);
  };
  Math.eval = function (str) {
    for (var i = 0; i < str.length; i++) {
      if (isNaN(str[i]) && !['+', '-', '/', '*', '%', '**'].includes(str[i])) {
        return NaN;
      }
    }
    try {
      return eval(str)
    } catch (e) {
      if (e.name !== 'SyntaxError') throw e
      return NaN;
    }
  }

  const calculateResult = () => {
    const InputElement = text.join("");
    setResult(Math.eval(InputElement));
  };



  const resetInput = () => {
    setText("");
    setResult("");
  };

const clearInput=()=>{
  setText(text.slice(0,-1));
  setResult("");
}
  const buttonColor = "#f2a33c";
  return (
    <div className="App">
      <div className="calc-wrapper">
        <InputElement result={result} text={text} />
        <div className='row'>
          <Button symbol="7" handleclick={addToText} />
          <Button symbol="8" handleclick={addToText} />
          <Button symbol="9" handleclick={addToText} />
          <Button symbol="/" color={buttonColor} handleclick={addToText} />
        </div>
        <div className='row'>
          <Button symbol="4" handleclick={addToText} />
          <Button symbol="5" handleclick={addToText} />
          <Button symbol="6" handleclick={addToText} />
          <Button symbol="*" color={buttonColor} handleclick={addToText} />
        </div>
        <div className='row'>
          <Button symbol="1" handleclick={addToText} />
          <Button symbol="2" handleclick={addToText} />
          <Button symbol="3" handleclick={addToText} />
          <Button symbol="+" color={buttonColor} handleclick={addToText} />
        </div>
        <div className='row'>
          <Button symbol="0" handleclick={addToText} />
          <Button symbol="." handleclick={addToText} />
          <Button symbol="=" handleclick={calculateResult} />
          <Button symbol="-" color={buttonColor} handleclick={addToText} />
        </div>
        <div style={{ display: "flex", gap: "10px", width: "100%" }}>
          <Button symbol="Clear all" color="red" width={"50%"} handleclick={resetInput} />
          <Button symbol="Clear" color="red" width={"50%"} handleclick={clearInput} />
        </div>
      </div>
    </div>
  );
}

export default App;
