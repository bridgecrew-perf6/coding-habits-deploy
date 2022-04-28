import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";


function BlogCard({ name, description, date, color }) {
  return (
    <Box margin="auto">
      <Card sx={{ minWidth: 400, backgroundColor:"#171716", borderTop: `3px solid ${color}` }} raised={true}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color={color} gutterBottom>
          {date}
        </Typography>
        <Typography variant="h2" component="div" color="#C8CCC0" gutterBottom sx={{fontWeight: 1000}} > 
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="white">
          {description}
        </Typography>
      </CardContent>
    </Card>
    </Box>
  );
}

export default BlogCard;
