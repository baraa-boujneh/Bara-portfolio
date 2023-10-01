import { Heading, HStack, Image, Text, VStack, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
<VStack
      color="#000"
      fontWeight="light"
      alignItems="left"
      bg="#fff"
      fontSize="md"
      borderRadius="2xl"
    >
      <img src={imageSrc} style={{borderRadius:"0.6rem",width:"100%",height:"300px"}}/>

      <Heading as="h3" size="xl" p={3}>
        {title}
      </Heading>
      <Text p={3}>{description}</Text>
      <HStack p={3}>
        <Link href="#">See more </Link>

        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>



  )
};

export default Card;
