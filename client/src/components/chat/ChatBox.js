import { Typography, TextField, Paper, Button, Divider } from '@material-ui/core';
import ScrollToBottom from 'react-scroll-to-bottom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import React, { useState, useEffect } from 'react';
import useStyles from './Styles';


const ChatBox = ({ name, socket, room, onClick }) => { 
    const [currentMessage, setCurrentMessage] = useState('');
    const [chatList, setChatList] = useState([]);

    const classes = useStyles();

    const sendMessage = async () => {
        if (currentMessage !== '') {
            const msgData = {
                room: room,
                sender: name,
                message: currentMessage,
                time: new Date(Date.now()).getHours() +
                 ':' + new Date(Date.now()).getMinutes(),
            }
           
            await socket?.emit('send_msg', msgData);
            setChatList((chats) => [...chats, msgData]);
            setCurrentMessage('');
        };               
    }
    useEffect(() => {
        socket.on('rec_msg', (data) => {
            setChatList((chats) => [...chats, data]);
        });
    }, [socket])

    return (
      
        <Paper className={classes.chatContainer}>
                <Typography
                    style={{ backgroundColor: 'dark-brown', height: '2rem' }}
                    variant='body2'>
                    Hello {name}, please chat now.
                </Typography>
            <Divider />                
        
            <div className={classes.chatBody}>
                    {chatList.map((chats) => {
                        return <h5>{chats.sender} : {chats.message}</h5>
                })}
            </div>
          <div className={classes.chatFooter}>
            <TextField className={classes.inputChatBox} size='small'
            
                name='message' 
                placeholder='type here ...'                          
                variant='outlined'
                id='outlined-multiline-static'
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
            />
                <Button
                    variant='contained'
                    color='primary'
                    onClick={sendMessage} >
                    <ArrowForwardIcon />
                </Button>
            </div>
                <Button
                    style={{ textTransform: 'none' }} onClick={onClick}
                    color='secondary'>
                    Exit Chat Room
                </Button>
          </Paper>
     
    )
}
export default ChatBox;