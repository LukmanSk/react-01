// import About from "./components/About"
import React, { useState } from "react"
import Alert from "./components/Alert"
import Navbar from "./components/Navbar"
import About from "./components/About"
import TextForm from "./components/TextForm"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function App() {
  const [mode, setMode] = useState("light")
  const [modeText, setModeText] = useState("Dark")
  const [alert, setAlert] = useState(null)
  const [colorMode, setColorMode] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      setModeText("Light")
      setColorMode("dark")
      document.body.style.backgroundColor = "#3a3a3a"
      showAlert("Dark Mode is Enabled", "success")
      document.title = "TextUtils-Dark Mode"
    } else {
      setMode("light")
      setModeText("Dark")
      setColorMode(null)
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode is Enabled", "success")
      document.title = "TextUtils-Light Mode"
    }
  }

  const redBtnClicked = () => {
    setMode("dark")
    setModeText("Light")
    setColorMode("danger")
    document.body.style.backgroundColor = "rgb(104 7 7)"

    showAlert("Red Mode is Enabled", "success")
  }
  const blueBtnClicked = () => {
    setMode("dark")
    setModeText("Light")
    setColorMode("primary")
    document.body.style.backgroundColor = "rgb(19 0 106)"
    showAlert("Blue Mode is Enabled", "success")
  }
  const greenBtnClicked = () => {
    setMode("dark")
    setModeText("Light")
    setColorMode("success")
    document.body.style.backgroundColor = "rgb(37 86 23)"
    showAlert("Green Mode is Enabled", "success")
  }

  const test = {
    red: redBtnClicked,
    blue: blueBtnClicked,
    green: greenBtnClicked,
  }

  return (
    <Router>
      <div className="App">
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          modeText={modeText}
          test={test}
          colorMode={colorMode}
        />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/">
            <TextForm
              showAlert={showAlert}
              headings="Enter Your Text"
              mode={mode}
              alert={alert}
              colorMode={colorMode}
            />
          </Route>
        </Switch>
        <Alert alert={alert} />

        {/* <About /> */}
      </div>
    </Router>
  )
}

export default App
