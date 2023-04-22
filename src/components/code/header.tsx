import React from 'react';
import Grid from '@mui/material/Grid';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <Grid container gap='10px' justifyContent='end'>
      <div style={{ marginRight: 'auto' }}>Pipeline</div>
      <div>Develop</div>
      <div>2h5sh8</div>
      <div>Pyspark</div>
    </Grid>
  );
};

export default Header;
