import React from 'react';
import { Canvas } from '@react-three/fiber';
import { styled } from '@mui/material';
import Button from '@mui/material/Button';

import { Html } from '@react-three/drei';
import Box from './Box';
import Camera from './Camera';
import Controls from './MainPage/Controls';

export default function Viewer({ tabValue, geometry }) {
  let material;
  switch (tabValue) {
    case 0:
      material = <meshPhongMaterial />; break;
    case 1:
      material = <meshLambertMaterial />; break;
    case 2:
      material = <meshNormalMaterial />; break;
    case 3:
      material = <meshToonMaterial />; break;
    case 4:
      material = <meshPhongMaterial wireframe />; break;
    default:
      material = <meshBasicMaterial />; break;
  }

  let geometryToDisplay;
  switch (geometry) {
    case 0:
      geometryToDisplay = <planeBufferGeometry args={[15, 15]} />; break;
    case 1:
      geometryToDisplay = <boxGeometry args={[15, 15, 15]} />; break;
    case 2:
      geometryToDisplay = <sphereBufferGeometry args={[15]} />; break;
    case 3:
      geometryToDisplay = <torusBufferGeometry args={[15, 2]} />; break;
    case 4:
      geometryToDisplay = <torusKnotBufferGeometry args={[10, 5]} />; break;
    default:
      geometryToDisplay = <cylinderBufferGeometry args={[10, 10, 25]} />; break;
  }

  const [open, setOpen] = React.useState(false);
  const [directionalLight, setDirectionalLight] = React.useState({ active: true });
  const [directionalLightIntensity, setDirectionalLightIntensity] = React.useState(1);
  const [directionalLightColour, setDirectionalLightColour] = React.useState('#FFFFFF');

  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <CanvasWrapper style={{ pointerEvents: open ? 'none' : 'auto' }}>
      <Canvas>
        <Camera />
        {directionalLight.active
        && (
        <directionalLight
          position={[10, 10, 10]}
          intensity={directionalLightIntensity}
          color={directionalLightColour}
        />
        )}
        <Box position={[0, 0, 0]} material={material} geometry={geometryToDisplay} />
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
      <Controls
        toggleDrawer={toggleDrawer}
        open={open}
        setDirectionalLight={setDirectionalLight}
        directionalLightIntensity={directionalLightIntensity}
        setDirectionalLightIntensity={setDirectionalLightIntensity}
        directionalLightColour={directionalLightColour}
        setDirectionalLightColour={setDirectionalLightColour}
      />
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
