
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { BagIcon, HomeIcon, NoteIcon, ToggleIcon, TrendIcon } from '../../assests/icon';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function TabsMenu() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    // <Box
    //   sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    // >
      <Tabs
        orientation="vertical"
        // variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label={<HomeIcon />} {...a11yProps(0)} />
        <Tab label={<TrendIcon />} {...a11yProps(1)} />
        <Tab label={<NoteIcon />} {...a11yProps(2)} />
        <Tab label={<ToggleIcon />} {...a11yProps(3)} />
        <Tab label={<BagIcon />} {...a11yProps(4)} />
      </Tabs>
    //    <TabPanel value={value} index={0}>
    //     Item One
    //   </TabPanel>
    //   <TabPanel value={value} index={1}>
    //     Item Two
    //   </TabPanel>
    //   <TabPanel value={value} index={2}>
    //     Item Three
    //   </TabPanel>
    //   <TabPanel value={value} index={3}>
    //     Item Four
    //   </TabPanel>
    //   <TabPanel value={value} index={4}>
    //     Item Five
    //   </TabPanel>
    //   <TabPanel value={value} index={5}>
    //     Item Six
    //   </TabPanel>
    //   <TabPanel value={value} index={6}>
    //     Item Seven
    //   </TabPanel> 
    // </Box>
  );
}
