import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
<VStack color="#000"
      fontWeight="light"
      alignItems="left"
      bg="#fff"
      fontSize="md"
      borderRadius="2xl">

<img src={imageSrc} style={{borderRadius:"0.6rem",width:"100%",height:"300px"}}/>
<VStack spacing={3} >
<Heading>{title}</Heading>
<Text>{description}</Text>
<HStack  spacing={2}>
  <Text>See more</Text>
  <a href="https"> <FontAwesomeIcon icon={faArrowRight}  /></a>
</HStack>
</VStack>
</VStack>



  )
};

export default Card;
