import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import {
  styled, Switch, Typography, FormGroup, FormControlLabel, IconButton, Slider,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import ColourPicker from '../ColourPicker/ColourPicker';
import GeometryPicker from '../GeometryPicker';

export default function Controls({
  toggleDrawer, open, setDirectionalLight, setDirectionalLightIntensity, directionalLightIntensity,
  setDirectionalLightColour, directionalLightColour, changeGeometry,
}) {
  const toggleDirectionalLight = () => {
    setDirectionalLight((dir) => ({ ...dir, active: !(dir.active) }));
  };
  const changeDirLightIntensity = (e) => {
    setDirectionalLightIntensity(e.target.value);
  };
  const changeDirLightColour = (colour) => () => {
    setDirectionalLightColour(colour);
  };

  return (
    <React.Fragment key="Controls">
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer}
        BackdropProps={{ invisible: true }}
      >
        <StyledControlsContainer>
          <StyledTitle>
            <Typography align="center" sx={{ flexGrow: 1 }}>Controls</Typography>
            <IconButton onClick={toggleDrawer}>
              <Close />
            </IconButton>
          </StyledTitle>

          <StyledControlContainer>
            <FormGroup>
              <FormControlLabel control={<Switch defaultChecked />} label="Directional Light On/Off" onChange={toggleDirectionalLight} />
            </FormGroup>
          </StyledControlContainer>

          <StyledControlContainer>
            <Typography>
              Directional Light Intensity:
              {' '}
              {directionalLightIntensity}
            </Typography>
            <Slider onChange={changeDirLightIntensity} value={directionalLightIntensity} />
          </StyledControlContainer>

          <StyledControlContainer>
            <Typography>
              Directional Light Colour:
            </Typography>
            <ColourPicker
              directionalLightColour={directionalLightColour}
              changeDirLightColour={changeDirLightColour}
            />
          </StyledControlContainer>

          <StyledControlContainer>
            <Typography>
              Geometries:
            </Typography>
            <GeometryPicker
              changeGeometry={changeGeometry}
            />
          </StyledControlContainer>

        </StyledControlsContainer>
      </Drawer>
    </React.Fragment>
  );
}

const StyledControlsContainer = styled('div')`
  display:flex;
  flex-direction: column;
  width: 250px;
  height: 100%;
  background-color: darkgray;
  padding: 0 20px;
`;

const StyledTitle = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledControlContainer = styled('div')`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;
