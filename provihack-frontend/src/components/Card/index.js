import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import { Typography, List, Avatar } from '@mui/material'
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
    <Card sx={{ minWidth: 300, borderRadius: '2rem' }}>
      <CardContent className="cardContent">
        <div>
          <Typography className="title" gutterBottom>
            nome
          </Typography>
        </div>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          area
        </Typography>
        <Typography variant="body2">
          resumo
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Entre em contato</Button>
      </CardActions>
    </Card>
  )
}
