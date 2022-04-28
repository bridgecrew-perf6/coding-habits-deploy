import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

function ChallengeCard({ name, description, category, color }) {
  return (
    <Box margin="auto">
      <Card sx={{ backgroundColor:"white", borderTop: `3px solid ${color}` }} raised={true}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color={color} gutterBottom>
          {category}
        </Typography>
        <Typography variant="h2" component="div" gutterBottom color="black">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="#323330">
          {description}
        </Typography>
      </CardContent>
    </Card>
    </Box>
  );
}

export default ChallengeCard;
