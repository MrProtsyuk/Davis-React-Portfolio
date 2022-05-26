import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

export default function App () {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />
    }
    if (currentPage === 'Contact') {
      return <Contact />
    }
    if (currentPage === 'Skills') {
      return <Skills />
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />
    }
  }

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
    <header>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
    </header>
          <main className=".bg-secondary.bg-gradient">
              {renderPage()}
          </main>
    </div>
  )
}
