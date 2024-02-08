/* eslint-disable no-unused-vars */
import { Button } from '@material-tailwind/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserTie } from 'react-icons/fa';
import { MdOutlineDocumentScanner } from 'react-icons/md';
import Rajiii from '../assets/Rajiii.jpg';

const Home = () => {
  return (
    <div className="py-16 min-h-[80vh] md:min-h-[85vh] flex items-center flex-col-reverse lg:flex-row gap-10 justify-center">
      <div className="flex flex-col gap-4 md:gap-6 text-left lg:w-1/2 2xl:w-1/3 mx-6 xl:mx-0 ">
      <p className="text-2xl font-bold text-light-blue-700">Hey👋,</p>
      <p className="text-3xl md:text-5xl font-bold relative">
          I am <span className="text-purple-600 ml-4 uppercase">Rajalakshmi Ganesh</span>
        </p>
        <p className="text-2xl font-bold relative uppercase">Student, B.Tech-Information Technology</p>
        <p className="text-lg md:text-xl font-medium relative">
          I am a passionate and enthusiastic learner who is always willing to learn and work across technologies and domains. I love to explore new technologies and leverage them to solve real-life problems.
        </p>
        <div className="flex flex-row justify-center md:justify-normal gap-4 md:gap-6 mt-5">
          <Link to={"/contact"}>
          <Button className="px-2 py-3 bg-purple-500 text-white flex gap-2 items-center">
              <FaUserTie className="text-lg" />
              Hire Me
            </Button>
          </Link>
          <Link
            to="https://drive.google.com/file/d/1cSV4vt5LRoP9pUW47QYXUMHXLyFQeRf6/view?usp=sharing"
            target="_blank"
          >
            <Button
              className="px-2 py-3 bg-purple-500 text-white flex gap-2 items-center"
            >
              <MdOutlineDocumentScanner className="text-white text-lg" />
              Resume
            </Button>
          </Link>
        </div>
      </div>
      <div>
        <img
          src={Rajiii}
          alt="Rajalakshmi Ganesh - Web Develope"
          className="rounded-full w-55 h-50 md:w-72 md:h-72 object-cover object-center shadow-lg"
          style={{ objectPosition: 'top', marginTop: '-50px' }}
        />
      </div>
    </div>
  );
};

export default Home;
