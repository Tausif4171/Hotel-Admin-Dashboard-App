import React from 'react'
import { NewHotelType } from '../types/hotels'

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
interface IProps {
    hotel: NewHotelType,
    detailsPage?:boolean
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 345,
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
        avatar: {
            backgroundColor: red[500],
        },
    }),
);

export default function Information({ hotel,detailsPage }: IProps) {
    console.log('hotels', hotel)
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <div>
                        <span style={{ display: 'block' }}>{" $ "} {hotel.perNight}</span>
                        <span>Per Night</span>
                    </div>
                }
                title={hotel.title}
                subheader={hotel.region}
            />

            <CardMedia
                className={classes.media}
                image="https://www.tourmyindia.com/blog//wp-content/uploads/2022/10/Best-Five-Star-Luxury-Hotels-in-Delhi.jpg"
                title="five star hotel"
            />

            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {hotel.description}
                </Typography>
            </CardContent>

            <CardActions disableSpacing>
                <span style={{ backgroundColor: 'grey' }}>{hotel.stars} {" Stars "}</span>&nbsp;
                <span>based on {hotel.review} reviews</span>
            </CardActions>

            <CardActions disableSpacing>
                <span>Main feature: {hotel.fearure}</span>
            </CardActions>

            <Link to={`/hotels/${hotel.id}`}>
                <Button variant="contained" color="primary" style={{ margin: '10px 0px 20px 0px' }}>
                    View more Information
                </Button>

            </Link>


        </Card>
    );
}
