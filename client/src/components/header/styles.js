import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    appBar: {
        marginBottom: '2rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '4rem',
        [theme.breakpoints.between('xs', 'sm')]: {
            height: '4rem',           
        },
        [theme.breakpoints.between('sm', 'md')]: {
            height: '5rem',           
        },
        [theme.breakpoints.between('md', 'lg')]: {
            height: '6rem',
        }
    },
    searchBar: {
        height: '1.8rem',
        backgroundColor: '#f9fbe7',
        borderRadius: '0.75em',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            height: '1.3rem',
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            height: '1.9rem',           
        },
        [theme.breakpoints.between('sm', 'md')]: {
            height: '2rem',           
        },
        [theme.breakpoints.between('md', 'lg')]: {
            height: '2.2rem',                      
        }
    },
    searchInput: {
        padding: '0.5rem',
        marginLeft: '0.5rem',
        fontSize: '1rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.4rem',
            marginLeft: '0.1rem'
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: '0.5rem',
            marginLeft: '0.2rem'          
        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: '0.7rem',
            marginLeft: '0.3rem'          
        },
        [theme.breakpoints.between('md', 'lg')]: {
            fontSize: '0.9rem',
            marginLeft: '0.4rem'          
        } ,       
    },
    searchIcon: {
        padding: '0.6rem',
        fontSize: '1.2rem',
        [theme.breakpoints.down('xs')]: {
            padding: '0.4rem',
            fontSize: '0.9rem',
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            padding: '0.5rem',
            fontSize: '1rem',      
        },
        [theme.breakpoints.between('sm', 'md')]: {
            padding: '0.6rem',
            fontSize: '1.1rem',         
        },
        [theme.breakpoints.between('md', 'lg')]: {
            padding: '0.7rem',
            fontSize: '1.2rem',
        },
    },
    closeIcon: {
        padding: '0.6rem',
        fontSize:'1.2rem',
        [theme.breakpoints.down('xs')]: {
            padding: '0',
            fontSize:'0.85rem',
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            padding: '0',
            fontSize:'0.95rem',    
        },
        [theme.breakpoints.between('sm', 'md')]: {
            padding: '0',
            fontSize:'1rem',         
        },
        [theme.breakpoints.between('md', 'lg')]: {
            padding: '0',
            fontSize:'1.2rem',
        },
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
        },
        [theme.breakpoints.between('md', 'lg')]: {
            left: '95%',
        },
    },
    auth: {
        fontSize: '0.85rem',        
        textTransform: 'none',
        margin: '0em',
        fontWeight: 'bold',
        marginRight: '1rem',
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: '0.8rem',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: '0.9rem',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            fontSize: '1rem',
        },
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
    brand: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginLeft: '0.4rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.8rem',            
        }
    }
}))