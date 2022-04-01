import React from 'react';
import { Link } from 'react-router-dom';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { Grow, Button, MenuItem, MenuList, Popper, Paper, ClickAwayListener } from '@material-ui/core';
import Stack from '@mui/material/Stack';
import useStyles from './styles';

export default function LoginMenu() {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const classes = useStyles();
  
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleClose = (event) => {       
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            
        return;
        }        
        setOpen(false);
    };    
  
    function handleListKeyDown(event) {
      if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
      } else if (event.key === 'Escape') {
        setOpen(false);
      }
    }
  
    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    
    React.useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
      }
  
      prevOpen.current = open;
    }, [open]);
  

  return (
    <Stack direction="row" spacing={2}>
      
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <LockOpenIcon style={{ fontSize: '1.2rem', color: 'white', padding:'0' }} />
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >                  
                    <MenuItem onClick={handleClose} dense className={classes.authMenu} component={Link} to='/auth/signin' variant='text'>Sign in</MenuItem>
                    <MenuItem onClick={handleClose} dense className={classes.authMenu} component={Link} to='/auth/signup' variant='text'>Sign up</MenuItem>        
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}



  // const [anchorEl, setAnchorEl] = useState(null);
  // const open = Boolean(anchorEl);

  // const classes = useStyles();

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // return (
  //   <>
  //     <Button
  //       id="basic-button"
  //       aria-controls={open ? 'basic-menu' : undefined}
  //       aria-haspopup="true"
  //       aria-expanded={open ? 'true' : undefined}
  //       onClick={handleClick}
        
        
  //     >
  //       <LockOpenIcon style={{ fontSize: '1.2rem', padding:'0' }} /> 
  //     </Button>
  //     <Menu
  //       id="basic-menu"
  //       anchorEl={anchorEl}
  //       open={open}
  //       onClose={handleClose}
  //       MenuListProps={{
  //         'aria-labelledby': 'Login',
  //       }}
  //     >
  //       <MenuItem onClick={handleClose} divider dense className={classes.authMenu} component={Link} to='/auth/signin' variant='text'>Sign in</MenuItem>
  //       <MenuItem onClick={handleClose}  divider dense className={classes.authMenu} component={Link} to='/auth/signup' variant='text'>Sign up</MenuItem>        
  //     </Menu>
  //   </>
//   );
// }