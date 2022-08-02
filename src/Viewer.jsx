import React from 'react';
import { Canvas } from '@react-three/fiber';
import { styled } from '@mui/material';
import Button from '@mui/material/Button';

import { Html } from '@react-three/drei';
import Box from './Box';
import Camera from './Camera';
import Controls from './MainPage/Controls';

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

  const [open, setOpen] = React.useState(false);
  const [directionalLight, setDirectionalLight] = React.useState({ active: true });

  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <CanvasWrapper>
      <Canvas>
        <Camera />
        {directionalLight.active && <directionalLight position={[10, 10, 10]} intensity={5} />}
        <Box position={[0, 0, 0]} material={material} />
        <Html fullscreen>
          {!open && (
          <ControlsButton
            onClick={toggleDrawer}
          >
            Controls
          </ControlsButton>
          )}
        </Html>
      </Canvas>
      <Controls toggleDrawer={toggleDrawer} open={open} setDirectionalLight={setDirectionalLight} />
    </CanvasWrapper>
  );
}

const CanvasWrapper = styled('div')`
  background-color: gray;
  margin-top: 64px;
  width: 100vw;
  height: 70vh;
`;

const ControlsButton = styled(Button)`
  position: absolute; 
  left: 90%; 
  top: 5%; 
  background-color: white;
  color: black;

  :hover{
  background-color: white;
  box-shadow: 5px 10px 18px black;
  }
`;
