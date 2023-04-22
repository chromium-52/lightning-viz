import React from 'react';
import Code from '../components/code/code';
import Diagram from '../components/diagram/diagram';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';

interface LandingProps {}

const PipelineContainer = styled(Grid)`
  width: 80vw;
`;

const Landing: React.FC<LandingProps> = () => {
  return (
    <PipelineContainer container>
      <Grid item xs={7}>
        <Code />
      </Grid>
      <Grid item xs={5}>
        <Diagram />
      </Grid>
    </PipelineContainer>
  );
};

export default Landing;
