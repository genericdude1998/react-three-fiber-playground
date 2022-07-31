import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import {
  styled, Switch, Typography, FormGroup, FormControlLabel,
} from '@mui/material';

export default function Controls({ toggleDrawer, open, setDirectionalLight }) {
  const toggleDirectionalLight = () => {
    setDirectionalLight((dir) => ({ ...dir, active: !(dir.active) }));
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
          <Typography align="center">Controls</Typography>
          <FormGroup>
            <FormControlLabel control={<Switch defaultChecked />} label="Directional Light On/Off" onChange={toggleDirectionalLight} />
          </FormGroup>
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
