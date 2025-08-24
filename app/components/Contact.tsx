import React from "react";
import Reveal from "./Reveal";

const Contact = () => {
  return (
    <Reveal initialY={50}>
    <section
      id="contact"
      className="card relative mx-6 flex flex-col items-center px-[33px] py-[27px] z-30 gap-6 mb-[67px] md:mb-[42px]"
    >
      {/* Heading */}
      <h2 className="font-semibold text-[22px] md:text-[40px] text-center">
        Let's Connect! ✨
      </h2>
      <div className="flex flex-row gap-4 justify-center">
        <a
          href="mailto:srlavanya2005@gmail.com"
          className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-200/60 hover:bg-gray-300/80 transition hover:scale-103 duration-200"
        >
          <img src="/mail_icon.svg" alt="Mail" className="w-6 h-6" />
        </a>

        <a
          href="https://www.linkedin.com/in/lavanya-s-r"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-200/60 hover:bg-gray-300/80 transition hover:scale-103 duration-200"
        >
          <img src="/linkedin_logo.svg" alt="LinkedIn" className="w-6 h-6" />
        </a>

        <a
          href="https://github.com/lavanya-sr8"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-200/60 hover:bg-gray-300/80 transition hover:scale-103 duration-200"
        >
          <img src="/github_logo.svg" alt="GitHub" className="w-6 h-6" />
        </a>
        <a
          href="https://leetcode.com/lavanya_sr"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-200/60 hover:bg-gray-300/80 transition hover:scale-103 duration-200"
        >
          <img src="/leetcode_logo.svg" alt="LeetCode" className="w-6 h-6" />
        </a>
      </div>
      <small>Copyright &copy; Lavanya S R 2025</small>
    </section>
    </Reveal>
  );
};

export default Contact;
