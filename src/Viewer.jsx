import React from 'react';
import { Canvas } from '@react-three/fiber';
import { styled } from '@mui/material';
import Box from './Box';
import Camera from './Camera';

export default function Viewer({ tabValue }) {
  let material;
  switch (tabValue) {
    case 0:
      material = <meshPhongMaterial color="orange" />; break;
    case 1:
      material = <meshLambertMaterial color="blue" />; break;
    case 2:
      material = <meshNormalMaterial />; break;
    case 3:
      material = <meshToonMaterial color="green" />; break;
    case 4:
      material = <meshPhongMaterial wireframe />; break;
    default:
      material = <meshBasicMaterial color="hotpink" />; break;
  }

  return (
    <CanvasWrapper>
      <Canvas>
        <Camera />
        <pointLight position={[10, 10, 10]} intensity={5} />
        <Box position={[0, 0, 0]} material={material} />
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
