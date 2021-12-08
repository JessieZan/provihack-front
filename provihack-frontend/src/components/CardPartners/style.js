import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  card: {
    position: 'relative',
    width: '32rem',
    height: '42rem',
    background: '#FCFCFC',
    border: '1px solid #827379',
    borderRadius: '12px',
    minWidth: '32rem',
    margin: '1rem',
  },

  cardContent: {
    fontFamily: 'Roboto',
    fontSize: '1.4rem',
    lineHeight: '20rem',
    letterSpacing: '0.25px',
    color: ' #504349',
    maxWidth: '28rem',
  },

  avatar: {
    background: '#934172',
  },

  title: {
    fontFamily: 'Roboto',
    fontWeight: 500,
    fontSize: '1.6rem',
    lineHeight: '2.4rem',
    letterSpacing: '0.1px',
    color: '#1F1A1C',
  },

  subTitle: {
    fontFamily: 'Roboto',
    fontWeight: 300,
    fontSize: '1.4rem',
    lineHeight: '2.0rem',
    letterSpacing: '0.2px',
    color: '#1F1A1C',
  },
}))

export default useStyles
