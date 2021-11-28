import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '../ActionButton'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
)

export default function BasicCard({ titulo, categoria }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {titulo}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Converse com alguém da área
        </Typography>
        <Typography variant="body2">
          Conheça profissionais e empresas que apoiam a causa LGBTQIA+ e a
          comunidade Trans.
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button>Saiba mais</Button>
      </CardActions>
    </Card>
  )
}
