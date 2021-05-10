import React from "react";
// import AppBar from '@material-ui/core/AppBar';
import Button from "@material-ui/core/Button";
// import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import Cards from "./Cards";
// import Link from '@material-ui/core/Link';


//move to style sheet
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const cards = [
  //images are in public/assests = path is simply assets/filename
  {
    key: 1,
    image: "../assets/projectImages/app.png",
    title: "Burger App",
    description:
      "So many burgers, so little time! Add all of the burgers you would like to try, and keep track of all the burgers you have devoured.",
    gitHubRepo: "https://github.com/HectorDiazJr/Burger-Logger",
    liveLink: "https://evening-sands-49940.herokuapp.com/",
  },

  {
    key: 2,
    image: "../assets/projectImages/graph.png",
    title: "Workout Tracker",
    description:
      "Stay on track with your fitness goals and health by tracking your workouts, your progress, and add new workouts to your routine",
    gitHubRepo: "https://github.com/HectorDiazJr/Workout-Tracker",
    liveLink:
      "https://hidden-tor-94821.herokuapp.com/?id=6071c4166c407900150ff327",
  },

  {
    key: 3,
    image: "../assets/projectImages/looking4balance.png",
    title: "Looking 4 Balance",
    description:
      "Balance! With such a busy life, we all need balance to assure we never forget the important things in life. That is why this app allows you to select the 3 most important things you need to accomplish TODAY! 3 things to do with your family, work, and school. Start the day with an inspiring quote, and come back to your site when you need a laugh.",
    gitHubRepo: "https://github.com/HectorDiazJr/Looking-for-Balance",
    liveLink: "https://hectordiazjr.github.io/Looking-for-Balance/",
  },

  {
    key: 4,
    image: "../assets/projectImages/scheduler-screen-shot.png",
    title: "Work day scheduler",
    description: 
      "Stay organized by planning your day hour by hour and see at a glance where you are in the day",
    gitHubRepo: "https://github.com/HectorDiazJr/Work-Day-Scheduler",
    liveLink: "https://hectordiazjr.github.io/Work-Day-Scheduler/",
  },

  {
    key: 5,
    image: "../assets/projectImages/travel-logger.png",
    title: "Travel Logger",
    description: 
      "Do you like to travel? So do we, and so do all of your friends. Let's keep track of the places we travel, and blog about what we like at each place we visit for all of us to see and add our own comments. We may want to go visit the same places. Not sure where to go? Get in your car and drive, and use this app to find places to do based on your interest",
    gitHubRepo: "https://github.com/JJG1488/Travel-Logger",
    liveLink: "https://hidden-waters-17740.herokuapp.com/"
  },

  {
    key: 6,
    image: "../assets/projectImages/weatherapp.png",
    title: "Weather App",
    description: "Do have a trip planned? Wouldn't it be great to keep all of the places you will visit in one place, to quickly see and plan according to the weather? This is your app! See the weather for your selected cities, along with a 5 day forcast, and even a quick view of the current weather with a matching gif at the top of the page",
    gitHubRepo: "https://github.com/HectorDiazJr/Weather-App",
    liveLink: "https://hectordiazjr.github.io/Weather-App/",
  }
];



export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
        
          
          <Container maxWidth="sm">

          <Typography
              component="h4"
              variant="h5"
              align="left"
              color="textSecondary"
              gutterBottom
            >
              Hello, My name is
            </Typography>
       
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Hector Diaz Jr
            </Typography>
            <Typography
              variant="h5"
              align="right"
              color="textSecondary"
              paragraph
            >
              I am a Full Web Stack Developer!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    My GitHub
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    My LinkedIn
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            
           

            
            {cards.map((card) => (
            
            <Grid item key={""} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={card.image}
                  title={card.title}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    App title: {card.title}.
                  </Typography>
                  <Typography>App Description: {card.description}</Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" color="primary"
                    size="small"
                    href={card.gitHubRepo}
                  >
                    View Repo
                  </Button>
                  <Button variant="outlined"
                    size="small"
                    color="primary"
                    href={card.liveLink}
                  >
                    Go to App
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}

//github icon
//<i class="fab fa-github"></i>