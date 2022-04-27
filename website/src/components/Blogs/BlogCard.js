import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

function BlogCard({ name, description, category, color }) {
  return (
    <Box margin="auto">
      <Card sx={{ minWidth: 400, backgroundColor:"#171716", borderTop: `3px solid ${color}` }} raised={true}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color={color} gutterBottom>
          {category}
        </Typography>
        <Typography variant="h2" component="div" color="white" gutterBottom>
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="#41423e">
          {description}
        </Typography>
      </CardContent>
    </Card>
    </Box>
  );
}

export default BlogCard;
