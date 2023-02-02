import React, { useState } from "react";
import Tesseract from "tesseract.js";

const OCR = () => {
  const [text, setText] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    Tesseract.recognize(file)
      .progress((progress) => {
        console.log("progress", progress);
      })
      .then((result) => {
        setText(result.text);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      <p>{text}</p>
    </div>
  );
};

export default OCR;
