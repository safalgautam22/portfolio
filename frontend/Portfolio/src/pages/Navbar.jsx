import { useState } from "react";
import CV from "../assets/CV.pdf";
import hamburger from "../assets/hamburger.svg";

function SideBar({ closeSidebar }) {
  return (
    <div className="fixed top-0 right-0 h-full w-3/5 bg-(--black) z-50 p-6 flex flex-col gap-6">
      <button
        className="self-end text-(--white) text-2xl font-bold hover:text-(--primary) active:rotate-45"
        onClick={closeSidebar}
      >
        X
      </button>

      <a
        href="/"
        className="text-(--white) text-lg font-semibold hover:text-(--primary)"
        onClick={closeSidebar}
      >
        Home
      </a>
      <a
        href="#projects"
        className="text-(--white) text-lg font-semibold hover:text-(--primary)"
        onClick={closeSidebar}
      >
        Projects
      </a>
      <a
        href="#about"
        className="text-(--white) text-lg font-semibold hover:text-(--primary)"
        onClick={closeSidebar}
      >
        About
      </a>
      <a
        href="#blogs"
        className="text-(--white) text-lg font-semibold hover:text-(--primary)"
        onClick={closeSidebar}
      >
        Blogs
      </a>
      <a
        href="#contact"
        className="text-(--white) text-lg font-semibold hover:text-(--primary)"
        onClick={closeSidebar}
      >
        Contact
      </a>
    </div>
  );
}

function Nav() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function DownloadCV() {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "Safal_Gautam_CV.pdf";
    link.click();
  }

  return (
    <nav className="flex items-center justify-between px-6 py-4 fixed bg-(--black) top-0 w-full left-0 right-0 z-500">
      {/* Logo */}
      <div className="hover:text-(--white) transition-colors duration-300">
        <h1 className="text-(--primary) text-2xl">
          {"{"} <span className="font-bold text-(--white)">SaFal</span> {"}."}
        </h1>
      </div>

      {/* Menu */}
      <ul className="sm:flex gap-6 font-bold hidden">
        <li className="hover:text-(--primary)">
          <a href="/">Home</a>
        </li>
        <li className="hover:text-(--primary)">
          <a href="#projects">Projects</a>
        </li>
        <li className="hover:text-(--primary)">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-(--primary)">Blogs</li>
        <li className="hover:text-(--primary)">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        <button
          className="bg-(--primary) w-24 h-10 text-xl font-bold rounded-lg hover:bg-amber-600 hover:-translate-y-1"
          onClick={DownloadCV}
        >
          My CV
        </button>
        <button
          className="sm:hidden p-2 w-12 h-12 rounded-lg hover:bg-[#110b0370] hover:-translate-y-1 active:rotate-45"
          onClick={() => setSidebarOpen(true)}
        >
          <img src={hamburger} alt="Menu" />
        </button>
      </div>
      {sidebarOpen && <SideBar closeSidebar={() => setSidebarOpen(false)} />}
    </nav>
  );
}

export default Nav;
