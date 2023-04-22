import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import PlayIcon from '@mui/icons-material/PlayArrowRounded';
import UpIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import DownIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another
import styled from 'styled-components';

export interface CellProps {
  readonly language: string;
}

interface CellHeaderProps {
  readonly language: string;
  readonly toggleShowCode: () => void;
}

const CodeEditor = styled(Editor)`
  font-family: 'Fira code', 'Fira Mono', monospace;
  font-size: 12px;
`;

const CellHeader: React.FC<CellHeaderProps> = ({
  language,
  toggleShowCode,
}) => {
  return (
    <Grid container>
      <div style={{ marginRight: 'auto' }}>{language}</div>
      <PlayIcon />
      <UpIcon onClick={toggleShowCode} />
    </Grid>
  );
};

const Cell: React.FC<CellProps> = ({ language }) => {
  const [showCode, setShowCode] = useState<boolean>(true);
  const [code, setCode] = useState(`function add(a, b) {\n  return a + b;\n}`);

  const toggleShowCode = () => setShowCode(!showCode);

  return (
    <>
      <CellHeader language={language} toggleShowCode={toggleShowCode} />
      {showCode && (
        <CodeEditor
          value={code}
          onValueChange={(code) => setCode(code)}
          highlight={(code) => highlight(code, languages.js)}
          padding={10}
        />
      )}
    </>
  );
};

export default Cell;
