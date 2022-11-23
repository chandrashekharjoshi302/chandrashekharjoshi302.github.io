import React from "react";
import { Box, SimpleGrid, useColorMode } from "@chakra-ui/react";
import "./Projects.css";
import Youtube from "../Images/youtubereact.png";
import Time from "../Images/home1.png";
import food from "../Images/fhome.png"
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
                  <h2>food App</h2>
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
                      href="https://github.com/singhprakash14/FoodApp"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="deploy_link">
                    <a
                      href="https://taupe-melomakarona-0dfddf.netlify.app"
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
                  <img src={Time} alt="clockify" />
                </div>

                <div className="project_name">
                  <h2>TimeCamp (Group-Project)</h2>
                </div>
                <div className="project_desc">
                  <p>
                  The tool is a time tracking software to invoice the employees work based on an hourly rate, measuring the work effectiveness and project management.
                  </p>
                </div>
                <div className="project_tech_stack">
                  <h5>
                    <span>Tech Stack :</span> Html , JavaScript, CSS,
                    Bootstrap-5.
                  </h5>
                </div>
                <div className="project_icon">
                  <div className="github_link">
                    <a
                      href="https://github.com/singhprakash14/husky-care-7787"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="deploy_link">
                    <a
                      href="https://astonishing-sorbet-368da1.netlify.app"
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
                      href="https://github.com/singhprakash14/Youtube-clone-react/tree/main/project_youtube_clone-main'"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="deploy_link">
                    <a
                      href="https://isnt-singhprakash14-awesome.netlify.app"
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
                      href="https://github.com/singhprakash14/Youtube-clone-react/tree/main/project_youtube_clone-main'"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="deploy_link">
                    <a
                      href="https://isnt-singhprakash14-awesome.netlify.app"
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
