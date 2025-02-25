import * as React from 'react';
import { AppBar, Toolbar, Typography, CssBaseline, Box, Fab, Fade, Drawer, IconButton, Button, List, ListItem, ListItemIcon, ListItemText, useScrollTrigger } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import { MenuItems } from './data/menuItems';

interface Props {
    window?: () => Window;
    children?: React.ReactElement;
}

// const handleScroll = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//     }
// };

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

    const menuItems = MenuItems();

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar sx={{ backgroundColor: 'black' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Finance Emission Computation
                    </Typography>

                    <IconButton
                        color="inherit"
                        aria-label="menu"
                        edge="end"
                        onClick={toggleDrawer(true)}
                        sx={{ display: { xs: 'block', md: 'none' }, color: 'white' }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {menuItems.map((item) => (
                            <Button
                                key={item.text}
                                sx={{ color: 'white', m: 2 }}
                                component={RouterLink}
                                to={item.to || "#"}
                                onClick={item.onClick}
                                startIcon={item.icon}
                            >
                                {item.text}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                sx={{ display: { xs: 'block', md: 'none' }, padding: 2 }}
            >
                <Typography sx={{ color: 'black', pt: 2, pb: 1, textAlign: 'center' }}>
                    Menu
                </Typography>
                <List sx={{ padding: 0 }}>
                    <hr />
                    {menuItems.map((item, index) => (
                        <ListItem  key={index} component={RouterLink} to={item.to || "#"} onClick={item.onClick}>
                            <ListItemIcon sx={{ color: 'black' }}>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            <Toolbar id="back-to-top-anchor" />

            <ScrollTop {...props}>
                <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </React.Fragment>
    );
}
