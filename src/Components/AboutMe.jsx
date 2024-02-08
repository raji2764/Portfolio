// eslint-disable-next-line no-unused-vars
import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center pt-2 pb-10">
      <div className="text-justify p-6 md:w-1/2">
        <h1 className="text-2xl font-bold text-center mt-2 mb-5 border-b-2 border-blue-500">
          About Me
        </h1>
        <p className="text-lg md:text-xl">
          I am a passionate full-stack web developer with a keen interest in web development. I am a quick learner and a team player who is always ready to learn new technologies and work on challenging projects. I am currently looking for a full-time opportunity in web development.
          <br />
          <br />
          My educational background includes a Bachelor of Technology in Information Technology from RMK Engineering College.
          <br />
          <br />I have experience in projects such
          <span className=" font-semibold mx-2 decoration-light-blue-600">
            Full Stack Web Development,MERN stack projects and Machine Learning.
          </span>
          <br />
          <br />I have completed various projects, including
          <span className="font-semibold mx-2 decoration-light-blue-600">
            a rock paper scissors game,chatGPT clone,a bookStore app and college symposium registration website.
          </span>
          which demonstrate my technical expertise and attention to detail.
          <br />
        </p>
      </div>
    </div>
    
  );
};

export default AboutMe;
