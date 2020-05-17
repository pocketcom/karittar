import React from "react"
import {Link} from "gatsby"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


function Blogitem({title,date,src,link,description}){
    const classes = useStyles();


return(

    <>

    <Card className={classes.root}>
      <CardActionArea>

        <CardMedia
          className={classes.media}
          image={src}
          title={title}
        />
        <CardContent>
          <Typography className="cardTitle" gutterBottom variant="h5" component="h2">
          {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        <Link to={`/${link}`}>seemore</Link>
        </Button>
      </CardActions>
    </Card>
    </>


)

}
export default Blogitem