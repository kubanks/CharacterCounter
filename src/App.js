import React, { useState } from "react";
import "./CharacterCounter.css";

function CharacterCounter() {
  const [text, setText] = useState("");
  const [totalChars, setTotalChars] = useState(0);
  const [charsWithoutSpaces, setCharsWithoutSpaces] = useState(0);

  const handleTextChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);

    setTotalChars(inputText.length);
    setCharsWithoutSpaces(inputText.replace(/\s/g, "").length);
  };

  return (
    <div className="character-counter-container">
      <h2 className="character-counter-title">Character Counter Tool</h2>
      <div className="character-counter-card">
        <textarea
          placeholder="Paste here..."
          value={text}
          onChange={handleTextChange}
          className="character-counter-textarea"
        />
        <div className="character-counter-stats">
          <div>
            Characters:
            <span className="character-counter-number">{totalChars}</span>
          </div>
          <div>
            Characters without spaces:
            <span className="character-counter-number">
              {charsWithoutSpaces}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterCounter;
