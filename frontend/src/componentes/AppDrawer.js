import React from 'react'
import { withRouter } from 'react-router-dom';
import clsx from 'clsx'

import { AppBar, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import HomeIcon from '@material-ui/icons/Home'
import GamesIcon from '@material-ui/icons/Games';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import UnarchiveIcon from '@material-ui/icons/Unarchive';
import ArchiveIcon from '@material-ui/icons/Archive';

const drawerWidth = 240
const useStyles = makeStyles((theme) => ({
	root: {
	  display: 'flex',
	},
	appBar: {
	  zIndex: theme.zIndex.drawer + 1,
	  transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	  }),
	},
	appBarShift: {
	  marginLeft: drawerWidth,
	  width: `calc(100% - ${drawerWidth}px)`,
	  transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	  }),
	},
	menuButton: {
	  marginRight: 36,
	},
	hide: {
	  display: 'none',
	},
	drawer: {
	  width: drawerWidth,
	  flexShrink: 0,
	  whiteSpace: 'nowrap',
	},
	drawerOpen: {
	  width: drawerWidth,
	  transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	  }),
	},
	drawerClose: {
	  transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	  }),
	  overflowX: 'hidden',
	  width: theme.spacing(7) + 1,
	  [theme.breakpoints.up('sm')]: {
		width: theme.spacing(9) + 1,
	  },
	},
	toolbar: {
	  display: 'flex',
	  alignItems: 'center',
    justifyContent: 'flex-end',
	  padding: theme.spacing(0, 1),
	  // necessary for content to be below app bar
	  ...theme.mixins.toolbar,
	},
	title: {
		flexGrow: 1,
		textAlign: "center",
	},
	content: {
	  flexGrow: 1,
	  padding: theme.spacing(3),
	},
}));

const AppDrawer = (props) => {
    const { history } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);


    const handleDrawerOpen = () => {
        setOpen(true);
    };
    
      const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const itemsList = [
        {
            text: 'Home',
            icon: <HomeIcon />,
            onClick: () => history.push('/')
        },
        {
            text: 'Registrar títulos',
            icon: <GamesIcon />,
            onClick: () => history.push('/register/title')

        },
        {
            text: 'Registrar juegos',
            icon: <SportsEsportsIcon />,
            onClick: () => history.push('/register/game')

        },
        {
            text: 'Ofertas recibidas',
            icon: <ArchiveIcon />,
            onClick: () => history.push('/offers/recieved')
		},
		{
            text: 'Ofertas realizadas',
            icon: <UnarchiveIcon />,
            onClick: () => history.push('/offers/registered')

        },
    ];

    return (
        <div className={classes.root}>
			<CssBaseline />
            <AppBar
              style={{backgroundColor: '#7a0018'}}
                position="fixed"
                className={clsx(classes.appBar, {
                	[classes.appBarShift]: open,
				})}
            >
                <Toolbar>
                <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                        [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                <Typography variant="h5" noWrap >
                    DigitalGem
                </Typography>
                
				<IconButton
					aria-label="account of current user"
					aria-controls="menu-appbar"
					aria-haspopup="true"
					onClick={handleMenu}
					color="inherit"
                >
                    <AccountCircle />
                </IconButton>
					<Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        open={openMenu}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Perfil</MenuItem>
                        <MenuItem onClick={handleClose}>Mi cuenta</MenuItem>
                    </Menu>
                
                </Toolbar>
            </AppBar>
            <Drawer 
                variant="permanent"
                className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
                })}
                classes={{
                paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
                }),
                }}
            >
                <div className={classes.toolbar}>
                  <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                  </IconButton>
                </div>
                <Divider />
                <List>
                  {itemsList.map((item, index) => {
                      const { text, icon, onClick } = item;
                      return (
                          <ListItem button key={text} onClick={onClick}>
                            <ListItemIcon>{icon}</ListItemIcon>
                            <ListItemText primary={text} />
                          </ListItem>
                      );
                  })}
                </List>
            </Drawer>
        </div>
    )
}

export default withRouter(AppDrawer);
