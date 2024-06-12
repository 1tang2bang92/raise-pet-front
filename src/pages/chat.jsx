import React, { useState } from 'react';
import { Box, TextField, Button, List, ListItem, ListItemText, Typography, Paper } from '@mui/material';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, { text: input, sender: 'You' }]);
            setInput('');
        }
    };

    return (
        <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', my: 5, p: 2, border: '1px solid #ccc', borderRadius: 2 }}>
            <Typography variant="h4" gutterBottom align="center">
                Chat
            </Typography>
            <List sx={{ height: 300, overflowY: 'auto', mb: 2, border: '1px solid #ccc', borderRadius: 2, p: 1 }}>
                {messages.map((message, index) => (
                    <ListItem key={index} sx={{ display: 'flex', justifyContent: message.sender === 'You' ? 'flex-end' : 'flex-start' }}>
                        <Paper 
                            sx={{
                                p: 1.5,
                                borderRadius: 2,
                                backgroundColor: message.sender === 'You' ? '#1976d2' : '#f0f0f0',
                                color: message.sender === 'You' ? '#fff' : '#000',
                                maxWidth: '75%',
                                wordBreak: 'break-word'
                            }}
                        >
                            <ListItemText primary={message.text} />
                        </Paper>
                    </ListItem>
                ))}
            </List>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TextField
                    variant="outlined"
                    fullWidth
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type your message..."
                    sx={{ mr: 1 }}
                />
                <Button variant="contained" color="primary" onClick={handleSendMessage}>
                    Send
                </Button>
            </Box>
        </Box>
    );
};

export default Chat;

