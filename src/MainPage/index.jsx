import {
  AppBar, Toolbar, Tab, Tabs, styled,
} from '@mui/material';
import React from 'react';
import Viewer from '../Viewer';
import TabPanel from './TabPanel';

export default function MainPage() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabValueChange = (e, newValue) => {
    setTabValue(newValue);
  };

  return (
    <MainPageContainer>
      <AppBar>
        <Toolbar>
          Appbar
        </Toolbar>
      </AppBar>

      <Viewer tabValue={tabValue} />

      <Tabs value={tabValue} onChange={handleTabValueChange}>
        <Tab label="Phong" />
        <Tab label="Lambert" />
        <Tab label="Normal" />
        <Tab label="Toon" />
        <Tab label="Wireframe" />

      </Tabs>

      <TabPanel value={tabValue} index={0}>
        Phong
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        Lambert
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        Item Three
      </TabPanel>

      <TabPanel value={tabValue} index={3}>
        Phong
      </TabPanel>
      <TabPanel value={tabValue} index={4}>
        Item Two
      </TabPanel>
    </MainPageContainer>
  );
}

const MainPageContainer = styled('div')`
  display: flex;
  flex-direction: column;
`;
