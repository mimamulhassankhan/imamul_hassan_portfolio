import React from 'react';
import { Hidden, makeStyles } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Introduction from '../Introduction/Introduction';
import { Element, Link } from 'react-scroll';
import Blogs from '../Blogs/Blogs';
import ContactMe from '../ContactMe/ContactMe';
import MoreAboutMe from '../MoreAboutMe/MoreAboutMe';
import RecentProjects from '../RecentProjects/RecentProjects';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
        background: 'transparent'
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: `rgba(10, 10, 10, 0.1)`,
      backdropFilter: `blur(3px)`,
      margin: 'auto',
    },
    content: {
      flexGrow: 1,
      zIndex: 50
    },
  }));

const SideBar = (props) => {
    const { window } = props;
    const classes = useStyles();

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <List>
                <ListItem>
                    <Link activeClass="active rounded cursor-pointer rounded" className="text-decoration-none text-center text-white rounded btn-block acrylic-bg cursor-pointer" to="intro" spy={true} smooth={true} duration={500} offset={0} > Intro </Link>
                </ListItem>
                <ListItem>
                    <Link activeClass="active rounded cursor-pointer rounded" className="text-decoration-none text-center text-white rounded btn-block acrylic-bg cursor-pointer" to="bitMoreAboutMe" spy={true} smooth={true} duration={500} offset={0}> Bit More About Me </Link>
                </ListItem>
                <ListItem>
                    <Link activeClass="active rounded cursor-pointer rounded" className="text-decoration-none text-center text-white rounded btn-block acrylic-bg cursor-pointer" to="recentProjects" spy={true} smooth={true} duration={500} offset={0}> Recent Works </Link>
                </ListItem>
                <ListItem>
                    <Link activeClass="active rounded cursor-pointer rounded" className="text-decoration-none text-center text-white rounded btn-block acrylic-bg cursor-pointer" to="blogs" spy={true} smooth={true} duration={500} offset={0} >My Blogs</Link>
                </ListItem>
                <ListItem>
                    <Link activeClass="active rounded cursor-pointer rounded" className="text-decoration-none text-center text-white rounded btn-block acrylic-bg cursor-pointer" to="contactme" spy={true} smooth={true} duration={500} offset={0}> Contact Me </Link>
                </ListItem>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
             <div className={classes.root}>
                <nav className={classes.drawer} aria-label="mailbox folders">
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor="left"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                        paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                        paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                    </Hidden>
                </nav>
                <main className={classes.content}>
                    <Element name="intro">
                        <Introduction></Introduction>
                    </Element>
                    <Element name="bitMoreAboutMe">
                        <MoreAboutMe></MoreAboutMe>
                    </Element>
                    <Element name="recentProjects">
                        <RecentProjects></RecentProjects>
                    </Element>
                    <Element name="blogs">
                        <Blogs></Blogs>
                    </Element>
                    <Element name="contactme">
                        <ContactMe></ContactMe>
                    </Element>
                </main>
             </div>
        </>
    );
};

export default SideBar;