import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: baraboujneh@outlook.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/baraa-boujneh",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/bara-boujneh-5b208b231/",
  },
  {
    icon: faTwitter,
    url: "https://twitter.com/BaraBoujneh",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/21441917/bara-boujneh?tab=profile",
  },
];

function Header (){
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
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="black"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
             {socials.map((child,index)=>{
               return(
                <a key={index} style={{display:"inline-block",paddingLeft:"1rem"}} href={child.url}><FontAwesomeIcon icon={child.icon} size="2x"/></a>
        )
       })}
          </nav>
          <nav>
            <HStack spacing={8}>
               <a  href="#projects" onClick={handleClick("projects")}>Projects</a>
               <a  href="#contact-me"onClick={handleClick("contactme")}>Contact me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
