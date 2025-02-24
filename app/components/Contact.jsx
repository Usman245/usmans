import React from "react";

const Contact = () => {
  return (
    <div>
      <section
        id="contact"
        className="py-24 md:py-32 max-w-xl mx-auto text-center  !py-16 md:!py-24 mb-20 md:mb-32"
        style={{ opacity: 1, transform: "none" }}
      >
        <p className="mb-3 font-mono text-sm capitalize text-accent">
          what's next
        </p>
        <h2 className="heading-secondary !mb-5">get in touch</h2>
        <p>
          I am always open to new opportunities and collaborations. If you have
          a project in mind, or just want to say hi, feel free to send me an
          message.
        </p>
        <span>
          <a
            className="text-sm p-4 px-6 border-2 block mx-auto w-fit font-mono capitalize rounded border-accent text-accent hover:bg-accent-light focus:outline-none focus:bg-accent-light duration-150 cursor-pointer mt-12"
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:usmanpk16t@gmail.com"
          >
            Say Hello
          </a>
        </span>
      </section>
    </div>
  );
};

export default Contact;
