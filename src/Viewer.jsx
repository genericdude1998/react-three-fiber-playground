import React from 'react';
import { Canvas } from '@react-three/fiber';
import Box from './Box';

function Viewer() {
  return (
    <div>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
      </Canvas>
      ,
    </div>
  );
}

export default Viewer;
