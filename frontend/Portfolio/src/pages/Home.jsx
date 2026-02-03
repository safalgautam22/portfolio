import Nav from "../components/Navbar";
import Introduction from "./Intro";
import Project from "./Project";
import About from "./About";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <nav><Nav /></nav>
      <section id="intro"><Introduction /></section>
      <section id="projects"><Project /></section>
      <section id="about"><About /></section>
      <section id="contact"><Contact /></section>
      <footer className="text-center"><span className="align-middle text-2xl">&#169;</span> 2026 Safal Gautam. All rights reserved.</footer>
    </>
  );
}

export default Home;
