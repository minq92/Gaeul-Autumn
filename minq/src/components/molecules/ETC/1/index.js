import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import picture1 from "../../../../assets/ETC/1.webp"

export default function ETC1() {
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
        image={picture1}
        alt="ETC1"
        sx={{ 
          height: 250,        // 이미지 높이 고정
          objectFit: 'cover'  // 이미지 비율 유지하며 잘림
        }}
      />

      {/* 텍스트 영역 */}
      <CardContent 
        sx={{ 
          height: 150,        // 텍스트 영역 높이 고정
          overflow: 'auto',   // 내용이 길면 스크롤
          padding: 2,
        }}
      >
        <Typography variant="body1" color="text.secondary">
          The social service activity at a welfare center in Korea (Oct 19, 2021)
        </Typography>
      </CardContent>
    </Card>
  );
}
