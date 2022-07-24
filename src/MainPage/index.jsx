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
      <Viewer />
      <Tabs value={tabValue} onChange={handleTabValueChange}>
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>

      <TabPanel value={tabValue} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        Item Three
      </TabPanel>
    </MainPageContainer>
  );
}

const MainPageContainer = styled('div')`
  display: flex;
  flex-direction: column;
`;
