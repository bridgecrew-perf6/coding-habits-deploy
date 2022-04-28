import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import BackGround from "@site/static/img/backgroundimg.jpg";
import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material";

function Header() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box height="65vh" bgcolor="#08090b">
          <Grid container>
            <Grid item md={6} xs={12}>
              <Box
                height="65vh"
                display="flex"
                sx={{
                  backgroundImage: "linear-gradient(to right,#03002e,#08090b)",
                }}
              >
                <Box width="70%" margin="auto">
                  <Box>
                    <Typography color="#F0DB4F" variant="h2" fontWeight="500">
                      Learn
                    </Typography>
                    <Typography variant="h2" fontWeight="500" color="white">
                      Programming
                    </Typography>
                    <Typography variant="h2" fontWeight="500" color="white">
                      Interactively
                    </Typography>
                  </Box>
                  <br />
                  <Box>
                      <Typography
                        variant="subtitle1"
                        fontSize={screen.width < 500 ? "120%" : "150%"}
                        color="white"
                      >
                        Learn to code interactively with <Typography component="span" variant="subtitle1"  fontSize="inherit" color="#F0DB4F">codingHabits</Typography> and build
                        a great profile with our guidence to secure an awesome
                        career
                      </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item md={6} sm={0}>
              <Box
                bgcolor="#08090b"
                height="65vh"
                display={screen.width < 500 ? "none" : "flex"}
              >
                <Box
                  component="img"
                  src={BackGround}
                  alt="codningHabits"
                  height="auto"
                  width="100%"
                ></Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default Header;
