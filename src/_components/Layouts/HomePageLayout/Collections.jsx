import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import ListIcon from '@material-ui/icons/List';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
    card: {
        display: 'flex',
      },
      cardDetails: {
        flex: 1,
      },
      cardMedia: {
        width: 160,
      },
}));
  
    export default function Collections() {
      const classes = useStyles();
    
      return (
<React.Fragment>
<Typography variant="h4" align="left" color="inherit" paragraph>
                  <Box fontFamily="Arial" m={1}>Kolekcje</Box> 
                  </Typography>
                  <Typography variant="h6" align="left" color="inherit" paragraph >
        <Box fontFamily="Arial" m={1} > Odkrywaj listę topowych fundacji, organizacji, oraz zbiórek w oparciu o najnowsze trendy </Box> 
      </Typography>  
          <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <CardActionArea component="a" href="#">
                  <Card className={classes.card}>
                  <Hidden xsDown>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
                        title="Image title"
                      />
                    </Hidden>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          Popularne w tym tygodniu
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          Najbardziej popularne organizacje w tym tygodniu
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                        <br/>
                        </Typography>
                        
                      </CardContent>
                    </div>
                    
                  </Card>
                </CardActionArea>
              </Grid>

              <Grid item xs={12} md={4}>
                <CardActionArea component="a" href="#">
                  <Card className={classes.card}>
                  <Hidden xsDown>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        title="Image title"
                      />
                    </Hidden>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          Twoje ulubione organizacje
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          Zebraliśmy wszystkie Twoje polubione NGO's, przewiązaliśmy wstążeczką i w postaci tej listy dajemy Ci je w prezencie 
                        </Typography>
                        {/* <Typography variant="subtitle1" paragraph>
                          desc
                        </Typography> */}
                        
                      </CardContent>
                    </div>
                    
                  </Card>
                </CardActionArea>
              </Grid>

              <Grid item xs={12} md={4}>
                <CardActionArea component="a" href="#">
                  <Card className={classes.card}>
                  <Hidden xsDown>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
                        title="Image title"
                      />
                    </Hidden>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          Zyskujące na popularności
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          Organizacje, które w ostatnim czasie znacząco namieszały
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                        <br/>
                        </Typography>
                        
                      </CardContent>
                    </div>
                    
                  </Card>
                </CardActionArea>
              </Grid>

              <Grid item xs={12} md={4}>
                <CardActionArea component="a" href="#">
                  <Card className={classes.card}>
                  <Hidden xsDown>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://images.unsplash.com/photo-1492707317997-96ae440f1878?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                        title="Image title"
                      />
                    </Hidden>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          Odkryj w tym tygodniu
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          Tygodniowa dawka świeżych NGO's. Nowości odkryte dla Ciebie. 
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                        <br/><br/>
                        </Typography>
                        
                      </CardContent>
                    </div>
                    
                  </Card>
                </CardActionArea>
              </Grid>

              <Grid item xs={12} md={4}>
                <CardActionArea component="a" href="#">
                  <Card className={classes.card}>
                  <Hidden xsDown>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://images.unsplash.com/photo-1445387267924-a723a28a33ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                        title="Image title"
                      />
                    </Hidden>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          Radar premier
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          Już nigdy nie przegapisz niczego nowego! Otrzymuj informacje o najnowszych akcjach!
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                        <br/>
                        </Typography>
                        
                      </CardContent>
                    </div>
                    
                  </Card>
                </CardActionArea>
              </Grid>

              <Grid item xs={12} md={4}>
                <CardActionArea component="a" href="#">
                  <Card className={classes.card}>
                  <Hidden xsDown>
                  <ListIcon style={{fontSize: '110px'}} />
                    </Hidden>
                    <div className={classes.cardDetails}>
                      <CardContent>
           
           
            <Typography component="h2" variant="h5" style={{
    height: 60,
    display: "flex",
    flexDirection: "column",justifyContent: "center"}}>
              Wszystkie kolekcje
            </Typography>  
          
                        {/* <Typography component="h2" variant="h5">
                          Wszystkie kolekcje
                        </Typography> */}
                        
                        
                      </CardContent>
                    </div>
                    
                  </Card>
                </CardActionArea>
              </Grid>
            
          </Grid>
          </React.Fragment>
);
}