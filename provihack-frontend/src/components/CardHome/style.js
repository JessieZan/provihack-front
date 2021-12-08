import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  card: {
    position: 'relative',
    width: '32rem',
    height: '42rem',
    background: '#FCFCFC',
    border: '1px solid #827379',
    borderRadius: '12px',
  },

  cardHomeContent: {
    fontFamily: 'Roboto',
    fontSize: '1.4rem',
    lineHeight: '20rem',
    letterSpacing: '0.25px',
    color: ' #504349',
    maxWidth: '23rem',
  },

  avatar: {
    background: '#934172',
  },

  homeTitle: {
    fontFamily: 'Roboto',
    fontWeight: 500,
    fontSize: '2.2rem',
    lineHeight: '2.8rem',
    letterSpacing: '0.1px',
    color: '#00639D',
  },

  subTitle: {
    fontFamily: 'Roboto',
    fontWeight: 300,
    fontSize: '1.4rem',
    lineHeight: '2.0rem',
    letterSpacing: '0.2px',
    color: '#1F1A1C',
  },

  tabs: {
    [theme.breakpoints.up('xs')]: {
      backgroundColor: '#F0F0F5',
      paddingTop: '1rem',
      minWidth: '3rem',
    },
    [theme.breakpoints.down('xs')]: {
      width: '6rem',
      height: '25rem',
      position: 'absolute',
      opacity: '0.9',
    },
  },
}))

export default useStyles
