import aboutPic from "../assets/pic1.png"
import fb from "../assets/fb.svg"
import github from "../assets/github.svg"
import instagram from "../assets/instagram.svg"
import linkedin from "../assets/linkedin.svg"
import x from "../assets/x.svg"
import discord from "../assets/discord.svg"


function About() {
  return (
    <section className="my-16 flex justify-between">
      <div className="md:w-150 flex flex-col justify-center">
        <h3 className="text-3xl font-bold mb-6">About Myself !</h3>
        <p>
          I’m Safal Gautam, a Computer Engineering undergrad with a strong
          curiosity for technology and a commitment to learning every day. I
          believe in steady, consistent effort and focusing on the fundamentals
          to build practical solutions. I’m passionate about improving my skills
          and approaching challenges with patience and an open mind, always
          aiming to grow both as a developer and a person.
        </p>
        <div className="flex flex-row">
          <a href="https://www.facebook.com/safalgautam22/" target="_blank">
            <img src={fb} alt="Facebook" className="icons" />
          </a>

          <a href="https://www.instagram.com/safalgautam22/" target="_blank">
            <img src={instagram} alt="Instagram" className="icons" />
          </a>

          <a href="https://www.linkedin.com/in/safalgautam22/" target="_blank">
            <img src={linkedin} alt="linkedin" className="icons" />
          </a>

          <a href="https://x.com/safalgautam22/" target="_blank">
            <img src={x} alt="Twitter" className="icons" />
          </a>

          <a href="https://github.com/safalgautam22/" target="_blank">
            <img src={github} alt="Github" className="icons" />
          </a>

          <a
            href="https://discord.com/users/826641958138019841"
            target="_blank"
          >
            <img src={discord} alt="Discord" className="icons" />
          </a>
        </div>
      </div>
      <img src={aboutPic} alt="About Image" className="h-100 hover:scale-110" />
    </section>
  );
}

export default About;
