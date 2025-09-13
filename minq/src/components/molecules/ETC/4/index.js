import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import picture4 from "../../../../assets/ETC/4.webp"

export default function ETC4() {
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
        image={picture4}
        alt="ETC4"
        sx={{ 
          height: 250,       
          objectFit: 'cover'  
        }}
      />

      {/* 텍스트 영역 3줄 제한 */}
      <CardContent sx={{ padding: 2 }}>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: 3,      // 최대 3줄
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          Algebraic Approaches to mapping class groups of surfaces, the University of Tokyo (2025)
        </Typography>
      </CardContent>
    </Card>
  );
}
