import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { BagIcon, HomeIcon, LeftIcon, NoteIcon, ToggleIcon, TrendIcon } from '../../assests/icon';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250, height: '100%', display: 'flex', flexDirection: 'column', gap: '100px' }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <HomeIcon />
      </List>
      <Divider />
      <List>
        <TrendIcon />
        <NoteIcon />
        <ToggleIcon />
        <BagIcon />
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><LeftIcon /></Button>
      <Drawer open={open} onClose={toggleDrawer(false)} sx={{backgroundColor:'grey'}}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
