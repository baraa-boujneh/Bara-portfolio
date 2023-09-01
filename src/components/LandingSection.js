import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import my_image from '../asset/IMG2.jpg';

const greeting = "Hello, I am Baraa!";
const bio1 = "A Software engineering  student";
const bio2 = "specialised in Nothing advanced Technologies and research";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => {
return(

  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground={false}
    backgroundColor="#dce1dc"
  >
    <VStack spacing={5}>
    <Avatar src={my_image} name="Baraa Boujneh" size='2xl'></Avatar>
    <Heading as='h6'size='xs' >{greeting}</Heading>
    <Heading  as='h1'>{bio1} </Heading>
    <Heading  as='h1'>{bio2}</Heading>
    </VStack>

  </FullScreenSection>
  
)

};

export default LandingSection;
