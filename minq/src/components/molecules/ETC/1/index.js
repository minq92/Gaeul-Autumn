import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import picture1 from "../../../../assets/ETC/1.jpeg"


export default function ETC1() {
  return (
    // <Card sx={{ maxWidth: 345 }}>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 250 }}
        image={picture1}
      />
      <CardContent>
        <Typography variant="body1" color="text.secondary">
            The social service activity at a welfare center in Korea (Oct 19, 2021)
        </Typography>
      </CardContent>
    </Card>
  );
}