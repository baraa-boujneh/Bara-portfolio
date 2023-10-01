import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link } from "@chakra-ui/react";
import ProjectsSection from "./ProjectsSection";
import ContactMeSection from "./ContactMeSection";
import { Routes, Route } from "react-router-dom";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: baraboujneh@outlook.com",
    id: 1,
  },
  {
    icon: faGithub,
    url: "https://github.com/baraa-boujneh",
    id: 2,
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/bara-boujneh-5b208b231/",
    id: 3,
  },
  {
    icon: faTwitter,
    url: "https://twitter.com/BaraBoujneh",
    id: 4,
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/21441917/bara-boujneh?tab=profile",
    id: 5,
  },
];

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);
  return scrollDirection;
};

const Header = () => {
  const scrollDirection = useScrollDirection();
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={
        scrollDirection === "down" ? "translateY(-200px)" : "translateY(0)"
      }
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex="1"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          {/* Add social media links based on the `socials` data  */}
          <nav>
            <HStack spacing={10}>
              {socials.map((element) => (
                <a key={element.id} href={element.url}>
                  <FontAwesomeIcon icon={element.icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>

          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}

              <a href="/#projects" onClick={handleClick("projects")}>
                Projects
              </a>
              <a href="/#contact-me" onClick={handleClick("contactme")}>
                Contact
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;