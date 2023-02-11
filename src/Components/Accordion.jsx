import React, { useState } from "react";

const Accordion = ({ question, answer}) => {
  const [text, showText] = useState(false);
  const [switchText, setswitchText] = useState(false);

  const switching = () => {
    setswitchText(!switchText);
  };
  const display = () => {
    // alert("hello");
    switchText && showText(!text);
  };
  return (
    <>
      <div className="question-div">
        <button onClick={display} className="btn-toggle">
          {!text ? (
            <img src="src\assets\plus.png" alt="plus" />
          ) : (
            <img src="src\assets\minus.png" alt="minus" />
          )}
        </button>
        <p className="ques">{question}</p>
        <div className="v-line"></div>
        <p id={switchText ? "turn-on" : "turn-off"}>
          {switchText ? "Turned On" : "Turned Off"}
        </p>
        <input type="checkbox" className="checky" onClick={switching} />
      </div>

      {text && (
        <div className="answer-div">
          <p className="ans">{answer}</p>
        </div>
      )}
    </>
  );
};

export default Accordion;
