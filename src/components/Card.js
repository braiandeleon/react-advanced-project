import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return <article class="card">
    <header>
      <h2>{title}</h2>
    </header>
    <img src={imageSrc} alt={imageSrc}/>
    <div class="content">
      <p> {description} </p>
    </div>
    <div>
      See more
      <FontAwesomeIcon icon={faArrowRight} size="1x" />
    </div> 

  </article>
  
};

export default Card;
