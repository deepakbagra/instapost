import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: '1.25em',
        margin: '0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '3rem',
        
    },
    searchBar: {
        height: '2em',
        backgroundColor: '#f9fbe7',
        borderRadius: '0.75em',
        display: 'flex',
    }
}))