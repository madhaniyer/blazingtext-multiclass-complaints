import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AssessmentOutlined from '@material-ui/icons/AssessmentOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CallIcon from '@material-ui/icons/Call';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Madhan Vasudevan
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 345,
    justify:'center',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    padding: "20px"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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

const inputProps = {
    test1 : {
        height: "600px"
    }
  };

export default function InputData() {
  
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [callDescription, setCallDescription] = React.useState("");
  const [callResponse, setCallResponse] = React.useState([{}]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleCall = () => {
    /*1	Debt collection	0
2	Credit reporting, credit repair services, or o...	1
18	Money transfer, virtual currency, or money ser...	2
23	Mortgage	3
32	Student loan	4
payload: ['I have been studying for 4 years now and planning to do my phd. I would like to borrow some more money to complete my college.']np
45	Vehicle loan or lease	5
90	Credit card or prepaid card	6
157	Checking or savings account	7
255	Credit card	8
354	Payday loan, title loan, or personal loan	9
962	Consumer Loan	10
4123	Payday loan	11
56641	Credit reporting	12
78732	Bank account or service	13
85832	Other financial service	14
90583	Prepaid card	15
153531	Money transfers	16
597144	Virtual currency	17*/

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
          console.log(data);
        })
        .catch(console.log)
        
  }

  return (

    
    <Grid container  maxWidth="xs" className={classes.root} spacing={2}>
      <CssBaseline />
      <Grid item xs={12} >
      <Card >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            AI
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
          Please type in details and click the Call icon so 
          that I can put you through to the right department.
          Click on the down arrow icon for a list of departments 
          that I can put you through to.
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
           CallResponse : 
           {callResponse[0].label}
           
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
          <Typography variant="body2" align="left">1.  Bank Account or Service</Typography>
          <Typography variant="body2" align="left">2.  Checking or Savings Account</Typography>
          <Typography variant="body2" align="left">3.  Consumer Loan</Typography>
          <Typography variant="body2" align="left">4.  Credit Card</Typography>
          <Typography variant="body2" align="left">5.  Credit Card or Prepaid Card</Typography>
          <Typography variant="body2" align="left">6.  Credit Reporting</Typography>
          <Typography variant="body2" align="left">7.  Credit Repair Services / Consumer Reports</Typography>
          <Typography variant="body2" align="left">8.  Debt Collection</Typography>
          <Typography variant="body2" align="left">9.  Money Transfer & Services</Typography>
          <Typography variant="body2" align="left">10. Money Service</Typography>
          <Typography variant="body2" align="left">11. Mortgage</Typography>
          <Typography variant="body2" align="left">12. Other Financial Services</Typography>
          <Typography variant="body2" align="left">13. Payday Loan</Typography>
          <Typography variant="body2" align="left">14. Payday, Title or Personal Loan</Typography>
          <Typography variant="body2" align="left">15. Prepaid Card</Typography>
          <Typography variant="body2" align="left">16. Student Loan</Typography>
          <Typography variant="body2" align="left">17. Vehicle Loan or Lease</Typography>
          <Typography variant="body2" align="left">18. Virtual Currency</Typography>
        </CardContent>
      </Collapse>
    </Card>
    <Box mt={5}>
        <Copyright />
    </Box>
    </Grid>
    </Grid>
    
    
  );
}