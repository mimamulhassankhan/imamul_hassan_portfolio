import React from 'react';
import { Badge, Card, Image, ListGroup, ListGroupItem } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: '16px',
      fontWeight: 'bold',
    },
  }));

const RecentProjectsWorksItem = ({data}) => {
    const {name, workImage, shortDescription, features, tools, githubLink, liveLink} = data;
    const {programming_language, used_tools} = tools;
    const classes = useStyles();
    return (
        <Card variant="dark" className="text-dark m-1" style={{ width: '49%' }}>
            <Card.Img variant="top" src={workImage} />
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{shortDescription}</Card.Text>
            </Card.Body>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography className={classes.heading}>Features</Typography>
                </AccordionSummary>
                <AccordionDetails className="d-block">
                    <ListGroup variant="flush">
                        {
                            features.map((feature,idx) => <ListGroupItem key={idx}><FontAwesomeIcon icon={faChevronRight} /> {feature}</ListGroupItem>)
                        } 
                    </ListGroup>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography className={classes.heading}>Used Technologies</Typography>
                </AccordionSummary>
                <AccordionDetails className="d-block">
                    <ul>
                        <li>
                            <h5 className="mt-3 mb-3" style={{ color: '#0bc2c2', borderBottom: '2px solid #0bc2c2' }}>Programming Language</h5>
                            {
                                programming_language.map(lan => <h5 className="d-inline"><Badge className="mr-2 mb-1 p-2" variant="secondary">{lan}</Badge></h5>)
                            }
                        </li>
                        <li>
                            <h5 className="mt-3 mb-3" style={{ color: '#0bc2c2', borderBottom: '2px solid #0bc2c2' }}>Tools</h5>
                            {
                                used_tools.map(tool => <h5 className="d-inline"><Badge className="mr-2 mb-1 p-2" variant="secondary">{tool}</Badge></h5>)
                            }
                        </li>
                    </ul>
                    
                </AccordionDetails>
            </Accordion>
            <Card.Body>
            <Card.Link href={githubLink} target="_blank"><Image width={20} src="http://pngimg.com/uploads/github/github_PNG40.png" fluid/>GitHub</Card.Link>
            <Card.Link href={liveLink} target="_blank"><Image width={20} src="http://ayodasl.org/uploads/article/photo/IMG_5AF2C3-745CB8-6E42C0-03BAFD-E19191-E608C3.png" fluid />Live Site</Card.Link>
            </Card.Body>
        </Card>
    );
};

export default RecentProjectsWorksItem;