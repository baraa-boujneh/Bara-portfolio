import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Vagabond",
    description:
      "Building a full stack website for travel agency with innovative ways and goals of traveling.",
    getImageSrc: () => require("../asset/vagabond.png"),
  },
  {
    title: "Craftschoolship",
    description:
      "Establishing a full secure online payment and accounting system with odoo ERP and cloud technologies such as Docker and Kubernetes.",
    getImageSrc: () => require("../asset/craftshoolship.png"),
  },
  {
    title: "Littel Lemon",
    description:
      "Develop the template of littel lemon restaurant for better frontend practice.",
    getImageSrc: () => require("../asset/littellemon.png"),
  },
  {
    title: "Emergency vehicles detecter",
    description:
      "Building a smart system for recognizing emergency vehicles for reducing time lost in traffic jam using YOLOV5.",
    getImageSrc: () => require("../asset/ambulance.png"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#769298"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
