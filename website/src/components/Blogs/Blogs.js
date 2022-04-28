import React from "react";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
  Button,
} from "@mui/material";
import { Box, Grid, Typography } from "@mui/material";
import BlogCard from "./blogCard";
import ColorGenerator from "../ColorGenerator/ColorGenerator";
import data from "../../../.docusaurus/docusaurus-plugin-content-blog/default/blog-archive-80c.json";
import Link from '@docusaurus/Link';


function Blogs() {
  let blogData = data.blogPosts;
  console.log(blogData);

  const courses = [
    {
      name: "JavaScript",
      description:
        "JavaScript is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages.",
      category: "JAVASCRIPT",
      color: ColorGenerator(),
    },
    {
      name: "HTML",
      description:
        "HyperText Markup Language (HTML) is the set of markup symbols or codes inserted into a file intended for display on the Internet.",
      category: "HTML & CSS",
      color: ColorGenerator(),
    },
    {
      name: "Datastructures",
      description:
        "Programming languages all have built-in data structures.This article attempts to list the built-in data structures available in JavaScript.",
      category: "COMPUTER SCIENCE",
      color: ColorGenerator(),
    },
    {
      name: "React",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      category: "FRAMEWORK",
      color: ColorGenerator(),
    },
    {
      name: "Redux",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      category: "FRAMEWORK",
      color: ColorGenerator(),
    },
    {
      name: "NodeJS",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      category: "FRAMEWORK",
      color: ColorGenerator(),
    },
  ];

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box width="100%" height="auto" bgcolor="#171716">
          <Box paddingTop="3%" paddingLeft="3%">
            <img src="img/Blog.png" width="300vw" heigth="auto"></img>
          </Box>
          <Box
            width="100%"
            heigth="auto"
            paddingTop="2%"
            paddingBottom="5%"
            paddingX={screen.width < 400 ? "0" : "2%"}
          >
            <Grid container columnSpacing={5} rowSpacing={5}>
              {blogData.map((item, i) => (
                <Grid item key={i} xs={12} sm={4} lg={4} display="flex">
                  <Link to={item.metadata.permalink} >
                  <BlogCard
                    name={item.metadata.title}
                    date={item.metadata.formattedDate}
                    color={ColorGenerator()}
                    description={item.metadata.description}
                  />
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
        <Box display="flex" bgcolor="#171716" paddingY="2%">
          <Box margin="auto">
            <Button variant="text">See all blogs...</Button>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default Blogs;
