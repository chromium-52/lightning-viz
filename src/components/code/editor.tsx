import React from 'react';
import Grid from '@mui/material/Grid';
import Cell, { CellProps } from './cell';
import styled from 'styled-components';

interface EditorProps {}

const EditorContainer = styled(Grid)`
  padding: 10px;
`;

const Editor: React.FC<EditorProps> = () => {
  const mockCellData: CellProps[] = [
    { language: 'Py' },
    { language: 'SQL' },
    { language: 'R' },
  ];

  return (
    <EditorContainer container direction='column' gap='20px'>
      {mockCellData.map((cellData) => (
        <Cell {...cellData} />
      ))}
    </EditorContainer>
  );
};

export default Editor;
