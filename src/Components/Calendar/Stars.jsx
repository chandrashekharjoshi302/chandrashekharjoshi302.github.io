import { Box, SimpleGrid, useColorMode } from "@chakra-ui/react";
import React from "react";
import "./Stars.css";
import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

export const Stars = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div
      className="stars_container"
      style={{
        backgroundColor: colorMode == "light" ? "#edf2f8" : "#1a202c",
      }}
    >
      <div className="main_box">
        <Desktop>
          <div className="star_header">
            <h2>
              Github <span>Statistics</span>
            </h2>
          </div>
          <div className="box1">
            <a href="https://github.com/chandrashekharjoshi302">
              <img src="https://github-readme-streak-stats.herokuapp.com?user=chandrashekharjoshi302&theme=github-light&border_radius=5" />
            </a>
          </div>
          <div className="box2">
            <SimpleGrid columns={[1, 1, 1, 1]}>
              
              <Box>
                <a href="https://github.com/chandrashekharjoshi302">
                  <img
                    align="center"
                    src="https://github-readme-stats.vercel.app/api?username=chandrashekharjoshi302&count_private=true&show_icons=true"
                  />
                </a>
              </Box>
            </SimpleGrid>
          </div>
        </Desktop>

        <Tablet>
          <div className="star_header">
            <h2>
              Github <span>Statistics</span>
            </h2>
          </div>
          <div className="box1">
            <a href="https://github.com/chandrashekharjoshi302">
              <img src="https://github-readme-streak-stats.herokuapp.com?user=chandrashekharjoshi302&theme=github-light&border_radius=5" />
            </a>
          </div>
          <div className="box2">
            <SimpleGrid columns={[1, 1, 1, 1]}>
              <Box>
                <a href="https://github.com/chandrashekharjoshi302">
                  <img
                    align="center"
                    src="https://github-readme-stats.vercel.app/api?username=chandrashekharjoshi302&count_private=true&show_icons=true"
                  />
                </a>
              </Box>
            </SimpleGrid>
          </div>
        </Tablet>

        <Mobile>
          <div className="star_header">
            <h2>
              Github <span>Statistics</span>
            </h2>
          </div>
          <div className="box1">
            <a href="https://github.com/chandrashekharjoshi302">
              <img src="https://github-readme-streak-stats.herokuapp.com?user=chandrashekharjoshi302&theme=github-light&border_radius=5" />
            </a>
          </div>
          <div className="box2">
            <SimpleGrid columns={[1, 1, 1, 1]}>
              <Box>
                <a href="https://github.com/singhprakash14">
                  <img
                    align="center"
                    src="https://github-readme-stats.vercel.app/api?username=chandrashekharjoshi302&count_private=true&show_icons=true"
                  />
                </a>
              </Box>
            </SimpleGrid>
          </div>
        </Mobile>
      </div>
    </div>
  );
};
