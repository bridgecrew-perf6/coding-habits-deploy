import React from "react";
import { createTheme, ThemeProvider, responsiveFontSizes, Button } from "@mui/material";
import { Box, Grid, Typography } from "@mui/material";
import CourseCard from "./CourseCard";

function Courses() {
  const courses = [
    {
      name: "JavaScript",
      description:
        "JavaScript is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages.",
      img: "img/jsLogo.png",
    },
    {
      name: "HTML",
      description:
        "HyperText Markup Language (HTML) is the set of markup symbols or codes inserted into a file intended for display on the Internet.",
      img: "img/htmlLogo.png",
    },
    {
      name: "Datastructures",
      description:
        "Programming languages all have built-in data structures.This article attempts to list the built-in data structures available in JavaScript.",
      img: "img/datastructures.png",
    },
    {
        name: "React",
        description:
          "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
        img: "img/reactLogo.png",
      },
      {
        name: "Redux",
        description:
          "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
        img: "img/reduxLogo.png",
      },
      {
        name: "NodeJS",
        description:
          "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
        img: "img/nodeLogo.png",
      },
      
  ];

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  const gradiantCourses = {
    background: "-webkit-linear-gradient(180deg,#03DAC6 60%, #0a0e3b)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box width="100%" height="auto" bgcolor="white" display="flex">
          <Box margin="auto" paddingX="14%" paddingY="2%">
            <Box width="100%">
              <Typography
                color="black"
                variant="h2"
                fontWeight={1000}
                sx={gradiantCourses}
              >
                Courses
              </Typography>
            </Box>
            <Box width="100%" paddingY="2%">
              <Grid container columnSpacing={{ xs: 10 }} rowSpacing={5}>
                {courses.map((course, i) => (
                  <Grid
                    item
                    key={i}
                    xs={12}
                    sm={6}
                    lg={3}
                    display="flex"
                  >
                    <CourseCard {...course}/>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Box>
        <Box display="flex" bgcolor="white" paddingY="2%"><Box margin="auto"><Button variant="text">See all courses...</Button></Box></Box>
      </ThemeProvider>
    </>
  );
}

export default Courses;
