import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import {
  styled, Switch, Typography, FormGroup, FormControlLabel,
} from '@mui/material';

export default function Controls({ toggleDrawer, open }) {
  return (
    <React.Fragment key="Controls">
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer}
      >
        <StyledControlsContainer>
          <Typography align="center">Controls</Typography>
          <FormGroup>
            <FormControlLabel control={<Switch defaultChecked />} label="Directional Light On/Off" />
          </FormGroup>
        </StyledControlsContainer>
      </Drawer>
    </React.Fragment>
  );
}

const StyledControlsContainer = styled('div')`
  display:flex;
  flex-direction: column;
  width: 300px;
  height: 100%;
  background-color: darkgray;
  padding: 0 20px;
`;
