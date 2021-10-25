import React, { useState } from "react"
import "../custom-css/navbar.css"

export default function TextForm(props) {
  const [text, setText] = useState("")

  const [wordCount, setWordCount] = useState(0)

  const handleOnChange = (e) => {
    setText(e.target.value)
    setWordCount(text.split(" ").length)
  }

  const handleUpClick = () => {
    setText(text.toUpperCase())

    props.showAlert("Converted to UpperCase", "success")
  }

  const handleDownClick = () => {
    setText(text.toLowerCase())
    props.showAlert("Converted to LowerCase", "success")
  }
  const handleClearClick = () => {
    setText("")
    props.showAlert("Text has been Cleared", "success")
  }
  // Credit : Coding Wala

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra space has been removed", "success")
  }

  const handleCapitalizeClick = () => {
    setText(capitalizeText(text))
    props.showAlert("Converted to Capitalize", "success")
  }
  const capitalizeText = (textData) => {
    let text = textData

    const textarry = text.split(" ")
    let textfarray = []

    for (let i = 0; i < textarry.length; i++) {
      const text2 = textarry[i]
      const textUppercase = text2[0].toUpperCase() + text2.slice(1)
      textfarray.push(textUppercase)
    }
    const finalResult = textfarray.join(" ")
    return finalResult
  }

  return (
    <>
      <div
        className="container mt-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <h4>{props.headings}</h4>
          </label>
          <textarea
            className={`textarea-${props.colorMode} form-control`}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#3a3a3a",
              color: props.mode === "light" ? "black" : "white",
            }}
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          type="button"
          className={`btn btn-${
            props.colorMode === null ? "primary" : props.colorMode
          }`}
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          type="button"
          className={`btn btn-${
            props.colorMode === null ? "primary" : props.colorMode
          } mx-3`}
          onClick={handleDownClick}
        >
          Convert to Lowercase
        </button>
        <button
          type="button"
          className={`btn btn-${
            props.colorMode === null ? "primary" : props.colorMode
          } mx-3`}
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          type="button"
          className={`btn btn-${
            props.colorMode === null ? "primary" : props.colorMode
          } mx-3`}
          onClick={handleExtraSpaces}
        >
          Clear Extra Spaces
        </button>
        <button
          type="button"
          className={`btn btn-${
            props.colorMode === null ? "primary" : props.colorMode
          } mx-3`}
          onClick={handleCapitalizeClick}
        >
          Capitalize
        </button>
      </div>
      <div
        className="container mt-5"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your Text Summary</h2>
        <p>Total Number of Characters: {text.length}</p>
        <p>Total Number of Words: {text.length !== 0 ? wordCount : 0}</p>
        <p>Reading Time: {(text.length * 0.008).toFixed(2)} Minuits </p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter text on the textbox"}</p>
      </div>
    </>
  )
}
