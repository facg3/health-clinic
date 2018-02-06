import React, { Component } from "react";

import About from "./about/About";
import Contact from "./contact/Contact"

class App extends Component {
  render() {
    return (
      <div>
      <About / >
      <Contact />
      </div>
    );
  }
}

export default App;
