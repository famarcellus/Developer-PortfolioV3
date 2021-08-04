import React from "react";
import "@fontsource/inter";
import 'antd/dist/antd.css';
import "../index.scss";
import Navbar from "../components/navbar/Navbar";
import AboutMe from "../components/about/AboutMe";

const IndexPage = () => {
  return (
    <main>
      <title>Fabio's Portfolio</title>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Navbar />
      <AboutMe />
    </main>
  )
}

export default IndexPage
