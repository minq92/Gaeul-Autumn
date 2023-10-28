import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import picture2 from "../../../../assets/ETC/2.webp"

export default function ETC2() {
  return (
    <Card sx={{ maxWidth: 320 }}>
      <CardMedia
        sx={{ height: 250 }}
        image={picture2}
      />
      <CardContent>
        <Typography variant="body1" color="text.secondary">
            The commencement ceremony of the University of Tokyo (Mar 23, 2023)
        </Typography>
      </CardContent>
    </Card>
  );
}