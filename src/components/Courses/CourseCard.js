import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';



function CourseCard({name,description,img}) {



  return (
    <>
    <Box margin="auto">
    <Card sx={{ maxWidth: 345, maxHeight:"auto"}} raised={true}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          width="auto"
          image={img}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Box>
    </>
  )
}

export default CourseCard