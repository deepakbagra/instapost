import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    
    img: {
        paddingTop: '57%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
        
    },
    priceTag: {
        fontSize: '1.6rem',
        fontWeight: '700',
        margin: '0'
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
    }  
}))