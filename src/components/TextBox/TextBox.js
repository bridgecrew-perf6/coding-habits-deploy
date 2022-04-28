import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material";

function TextBox() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box width="100vw" bgcolor="#171716" height="auto">
            <Grid container paddingY="4%">
                <Grid item md={6} xs={12}>
                    <Box width="auto" display="flex" height='100%'> 
                        <Box margin="auto" paddingX={2}>
                        <img src="img/opportunities.png" />
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Box width="auto" display="flex" height='100%'> 
                        <Box margin="auto" paddingX={2}>
                        <Typography fontSize={40} color="#FF6037">MORE THAN 30K ENTRY LEVEL JOBS</Typography>
                        <Typography variant="h1" fontWeight={1000} color="#F0DB4F">Can you grab them ?</Typography>
                        <Typography  component="span" variant="h5" fontWeight={1000} color="#41423e">If "No" is your answer, then you have come to the right place. Here, at <Typography component="span" variant="h5"  color='white'>coding</Typography><Typography component="span" variant="h5"  color="#F0DB4F">Habits</Typography> we provide you the right skills and tools to make you a superstar engineer. Learn fundamentals of prograaming and advanced frameworks interactively from within your browser. Complete challenges and projects to build your profile and we guarentee you a great career!!</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default TextBox;
