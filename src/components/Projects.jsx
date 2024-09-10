import React from "react";
import ProjectItem from "./ProjectItem";
import propertyImg from "../assets/JessHomes-web.jpg";
import cryptoImg from "../assets/defi-web.jpg";
import netflixImg from "../assets/loginscreen-web.jpg";
import twitchImg from "../assets/developer-web.jpg";

const Projects = () => {
  return (
    <div id="projects" className=" m-auto md:pl-20 py-16">
      <h1 className="text-6xl font-bold text-center text-transparent bg-gradient-to-r from-orange-500 to-sky-500 bg-clip-text">Projects</h1>
      <p className="text-center mb-3 mt-2 py-8">
        Web Design is just the beginning of what we will do together... 
      </p>

      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={cryptoImg} title="Crypto App" />
        <ProjectItem img={propertyImg} title="Property App" />
        <ProjectItem img={netflixImg} title="Netflix App" />
        <ProjectItem img={twitchImg} title="Twitch App" />
      </div>
    </div>
  );
};

export default Projects;
