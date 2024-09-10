import React from "react";
import ProjectItem from "./ProjectItem";
import propertyImg from "../assets/JessHomes-web.jpg";
import cryptoImg from "../assets/defi-web.jpg";
import netflixImg from "../assets/loginscreen-web.jpg";
import twitchImg from "../assets/developer-web.jpg";

const Projects = () => {
  return (
    <div id="projects" className=" m-auto  py-16">
      <h1 className="text-6xl font-bold text-center text-transparent bg-gradient-to-r from-orange-500 to-sky-500 bg-clip-text">Projects</h1>
      <p className="md:text-2xl sm:text-xl text-lg text-center mb-3 mt-2 py-8">
        Web Design is just the beginning of what we will do together... 
      </p>

      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={cryptoImg} title="Crypto App" urllink="https://jason-black.github.io/website-react2/" aabout={"Demo"} rrel="noopener noreferrer" ttarget="_blank" />
        <ProjectItem img={propertyImg} title="Property App" urllink="https://www.jess.homes/" aabout={"Wordpress"} rrel="noopener noreferrer" ttarget="_blank" />
        <ProjectItem img={netflixImg} title="Login App" urllink="https://jason-black.github.io/vite-html-login/" aabout={"TailwindCSS"}rrel="noopener noreferrer" ttarget="_blank" />
        <ProjectItem img={twitchImg} title="Portfolio App" urllink="https://www.jasons.online/" aabout={"React"} rrel="noopener noreferrer" ttarget="_blank" />
      </div>
    </div>
  );
};

export default Projects;
