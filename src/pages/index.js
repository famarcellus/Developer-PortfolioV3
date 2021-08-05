import React from "react";
import "@fontsource/inter";
import 'antd/dist/antd.css';
import "../index.scss";
import Navbar from "../components/navbar/Navbar";
import Intro from "../components/intro/Intro";
import AboutMe from "../components/about/AboutMe";
import Projects from "../components/projects/Projects";

const IndexPage = () => {
  return (
    <main>
      <title>Fabio's Portfolio</title>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Navbar />
      <Intro />
      <AboutMe />
      <Projects />
    </main>
  )
}

export default IndexPage
