import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Button, ListItemIcon } from '@mui/material';
import { Link } from 'react-router-dom';
import { MenuItems } from './data/menuItems'; 
import { Link as RouterLink } from 'react-router-dom';

interface Props {
    window?: () => Window;
    children?: React.ReactElement<unknown>;
}

interface MenuItem {
    text: string;
    icon?: React.ReactNode;
    onClick?: () => void;
    to?: string; 
}

const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
};

function ScrollTop(props: Props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const anchor = (
            (event.target as HTMLDivElement).ownerDocument || document
        ).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({
                block: 'center',
            });
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

    const menuItems: MenuItem[] = MenuItems();

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
                            <Box sx={{ m: 2 }} key={item.text}>
                                {item.onClick ? (
                                    <Button onClick={item.onClick} startIcon={item.icon} sx={{ color: 'white' }}>
                                        {item.text}
                                    </Button>
                                ) : (
                                    <Button
                                        sx={{ color: 'white' }}
                                        onClick={() => {
                                            const linkTo = item.to || "#"; 
                                            if (linkTo === "#") {
                                                handleScroll(linkTo.substring(1));
                                            } else if (linkTo.startsWith("/")) {
                                                return <RouterLink to={linkTo} style={{ textDecoration: 'none', color: 'white' }} />;
                                            } else {
                                                window.open(linkTo, '_blank');
                                            }
                                        }}
                                    >
                                        {item.text}
                                    </Button>
                                )}
                            </Box>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer
    anchor="right"
    open={drawerOpen}
    onClose={toggleDrawer(false)}
    sx={{
        display: { xs: 'block', md: 'none' },
        padding: 2,
    }}
>
    <Typography sx={{ color: 'black', pt: 2, pb: 1, textAlign: 'center' }}>
        Menu
    </Typography>
    <List sx={{ padding: 0 }}>
        <hr />
        {menuItems.map((item, index) => (
            <ListItem key={index}>
                <ListItemIcon sx={{ color: 'black' }}>{item.icon}</ListItemIcon>
                <ListItemText
                    primary={
                        <Button
                            sx={{ color: 'black' }}
                            onClick={() => {
                                const linkTo = item.to || "#";
                                if (linkTo === "#") {
                                    handleScroll(linkTo.substring(1)); 
                                } else if (linkTo.startsWith("/")) {
                                    return (
                                        <Link to={linkTo} style={{ textDecoration: 'none' }}>
                                            <Button sx={{ color: 'black' }}>
                                                {item.text}
                                            </Button>
                                        </Link>
                                    );
                                } else {
                                    window.location.href = linkTo;
                                }
                            }}
                        >
                            {item.text}
                        </Button>
                    }
                />
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
