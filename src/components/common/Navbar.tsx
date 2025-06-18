import * as React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Box,
  Fab,
  Fade,
  Drawer,
  IconButton,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useScrollTrigger,
  Divider,
} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import { MenuItems } from './data/menuItems';

interface Props {
  window?: () => Window;
  children?: React.ReactElement;
}

function ScrollTop(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    const anchor = document.querySelector('#back-to-top-anchor');
    if (anchor) {
      anchor.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

export default function Navbar(props: Props) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const handleItemClick = (item: any) => {
    if (item.onClick) item.onClick(); // handle optional onClick
    setDrawerOpen(false); // close drawer after click
  };

  const menuItems = MenuItems();

  return (
    <React.Fragment>
      <CssBaseline />

      <AppBar sx={{ backgroundColor: 'black' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Financed Emission Computation
          </Typography>

          {/* Hamburger icon for small screens */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: 'block', md: 'none' }, color: 'white' }}
          >
            <MenuIcon />
          </IconButton>

          {/* Full menu for medium+ screens */}
          <Box sx={{ display: { xs: 'none',  md: 'flex' } }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                sx={{ color: 'white', m: 2 }}
                component={RouterLink}
                to={item.to || '#'}
                onClick={item.onClick}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for small screens */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Typography variant="h6" sx={{ p: 2, textAlign: 'center' }}>
            Menu
          </Typography>
          <Divider />
          <List>
            {menuItems.map((item, index) => (
              <ListItem
                key={index}
                component={RouterLink}
                to={item.to || '#'}
                onClick={() => handleItemClick(item)}
              >
                <ListItemIcon sx={{ color: 'black' }}>{item.icon}</ListItemIcon>
                <ListItemText secondary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Anchor used for scroll-to-top */}
      <Toolbar id="back-to-top-anchor" />

      {/* Floating scroll-to-top button */}
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top" color="primary">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
