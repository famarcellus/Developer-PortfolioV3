import React from "react";
import "@fontsource/inter";
import 'antd/dist/antd.css';
import "../index.scss";
import Navbar from "../components/navbar/Navbar";
import Intro from "../components/intro/Intro";
import AboutMe from "../components/about/AboutMe";
import Projects from "../components/projects/Projects";
import ContactMe from "../components/contact/ContactMe";
import Footer from "../components/footer/Footer";
import { BackTop } from "antd";

const IndexPage = () => {
  return (
    <main>
      <title>Fabio's Portfolio</title>
      <BackTop />
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Navbar />
      <Intro />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Footer />
    </main>
  )
}

export default IndexPage
