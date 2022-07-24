import React from 'react';
import { Canvas } from '@react-three/fiber';
import { styled } from '@mui/material';
import Box from './Box';

export default function Viewer() {
  return (
    <CanvasWrapper>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[0, 0, 0]} />
      </Canvas>
      ,
    </CanvasWrapper>
  );
}

const CanvasWrapper = styled('div')`
  background-color: gray;
  margin-top: 64px;
  width: 100vw;
  height: 70vh;
`;
