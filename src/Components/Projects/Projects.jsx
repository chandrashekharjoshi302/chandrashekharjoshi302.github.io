import React from "react";
import { Box, SimpleGrid, useColorMode } from "@chakra-ui/react";
import "./Projects.css";
import Youtube from "../Images/youtubereact.png";
import Time from "../Images/home1.png";
import Everhour from '../Images/everhour.png'
import nykaa from "../Images/nykaa.png";
import food from '../Images/fp.png';
import Apple from '../Images/Appletv.png';
import Bathbody from '../Images/Bathbody.png';

import { FaGithub, FaEye } from "react-icons/fa";

export const Projects = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div
      id="project"
      className="project_main_container"
      style={{
        backgroundColor: colorMode == "light" ? "#edf2f8" : "#1a202c",
      }}
    >
      <div className="project_container">
        <div className="project_heading">
          <h2>
            <span>My</span> Creative <span>Projects </span>Section
          </h2>
        </div>

        <div className="project_grid">
          <SimpleGrid columns={[1, 1, 2, 3]} spacing="40px">
            <Box>
              <div className="project_box">
                <div className="project_image">
                  <img src={food} alt="food" />
                </div>

                <div className="project_name">
                  <h2>Food App</h2>
                </div>
                <div className="project_desc">
                  <p>
                    {/* This website is a clone of "Urban Company" I implimented
                    some functionalities like login & signup for the
                    authentication, add services, buy services, blog page, etc. */}
                    This website show the full receipe instructions and video.
                  </p>
                </div>
                <div className="project_tech_stack">
                  <h5>
                    <span>Tech Stack :</span> JavaScript, API,
                    CSS, Html
                  </h5>
                </div>
                <div className="project_icon">
                  <div className="github_link">
                    <a
                      href="https://github.com/chandrashekharjoshi302/Food_App"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="deploy_link">
                    <a
                      href="https://resonant-tiramisu-70427f.netlify.app/index.html"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaEye />
                    </a>
                  </div>
                </div>
              </div>
            </Box>

            <Box>
              <div className="project_box">
                <div className="project_image">
                  <img src={Everhour} alt="clockify" />
                </div>

                <div className="project_name">
                  <h2>Everhour (Group-Project)</h2>
                </div>
                <div className="project_desc">
                  <p>
                  The tool is a time tracking software to invoice the employees work based on an hourly rate, measuring the work effectiveness and project management.
                  </p>
                </div>
                <div className="project_tech_stack">
                  <h5>
                    <span>Tech Stack :</span> Html , JavaScript, CSS, React,
                    Bootstrap-5.
                  </h5>
                </div>
                <div className="project_icon">
                  <div className="github_link">
                    <a
                      href="https://github.com/chandrashekharjoshi302/hot-caption-4153"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="deploy_link">
                    <a
                      href="https://boisterous-monstera-ea0196.netlify.app/"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaEye />
                    </a>
                  </div>
                </div>
              </div>
            </Box>
            <Box>
              <div className="project_box">
                <div className="project_image">
                  <img src={nykaa} alt="clockify" />
                </div>

                <div className="project_name">
                  <h2>Nykaa (Group-Project)</h2>
                </div>
                <div className="project_desc">
                  <p>
                  Nykaa is an Indian e-commerce company, founded by Falguni Nayar in 2012
                  </p>
                </div>
                <div className="project_tech_stack">
                  <h5>
                    <span>Tech Stack :</span> react-js, axios , Boostrap, API, Charaka-UI
                  </h5>
                </div>
                <div className="project_icon">
                  <div className="github_link">
                    <a
                      href="https://github.com/chandrashekharjoshi302/amazing-pocket-7061"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="deploy_link">
                    <a
                      href="https://63ada1475ad13e35586e0a54--ornate-cupcake-fb26b5.netlify.app/"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaEye />
                    </a>
                  </div>
                </div>
              </div>
            </Box>
            <Box>
              <div className="project_box">
                <div className="project_image">
                  <img src={Youtube} alt="clockify" />
                </div>

                <div className="project_name">
                  <h2>Youtube-clone</h2>
                </div>
                <div className="project_desc">
                  <p>
                  Youtube-clone in react using the Api which provides data and its fully Responsive website.
                  </p>
                </div>
                <div className="project_tech_stack">
                  <h5>
                    <span>Tech Stack :</span> react-js, axios , Boostrap
                  </h5>
                </div>
                <div className="project_icon">
                  <div className="github_link">
                    <a
                      href="https://github.com/chandrashekharjoshi302/project_youtube_clone"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="deploy_link">
                    <a
                      href="https://isnt-bike97867-awesome.netlify.app/"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaEye />
                    </a>
                  </div>
                </div>
              </div>
            </Box>
            <Box>
              <div className="project_box">
                <div className="project_image">
                  <img src={Bathbody} alt="clockify" />
                </div>

                <div className="project_name">
                  <h2>BathBodyWorks</h2>
                </div>
                <div className="project_desc">
                  <p>
                  BathBodyWorks is a retail store chain which came in E-commerce business to sell their products.
                  </p>
                </div>
                <div className="project_tech_stack">
                  <h5>
                    <span>Tech Stack :</span> Html , JavaScript, CSS, React,
                    Bootstrap-5.
                  </h5>
                </div>
                <div className="project_icon">
                  <div className="github_link">
                    <a
                      href="https://github.com/chandrashekharjoshi302/Bath-BodyWorks"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="deploy_link">
                    <a
                      href="https://63b4fed9da28e9102de77106--venerable-meringue-87568a.netlify.app"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaEye />
                    </a>
                  </div>
                </div>
              </div>
            </Box>
            <Box>
              <div className="project_box">
                <div className="project_image">
                  <img src={Apple} alt="clockify" />
                </div>

                <div className="project_name">
                  <h2>Apple Tv+</h2>
                </div>
                <div className="project_desc">
                  <p>
                  Apple Tv
Apple TV is a digital media player and microconsole developed and marketed by Apple Inc.
                  </p>
                </div>
                <div className="project_tech_stack">
                  <h5>
                    <span>Tech Stack :</span> Html , JavaScript, CSS, Boostrap , API
                  </h5>
                </div>
                <div className="project_icon">
                  <div className="github_link">
                    <a
                      href="https://github.com/chandrashekharjoshi302/internal-mark-2946"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="deploy_link">
                    <a
                      href="https://tangerine-speculoos-c19c29.netlify.app/"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaEye />
                    </a>
                  </div>
                </div>
              </div>
            </Box>
          </SimpleGrid>
        </div>
      </div>
    </div>
  );
};
