import React from "react";
import About from "./About";
import CodingProfiles from "./CodingProfiles";
import Contact from "./Contact";
import Landing from "./Landing";
import Navbar from "./Navbar";
import Projects from "./Projects";

function MainPage() {
  return (
    <>
      <section id="home">
        <Navbar></Navbar>
      </section>
      <section>
        <Landing></Landing>
      </section>
      <section id="About">
        <About></About>
      </section>
      <section id="Projects">
        <Projects></Projects>
      </section>
      <section id="Code">
        <CodingProfiles></CodingProfiles>
      </section>
      <section id="Contact">
        <Contact></Contact>
      </section>
    </>
  );
}

export default MainPage;
