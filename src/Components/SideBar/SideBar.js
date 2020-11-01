import React from 'react';
import { makeStyles } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Introduction from '../Introduction/Introduction';
import { Button } from 'react-bootstrap';
import { Element, Link } from 'react-scroll';
import Blogs from '../Blogs/Blogs';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: 'transparent',
  },
  content: {
    flexGrow: 1,
    zIndex: 50,
  },
}));

const SideBar = () => {
    const classes = useStyles();

    return (
        <>
        <div className={classes.root}>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <List className="my-auto">
                    <ListItem>
                        <Button variant="success" className="btn-block"><Link activeClass="active" className="text-decoration-none" to="intro" spy={true} smooth={true} duration={500} offset={50} > Intro </Link></Button>
                    </ListItem>
                    <ListItem>
                        <Button variant="success" className="btn-block">Resume</Button>
                    </ListItem>
                    <ListItem>
                        <Button variant="success" className="btn-block">Resume</Button>
                    </ListItem>
                    <ListItem>
                        <Button variant="success" className="btn-block"><Link activeClass="active" className="text-decoration-none" to="blogs" spy={true} smooth={true} duration={500} offset={50} > My Blogs </Link></Button>
                    </ListItem>
                    <ListItem>
                        <Button variant="success" className="btn-block">Resume</Button>
                    </ListItem>
                </List>
            </Drawer>
            <main className={classes.content}>
                <Element name="intro">
                    <Introduction></Introduction>
                </Element>
                <Element name="blogs">
                    <Blogs></Blogs>
                </Element>
            </main>
        </div>
        </>
    );
};

export default SideBar;