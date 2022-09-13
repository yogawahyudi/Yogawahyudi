import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SwitchTheme from '../Button/SwitchTheme';
import ScrollToColor from './ScrollToColor';
import SocialList from '../SocialList/SocialList';
import { Stack } from '@mui/material';
import Link from "../../Link"

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Project', 'Contact'];
const navUrl = ['/', '/about', '/project', '/contact'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Yoga Wahyudi
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, i) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{display:"flex", justifyContent:"center" }}>
            <Button variant="link" component={Link} href={navUrl[i]} key={item} >
                    {item}
                </Button>
            </ListItemButton>
          </ListItem>
        ))}
          <ListItem key="social" disablePadding sx={{ justifyContent: 'center', display: "flex" }}>
           <SwitchTheme />
          </ListItem>
      </List>
      <Box sx={{
        position:"absolute",
        bottom:"0px",
        marginBottom:"20px",
        width:"100%"
      }}>
        <Stack direction="column" spacing={2}>
          <SocialList />
          <Typography variant="body2">
            Create with &hearts;
          </Typography>
        </Stack>
      </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
    <ScrollToColor>
      <AppBar component="nav" enableColorOnDark>
            <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
            >
                <MenuIcon />
            </IconButton>
            <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
                Yoga Wahyudi
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navItems.map((item, i) => (
                <Button variant="link" component={Link} href={navUrl[i]} key={item}>
                    {item}
                </Button>
                ))}
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <SwitchTheme  />
            </Box>
            </Toolbar>
      </AppBar>
    </ScrollToColor>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};



export default DrawerAppBar;
