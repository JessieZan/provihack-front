import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import './style.css'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
)

export default function BasicCard({ item }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography className="title" gutterBottom>
          {item.nome}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {item.area}
        </Typography>
        <Typography variant="body2">
          {item.resumo}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}
