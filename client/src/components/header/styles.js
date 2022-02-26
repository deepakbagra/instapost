import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: '0.95rem',       
        marginBottom: '0.7rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '3rem', 
    },
    searchBar: {
        height: '1.8rem',
        backgroundColor: '#f9fbe7',
        borderRadius: '0.75em',
        display: 'flex',        
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            height: '1.5rem',
            width: '6.3rem',
        }
    },
    searchInput: {
        padding: '0.3rem',
        marginLeft: '0.5rem',
        fontSize: '1rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.7rem',
            marginLeft: '0.1rem'
        }
    },
    searchIcon: {
        padding: '0.6rem',
        fontSize:'1.2rem',
        [theme.breakpoints.down('xs')]: {
            padding: '0.4rem',
            fontSize:'0.9rem',
        }        
    },
    closeIcon: {
        padding: '0.6rem',
        fontSize:'1.2rem',
        [theme.breakpoints.down('xs')]: {
            padding: '0',
            fontSize:'0.95rem',
        }
    },
    navLinks: {
        justifyContent: 'space-evenly',
        display: 'flex',
    },
    modal: {
       backgroundColor: 'rgba(0,0,0,0.7)',
    },
    xButton: {
        position: 'absolute',
        top: '0%',
        left: '95%',
        color: 'white',
        [theme.breakpoints.down('xs')]: {
            left: '91%',
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            left: '91%',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            left: '94.3%',
        }
    },
    auth: {
        fontSize: '0.72rem',        
        textTransform: 'none',
        margin: '0em',
        fontWeight: 'bold',        
    },
    authMenu: {
        fontSize: '0.72rem',        
    },
    divider: {
        margin: 'auto'
    },
    avatar: {
        color: theme.palette.getContrastText(deepPurple[600]),
        backgroundColor: deepPurple[600],
        width: '1.5em',
        height: '1.5em',
        marginTop: '5%',
        [theme.breakpoints.down('xs')]: {
            width: '1.2em',
            height: '1.2em',
            
        }
    },
    profile: {
        display: 'flex',       
        width: '100px',
      },
}))