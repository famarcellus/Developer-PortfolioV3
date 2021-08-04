import React from "react";
import "@fontsource/inter";
import 'antd/dist/antd.css';
import "../index.scss";
import Navbar from "../components/navbar/Navbar";
import Intro from "../components/intro/Intro";


const IndexPage = () => {
  return (
    <main>
      <title>Fabio's Portfolio</title>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Navbar />
      <Intro />
    </main>
  )
}

export default IndexPage
