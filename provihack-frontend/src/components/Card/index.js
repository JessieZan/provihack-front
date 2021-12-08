import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import useStyles from './style'
import arrowRight from '../../assets/arrowRight.svg'

export default function BasicCard({ item }) {
  const classes = useStyles()
  return (
    <Card className={classes.cardResults}>
      <div className={classes.flex}>
        <CardContent>
          <Typography className={classes.title} gutterBottom>
            {item.nome}
          </Typography>
          <Typography variant="body2" className={classes.resume}>
            {item.resumo}
            <br />
          </Typography>
          <Typography className={classes.subtitle}>{item.area}</Typography>
        </CardContent>
        <img src={arrowRight}></img>
      </div>
    </Card>
  )
}
