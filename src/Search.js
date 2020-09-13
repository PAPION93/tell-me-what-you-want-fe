import React from 'react';
import Header from './component/HeaderSearch';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid_root: {
    padding: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  media: {
    height: 180,
    borderRadius: '10px',
  },
  card_root:{
    boxShadow: 'none',
  },
  card_content: {
    verticalAlign: 'bottom',
    paddingTop: 5,
    paddingBottom: 0,
    paddingLeft: 5,
  },
}));

export default function Search() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header/>
        <Grid container spacing={2} className={classes.grid_root}>
          <Grid container spacing={2} xs={12} sm={6} className={classes.grid_root}>
            <Grid item lg={4} md={6} xs={12}>
              <Card className={classes.card_root}>
                <CardMedia
                  className={classes.media}
                  image="https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F201407-xl-seared-sous-vide-style-tri-tip.jpg%3Fitok%3DqbBqP5W8"
                  title="Meat"
                />
                <CardContent className={classes.card_content}>
                  <Typography variant="caption" color="textPrimary" component="p" noWrap>
                    <StarIcon color="secondary" fontSize="small" style={{verticalAlign: "bottom"}}/>4.76 (120)
                  </Typography>
                  <Typography variant="subtitle1" color="textPrimary" component="p" noWrap>
                    수비드 스테이크 전문점
                  </Typography>
                  <Typography variant="subtitle1" color="textPrimary" component="p" noWrap>
                    밀폐된 밀봉된 봉지에 담긴 음식물을 정확히 계산된 물을 천천히 가열하는 조리법이다. 해당 단어는 불어로 '밀봉된, 진공 하에서'라는 의미다. 영어로 하면 under vacuum.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <Card className={classes.card_root}>
                <CardMedia
                  className={classes.media}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLOQm6lN5De1LqAn1BkjRuaBwxLTG9w8BCzg&usqp=CAU"
                  title="Meat"
                />
                <CardContent className={classes.card_content}>
                  <Typography variant="caption" color="textPrimary" component="p" noWrap>
                    <StarIcon color="secondary" fontSize="small" style={{verticalAlign: "bottom"}}/>4.76 (120)
                  </Typography>
                  <Typography variant="subtitle1" color="textPrimary" component="p" noWrap>
                    수비드 스테이크 전문점
                  </Typography>
                  <Typography variant="subtitle1" color="textPrimary" component="p" noWrap>
                    밀폐된 밀봉된 봉지에 담긴 음식물을 정확히 계산된 물을 천천히 가열하는 조리법이다. 해당 단어는 불어로 '밀봉된, 진공 하에서'라는 의미다. 영어로 하면 under vacuum.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <Card className={classes.card_root}>
                <CardMedia
                  className={classes.media}
                  image="https://www.seriouseats.com/recipes/images/2015/05/Anova-Steak-Guide-Sous-Vide-Photos15-beauty-1500x1125.jpg"
                  title="Meat"
                />
                <CardContent className={classes.card_content}>
                  <Typography variant="caption" color="textPrimary" component="p" noWrap>
                    <StarIcon color="secondary" fontSize="small" style={{verticalAlign: "bottom"}}/>4.76 (120)
                  </Typography>
                  <Typography variant="subtitle1" color="textPrimary" component="p" noWrap>
                    수비드 스테이크 전문점
                  </Typography>
                  <Typography variant="subtitle1" color="textPrimary" component="p" noWrap>
                    밀폐된 밀봉된 봉지에 담긴 음식물을 정확히 계산된 물을 천천히 가열하는 조리법이다. 해당 단어는 불어로 '밀봉된, 진공 하에서'라는 의미다. 영어로 하면 under vacuum.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <Card className={classes.card_root}>
                <CardMedia
                  className={classes.media}
                  image="https://www.seriouseats.com/recipes/images/2015/05/Anova-Steak-Guide-Sous-Vide-Photos15-beauty-1500x1125.jpg"
                  title="Meat"
                />
                <CardContent className={classes.card_content}>
                  <Typography variant="caption" color="textPrimary" component="p" noWrap>
                    <StarIcon color="secondary" fontSize="small" style={{verticalAlign: "bottom"}}/>4.77 (120)
                  </Typography>
                  <Typography variant="subtitle1" color="textPrimary" component="p" noWrap>
                    수비드 스테이크 전문점
                  </Typography>
                  <Typography variant="subtitle1" color="textPrimary" component="p" noWrap>
                    밀폐된 밀봉된 봉지에 담긴 음식물을 정확히 계산된 물을 천천히 가열하는 조리법이다. 해당 단어는 불어로 '밀봉된, 진공 하에서'라는 의미다. 영어로 하면 under vacuum.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
        </Grid>
    </div>
  );

  }