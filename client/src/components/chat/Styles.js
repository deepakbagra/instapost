import { makeStyles } from "@material-ui/core";


export default makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        top: '70%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: 'auto',
        width: '18rem',
        borderRadius: '1em',
        textAlign: 'center'
    },
    paperChat: {
        position: 'absolute',
        marginTop:'2rem',
        overflowWrap: 'break-word',
        padding: '0.5em',
        height: '13rem',
        width: '18rem',
        borderRadius: '1em',
    },    
   
    header: {
        fontSize: '0.8em',
        fontWeight: 'bold',
        margin: '0.6em 0',
    },
    input: {
        marginBottom: '.4rem',
        width: '80%',       
        margin: '1rem 1.7em',        
    },
   
    sendBtn: {
        marginBottom: '1em',
        textTransform: 'none',
        fontSize: '0.8em'
    },
    closeBtn: {        
        // marginLeft: '14em',
        textTransform: 'none',
        fontSize: '0.8em',
        marginBottom: '1em',
    },
    container: {
        display: 'grid',
        height: '10em',
        width: '14em',
    }, 
    item: {
        overflowWrap: 'breakWord'
    },
    chatLog: {
        height: '8rem',
        width: '100%',
        marginLeft: '70%',
        marginTop: '10%'
    },
    chatContainer: {
        textAlign: 'center',
        width: '40%',
        margin: '10% 30%',        
    },
    chatFooter: {
        display: 'flex',
        
    },
    inputChatBox: {
        width: '100%'
    },
    chatBody: {
        height: '10em',        
    },
   
    
   
}))