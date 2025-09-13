import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import picture3 from "../../../../assets/ETC/3.webp"

export default function ETC3() {
  return (
    <Card 
      sx={{ 
        width: 500,          // 카드 너비 고정
        height: 320,         // 카드 전체 높이 고정
        display: 'flex',     
        flexDirection: 'column' 
      }}
    >
      {/* 이미지 영역 */}
      <CardMedia
        component="img"
        image={picture3}
        alt="ETC3"
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
          The 19th EACGT, RIMS (2024)
        </Typography>
      </CardContent>
    </Card>
  );
}
