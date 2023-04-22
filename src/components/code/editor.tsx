import React from 'react';
import Cell, { CellProps } from './cell';

interface EditorProps {}

const Editor: React.FC<EditorProps> = () => {
  const mockCellData: CellProps[] = [
    {
      language: 'Python',
    },
  ];

  return (
    <>
      {mockCellData.map((cellData) => (
        <Cell {...cellData} />
      ))}
    </>
  );
};

export default Editor;
