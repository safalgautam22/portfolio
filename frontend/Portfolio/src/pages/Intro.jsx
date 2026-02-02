import heroPic from "../assets/pic.png";

function Introduction() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between mt-16 mb-30 md:my-32 px-4 md:px-10 gap-10 h-100 md:h-150">
      
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-(--primary)">
          Hi, I’m Safal Gautam
        </h1>

        <span className="text-base md:text-lg text-gray-500">
          Tech Enthusiast
        </span>

        <p className="mt-4 text-base md:text-base">
          I’m passionate about exploring new technologies and dedicated to learning
          something valuable every day. As a Computer Engineering undergrad and
          active learner, I strive to build clean, efficient solutions while
          constantly sharpening my skills.
        </p>
      </div>

      <div className="flex justify-center md:w-1/2 md:justify-end">
        <img
          src={heroPic}
          alt="Safal Gautam"
          className="w-64 sm:w-64 md:w-100 rounded-full hover:scale-105 transition"
        />
      </div>

    </section>
  );
}

export default Introduction;
