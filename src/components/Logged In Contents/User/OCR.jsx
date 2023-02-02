import React, { useState } from "react";
import Tesseract from "tesseract.js";

const OCR = ({ drugName }) => {
  const [text, setText] = useState("");
  const [progressRate, setProgressRate] = useState({ progress: 0 });

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    Tesseract.recognize(file)
      .progress((progress) => {
        console.log("progress", progress);
        setProgressRate(progress);
      })
      .then((result) => {
        setText(result.text);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      {progressRate != 1 && <p>Progress: {Math.ceil(progressRate.progress * 100)}%</p>}
      <p>{text}</p>
    </div>
  );
};

export default OCR;
