import * as React from 'react';
import Drawer from '@mui/material/Drawer';

export default function Controls({ toggleDrawer, open }) {
  return (
    <React.Fragment key="Controls">
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer}
      >
        <div>hello</div>
      </Drawer>
    </React.Fragment>
  );
}
