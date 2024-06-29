import React from 'react';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import TypewriterText from './TypewriterText';
import Button from '@mui/material/Button'; // 导入 Button 组件

const Conversation = ({ stage, onStage}) => {
    let message = "";
    let showButton = false;

    const handleRedoWorkout = () => {
        onStage(0);
    };


    if (typeof stage === 'string') {
        message = 'Great choice! You\'ve selected the  ' + stage + ' muscle group. Now, let\'s tailor your workout. What type of exercise are you in the mood for?';
    } else {
        switch (stage) {
            case 1:
                message = "Awesome! Now, let's fine-tune the difficulty. What level are you comfortable with?";
                break;
            case 2:
                message = "All set! Let's make those gains together!";
                showButton = true;
                break;
            default:
                message = "Welcome to our website! I'm your fitness companion. To get started, please select a muscle group";
        }
    }

    return (
        <Card variant="outlined" sx={{ width: 345, height: 150, p: 2, overflow: 'auto' }}>
            <Typography gutterBottom variant="h5" component="div">
                <TypewriterText text={message} delay={50} />
            </Typography>
            {showButton && (
                <div>
    
                    <Button variant="contained" color="primary" onClick={handleRedoWorkout}>
                        Redo Workout
                    </Button>
                </div>
            )}
        </Card>
    );
};

export default Conversation;
