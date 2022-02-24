import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: '0.95rem',       
        marginBottom: '0.7rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '3rem', 
    },
    searchBar: {
        height: '1.8rem',
        backgroundColor: '#f9fbe7',
        borderRadius: '0.75em',
        display: 'flex',        
        alignItems: 'center',
    },
    searchInput: {
        padding: '0.3rem',
        marginLeft: '0.5rem',
    },
    navLinks: {
        justifyContent: 'space-evenly',
        display: 'flex'
    },
    modal: {
       backgroundColor: 'rgba(0,0,0,0.7)',
    },
    xButton: {
        position: 'absolute',
        top: '0%',
        left: '95%',
        color: 'white',
    },
    auth: {
        fontSize: '0.72em',        
        textTransform: 'none',
        margin: '0em',
        fontWeight: 'bold',        
    },
    divider: {
        margin: 'auto'
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
        width: '1.5em',
        height: '1.5em',
        marginTop: '5%',        
    },
    profile: {
        display: 'flex',
        //justifyContent: 'space-between',
        width: '100px',
      },
}))