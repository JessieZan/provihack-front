import { createTheme } from '@material-ui/core/styles'

export default createTheme({
  palette: {
    background: {
      default: '#FFD8EB',
    },
    primary: {
      main: '#3C0029',
    },
    secondary: {
      main: '#00639D',
    },
  },
  typography: {
    fontFamily: ['Roboto'].join(','),
  },
})
