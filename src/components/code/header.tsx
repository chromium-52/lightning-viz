import React from 'react';
import Grid from '@mui/material/Grid';
import DevelopIcon from '@mui/icons-material/FeedOutlined';
import styled from 'styled-components';

interface HeaderProps {}

const HeaderContainer = styled(Grid)`
  background-color: #d3d3d3;
  padding: 15px;
  border-top-left-radius: 20px;
`;

const Dot = styled.div`
  border-radius: 100%;
  background-color: yellow;
`;

const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderContainer container gap='10px' justifyContent='end'>
      <div style={{ marginRight: 'auto' }}>Pipeline</div>
      <div>
        <DevelopIcon />
        Develop
      </div>
      <div>2h5sh8</div>
      <div>Pyspark</div>
    </HeaderContainer>
  );
};

export default Header;
