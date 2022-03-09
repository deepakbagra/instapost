import { makeStyles } from "@material-ui/core";


export default makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: '20rem',
        width: '18rem',
        borderRadius: '1em'
    },
    
    header: {
        fontSize: '0.9rem',
        fontWeight: 'bold',
        marginLeft: '30%',
        margin: '1em'       
    },
    form: {
        marginBottom: '.9rem',
        
    },
    img: {
        fontSize: "0.8rem",
        marginLeft: '5%',
        
    },
    file: {
        marginTop: '1%', 
        marginLeft: '5%'
    },
    button: {
        marginTop: '4%',
        borderRadius: '1em'
    },
    xButton: {
        position: 'absolute',
        right: '0em',        
        color: 'red',
    },
    
   
}))