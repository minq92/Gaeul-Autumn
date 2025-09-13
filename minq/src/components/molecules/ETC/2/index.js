import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import picture2 from "../../../../assets/ETC/2.webp"

export default function ETC2() {
  return (
    <Card 
    sx={{ 
      width: 450,          // 카드 너비 고정
      height: 320,         // 카드 전체 높이 고정
      display: 'flex',     
      flexDirection: 'column' 
    }}
    >
      {/* 이미지 영역 */}
      <CardMedia
        component="img"
        image={picture2}
        alt="ETC2"
        sx={{ 
          height: 250,       
          objectFit: 'cover'  
        }}
      />

      {/* 텍스트 영역 */}
      <CardContent 
        sx={{ 
          height: 150,       
          overflow: 'auto',  
          padding: 2,
        }}
      >
        <Typography variant="body1" color="text.secondary">
          The commencement ceremony of the University of Tokyo (Mar 23, 2023)
        </Typography>
      </CardContent>
    </Card>
  );
}
