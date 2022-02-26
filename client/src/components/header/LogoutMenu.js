import React from 'react';
import { Grow, Button, MenuItem, MenuList, Popper, Paper, Avatar, ClickAwayListener } from '@material-ui/core';
import Stack from '@mui/material/Stack';
import useStyles from './styles';

export default function LogoutMenu(props) {

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const classes = useStyles();
  
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleClose = (event) => {
       // props.logout();
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
          <Avatar className={classes.avatar} alt={props.user?.result?.name} src={props.user.imageUrl}>{props.user?.result?.name.charAt(0)}</Avatar>
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
                    <MenuItem onClick={props.logout}>Logout</MenuItem>
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