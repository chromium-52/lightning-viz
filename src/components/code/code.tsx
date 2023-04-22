import React from 'react';
import Header from './header';
import Editor from './editor';
import Grid from '@mui/material/Grid';

interface CodeProps {}

const Code: React.FC<CodeProps> = () => {
  return (
    <Grid container direction='column'>
      <Header />
      <Editor />
    </Grid>
  );
};

export default Code;
