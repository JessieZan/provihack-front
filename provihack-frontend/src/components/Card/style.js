import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  cardResults: {
    position: 'relative',
    width: '32rem',
    minHeight: '12rem',
    background: '#FCFCFC',
    border: '1px solid #827379',
    borderRadius: '12px',
    minWidth: '32rem',
    margin: '1rem',
  },

  title: {
    fontFamily: 'Roboto',
    fontSize: '1.6rem',
    fontWeight: 700,
    lineHeight: '2.4rem',
    letterSpacing: '0.1px',
    color: '#1F1A1C',
    margin: 0,
    marginBottom: '0.5rem',
  },

  subtitle: {
    fontFamily: 'Roboto',
    fontSize: '1.4rem',
    fontWeight: 700,
    lineHeight: '2rem',
    letterSpacing: '0.25px',
    color: '#1F1A1C',
    backgroundColor: '#CCE5FF',
    borderRadious: '15px',
    padding: '0.5rem',
    display: 'inline-block',
  },

  resume: {
    fontFamily: 'Roboto',
    fontSize: '1.4rem',
    lineHeight: '2rem',
    letterSpacing: '0.25px',
    color: '#1F1A1C',
    marginBottom: '1rem',
  },

  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: '2rem',
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
