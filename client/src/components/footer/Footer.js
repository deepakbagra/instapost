import { Typography } from "@material-ui/core";
import useStyle from './styles';

const Footer = () => {
    const classes = useStyle();
   
    return (
        <div className={classes.root}>
            <Typography className={classes.text}>
                {new Date().getFullYear()}  
                {'Copyright © '}
                | deepakwebtech | All Rights Reserved.
            </Typography>
        </div>
    )
}

export default Footer;