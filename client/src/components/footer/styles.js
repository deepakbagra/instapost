import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    root: {
        
        color: 'white',
        textAlign: 'center', 
        display: 'flex',
        alignItems:'flexstart',        
        marginTop: '10%',
        position: 'relative',
        bottom: '1rem',
        justifyContent: 'center',
        paddingTop: '1.3%',
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            height:'2em',
        }            
    },
    text: {
        fontSize: '0.6rem',
        color: 'grey',
        [theme.breakpoints.down('xs')]: {
            fontSize: '60%',
            marginTop: '0.9%'            
        },       
    }
}));