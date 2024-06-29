import React, { useState } from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Avatar from '@mui/joy/Avatar';
import Typography from '@mui/joy/Typography';
import './comment.css';
const CommentLayout = () => {
    const [comments, setComments] = useState([
        { id: 1, username: "User1", text: "This is the first comment." },
        { id: 2, username: "User2", text: "Here's a second insightful comment." },
    ]);

    const [newComment, setNewComment] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const newId = comments.length + 1;
        setComments([{ id: newId, username: "NewUser", text: newComment }, ...comments]);
        setNewComment("");
    };

    return (
        <div className='comment-container'>
            {/* Comment submission form */}
            <form onSubmit={handleSubmit}>
                <Input 
                    required
                    size="lg" 
                    color="primary"
                    placeholder="New Comment"
                    multiline="true"
                    sx={{'--Input-focused': 1, width: "max(400px, 60%)", height: "max(100px, 10%)", mb: 2,
                }}
                    rows={4}
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    variant="outlined"
                    margin="normal"

                />
                <Button color= "primary" type="submit" >
                    Submit Comment
                </Button>
            </form>
            <div className='comments'>
                {/* Displaying comments */}
                {comments.map(comment => (
                    <Card
                        key={comment.id}  
                        variant="outlined"
                        sx={{
                            borderRadius: 0, '--Card-radius': 0,
                            marginTop: 1
                        }}
                    >
                        <CardContent orientation="horizontal">
                            <Avatar sx={{ mr: 2 }}>U</Avatar>
                            <Typography variant="subtitle1">{comment.username}</Typography>
                        </CardContent>
                        <Typography variant="body1">{comment.text}</Typography>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default CommentLayout;
