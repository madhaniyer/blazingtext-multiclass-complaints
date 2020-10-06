import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import AcUnitIcon from '@material-ui/icons/AcUnit'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CallIcon from '@material-ui/icons/Call';
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '3%',
  },
  paper: {
    height: 140,
    width: 100,
  },
  form: {
    width: '90%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    padding: "5%"
  },
  control: {
    padding: theme.spacing(2),
  },
  card: {
    backgroundColor:"#edf6f9"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  media: {
    height: 0,
    paddingTop: '77%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(10);
  const [callDescription, setCallDescription] = React.useState("");
  const [labelDescription, setLabelDescription] = React.useState("*********");
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [callResponse, setCallResponse] = React.useState([{}]);


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleCall = () => {
     // alert(callDescription);
     const proxyurl = "https://cors-anywhere.herokuapp.com/";
     const url = "https://3l7l8fowrf.execute-api.us-east-1.amazonaws.com/test"
      fetch(proxyurl+url, {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Headers' : '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "sentences" : [callDescription]
        })
      })
        .then(res => res.json())
        .then((data) => {
          //this.setState({ contacts: data })
          setCallResponse(data);
          //translateLabel(data);
          console.log(data[0].label[0]);

          if(data[0].label[0]==='__label__4') {
            setLabelDescription("Student Loan");
          } else if (data[0].label[0]==='__label__0') {
            setLabelDescription("Debt Collection");
          }
          else if (data[0].label[0]==='__label__1' || data[0].label[0]==='__label__12') {
            setLabelDescription("Credit (Rating) Services");
          }
          else if (data[0].label[0]==='__label__2' || data[0].label[0]==='__label__16' || data[0].label[0]==='__label__17') {
            setLabelDescription("Money / Virtual$ Transfer");
          }
          else if (data[0].label[0]==='__label__3') {
            setLabelDescription("Mortgage");
          }
          else if (data[0].label[0]==='__label__5' || data[0].label[0]==='__label__9' 
          || data[0].label[0]==='__label__10' || data[0].label[0]==='__label__11') {
            setLabelDescription("Loan Services");
          }
          else if (data[0].label[0]==='__label__6' || data[0].label[0]==='__label__8' || data[0].label[0]==='__label__15') {
            setLabelDescription("Credit / Prepaid Card");
          }
          else if (data[0].label[0]==='__label__7' || data[0].label[0]==='__label__13') {
            setLabelDescription("Bank Account Services");
          }
          else if (data[0].label[0]==='__label__14') {
            setLabelDescription("Other Fin Services");
          }
        })
        .catch(console.log)
        
  }

  return (
    <Grid container className={classes.root} spacing={2} >
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          <Grid key="4" item>
            <Card className={classes.card}>
                <CardHeader 
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            <AcUnitIcon/>
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="AI Based Context Router"
                    subheader="Backed by Blazing Text Model "
                />
                <CardMedia
                className={classes.media}
                image="./images/dribbble.gif"
                title="Paella dish"
                />
                <form className={classes.form} noValidate  >
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="inputdata"
                    label="How Can I help you?"
                    name="inputdata"
                    autoComplete="inputdata"
                    autoFocus
                    multiline
                    rowsMax={10}
                    onChange={e => setCallDescription(e.target.value)}
                    />
                </form>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Please type in details and push the call button
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="Call for help"
                    onClick={handleCall} 
                    >
                      <CallIcon />
                    </IconButton>

                    <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                        })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                      <ExpandMoreIcon color="primary" />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography variant="body2" align="left">1.  Debt Collection</Typography>
                  <Typography variant="body2" align="left">2.  Credit Rating Services</Typography>
                  <Typography variant="body2" align="left">3.  Money / Virtual$ Transfer</Typography>
                  <Typography variant="body2" align="left">4.  Mortgage</Typography>
                  <Typography variant="body2" align="left">5.  Loan Services</Typography>
                  <Typography variant="body2" align="left">6.  Credit / Prepaid Card</Typography>
                  <Typography variant="body2" align="left">7.  Bank Account Services</Typography>
                  <Typography variant="body2" align="left">8.  Other Fin Services</Typography>
                  <Typography variant="body2" align="left">9.  Student Loan</Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>


          <Grid key="5" item>
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            <AcUnitIcon/>
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Routing at the call center"
                    subheader="Backed by Blazing Text Model "
                />
                <CardMedia
                className={classes.media}
                image="./images/Call-Center.png"
                title="Paella dish"
                />

                <CardContent>
                    <Typography variant="h6" color="textSecondary" component="p">
                        I will be putting you through to 
                    </Typography>
                    <Typography variant="h4" color="textSecondary" component="p">
                       {labelDescription} 
                    </Typography>
                    <Typography variant="h6" color="textSecondary" component="p">
                       Department 
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                       Have a good rest of the day.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="Call for help"
                    onClick={handleCall} 
                    >
                      <CallIcon />
                    </IconButton>

                    <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                        })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                      <ExpandMoreIcon color="primary" />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography variant="body2" align="left">We are here to help</Typography>
                </CardContent>
              </Collapse>

            </Card>
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  );
}