import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

export default function App () {
  return (
    <main>
      <Nav />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
    </main>
  )
}
