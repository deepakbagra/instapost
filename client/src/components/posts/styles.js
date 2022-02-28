import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
   
    card: {
        width: '80%',
        margin: 'auto',
        [theme.breakpoints.down('xs')]: {
            margin: 'auto',
            width: '80%'
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            margin: 'auto',
            width: '80%'
        },
        [theme.breakpoints.between('sm', 'md')]: {
            margin: 'auto',
            width: '90%'
        },
        [theme.breakpoints.between('md', 'lg')]: {
            margin: 'auto',
            width: '100%'
        },
    },
    actions: {
        
    },
    img: {
        paddingTop: '57%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
        
    },
    item: {
        fontSize: '.9em',
        fontWeight: 'bold',
        marginLeft: '3%',
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.7em'
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: '0.8em'
        }
    },
    priceTag: {
        fontSize: '1.6rem',
        fontWeight: '700',
        margin: '0',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.2rem'
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: '1.4rem'
        }
    },
    more: {
        fontSize: '1rem', 
        textTransform: 'none',
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.6rem'
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: '0.7rem'
        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: '0.8rem'
        }
    },
    name: {
        fontSize: '0.7rem',
        color: 'grey',
        marginLeft: '3%',
        fontWeight: 'bold'
    },
    modal: {
        backgroundColor: 'rgba(255,255,255,0.7)',
    },
    box: {
        height: '30%',
        width: '40%',
        margin: '15% 30%',
        backgroundColor: 'white',
        borderRadius: '1em'
    },
    xButton: {
        position: 'absolute',
        top: '0%',
        left: '95%',
        color: 'white',
    },
    likes: {
        textTransform: 'none',
        fontSize: '0.6rem',
    },
    likeBtn: {
        fontSize: '1.3rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.8rem'
        }, 
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: '1.2rem'
        }
    },
    btn: {
        fontSize: '1.3rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.8rem'
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: '1.2rem'
        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: '1.1rem'
        }
    },
    likeIcon: {
        fontSize: '1.3rem',
        color:'#3f51b5',
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.8rem'
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: '1.2rem'
        }
    }
}))