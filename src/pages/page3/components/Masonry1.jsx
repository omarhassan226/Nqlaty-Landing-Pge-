import React from 'react'
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@mui/material';

const images = ["../../../../public/products2.png", "../../../../public/product5.png", "../../../../public/productShip1.png", "../../../../public/car1.png"];

const Masonry1 = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  if (!isSmallScreen) {
    return (
      <Box sx={{  maxWidth: 500, minHeight: 377 }}>
        <Masonry columns={{ xs: 1, sm: 1 }} spacing={2}>
          {images.map((imageSrc, index) => (
              <img key={index} src={imageSrc} alt={`Image ${index}`} style={{ width: '60%' }} />
          ))}
        </Masonry>
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%', maxWidth: 500, minHeight: 377 }}>
      <Masonry columns={{ xs: 1, sm: 2 }} spacing={2}>
        {images.map((imageSrc, index) => (
          <Box key={index} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <img src={imageSrc} alt={`Image ${index}`} style={{ width: '100%' }} />
          </Box>
        ))}
      </Masonry>
    </Box>
  );
};

export default Masonry1;






