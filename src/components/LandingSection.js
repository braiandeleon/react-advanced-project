import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Ing. Braian de Leon";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar  size='3xl' name='Brian de Leon' src='https://media.licdn.com/dms/image/D5603AQFXkH709HPmQg/profile-displayphoto-shrink_200_200/0/1701668866704?e=1718841600&v=beta&t=DWhsk28PT5l2qObyxytinyCFBp7TZ5Kf4l9lEQ32l9o' />
    <br></br>
    <h1>{greeting}</h1>
    <h3>This page was built using React!</h3>
  </FullScreenSection>
);

export default LandingSection;
