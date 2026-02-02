function Contact() {
  return (
    <section>
      <div>
        <h2 className="text-center text-3xl font-bold">Contact Me</h2>
        <p className="text-center text-gray-500 italic">
          I’m open to new opportunities and always happy to connect.
        </p>
      </div>
      <form
        action="https://formspree.io/f/xovwjvvl"
        method="post"
        className="flex flex-col items-center gap-4 m-10"
      >
        <div className="inputs">
          <label for="name">Name:</label>
          <input
            type="text"
            name="name"
            className="border-2 border-gray-400 p-2 rounded"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="inputs">
          <label for="email">Email:</label>
          <input
            type="email"
            name="email"
            className="border-2 border-gray-400 p-2 rounded"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="inputs">
          <label for="message">Message</label>
          <textarea
            name="message"
            className="border-2 border-gray-400 p-2 rounded resize-none"
            rows="5"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>

        <button type="submit" className="bg-(--primary) w-75 rounded p-2.5 font-bold hover:bg-amber-600 hover:-translate-y-1 mt-5">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
