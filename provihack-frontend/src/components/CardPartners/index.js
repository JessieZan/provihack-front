import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import useStyles from './style'
import Button from '../ActionButton/index'

export default function RecipeReviewCard({ img, title, subtitle, resume }) {
  const [expanded, setExpanded] = React.useState(false)
  const classes = useStyles()

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={<Typography className={classes.title}>{title}</Typography>}
        subheader={
          <Typography className={classes.subTitle}>{subtitle}</Typography>
        }
      />
      <CardMedia component="img" height="194" image={img} alt="Paella dish" />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          className={classes.cardContent}
        >
          {resume}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button className={classes.button}>Saiba mais</Button>
      </CardActions>
    </Card>
  )
}
