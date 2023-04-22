import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import styled from 'styled-components';

interface DiagramProps {}

const DiagramTab = styled(Tab)`
  & .MuiTab-root {
    background-color: red;
  }
`;

const Diagram: React.FC<DiagramProps> = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange}>
      <DiagramTab icon={<PhoneIcon />} aria-label='phone' />
      <DiagramTab icon={<FavoriteIcon />} aria-label='favorite' />
      <DiagramTab icon={<PersonPinIcon />} aria-label='person' />
    </Tabs>
  );
};

export default Diagram;
