import React, { useState } from 'react';
import { Card, Image, ListGroup } from 'react-bootstrap';
import { dumbbell, goBack, machine, none, all, basic, int, adv} from '../../assets/icons';
import './Dialog.css';
import { motion } from 'framer-motion';
import { radio } from '@nextui-org/react';

function CategoryFilterDialog({ clickedMuscle, onGoBack, onCategorySelected, onDifficultySelected, onStage, onDone}) {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [showDifficulties, setShowDifficulties] = useState(false);

    const categories = [
        { id: 1, name: 'Free weight', icon: dumbbell },
        { id: 2, name: 'Machine', icon: machine },
        { id: 3, name: 'No equipment', icon: none },
        { id: 4, name: 'All', icon: all},
        { id: 0, name: 'Go back', icon: goBack}
    ];

    const difficulties = [
        { id: 1, name: 'Novice', icon: basic},
        { id: 2, name: 'Intermediate', icon: int},
        { id: 3, name: 'Expert', icon: adv },
        { id: 4, name: 'All', icon: all},
        { id: 0, name: 'Go back', icon: goBack },
    ];

    const dialogVariants = {
        hidden: { scale: 0.95, opacity: 0 },
        visible: { scale: 1, opacity: 1 },
        exit: { scale: 1, opacity: 1  },
    };

    const handleCategorySelection = (category) => {
        if (category.id === 0) {
            onCategorySelected(null);
            onDifficultySelected(null);
            onStage(null);
            onGoBack();

        }else{

            setSelectedCategory(category.id);
            setShowDifficulties(true);
            onCategorySelected(category.id);
            onStage(1);
        }
    };

    

    const handleDifficultySelection = (difficulty) => {

        if (difficulty.id === 0) {

            onDifficultySelected(null);
            onStage(clickedMuscle);
            setShowDifficulties(false);
            setSelectedCategory(null);
            onCategorySelected(null);
        } else {
            onDifficultySelected(difficulty.id);
            onStage(2);
            onDone(false);
        }
    };

    const renderCategories = () => (
        categories.map(category => (
            <ListGroup.Item
                key={category.id}
                action 
                onClick={() => handleCategorySelection(category)}
                active={selectedCategory === category.id}
                className="centered-list-item"
                style={{borderRadius: '0.25rem'}}
            >
                {category.icon && (
                    <Image
                        src={category.icon}
                        style={{ width: '1.8rem', height: '1.8rem', marginRight: '0.5rem' }}
                        alt={category.name}
                    />
                )}
                {category.name}
            </ListGroup.Item>
        ))
    );

    const renderDifficulties = () => (
        difficulties.map(difficulty => (

            <ListGroup.Item
                key={difficulty.id}
                action 
                onClick={() => handleDifficultySelection(difficulty)}
                //active={showDifficulties === difficulty.id}
                className={'centered-list-item'}
            >
                {difficulty.icon && (
                    <Image
                        src={difficulty.icon}
                        style={{ width: '1.8rem', height: '1.8rem', marginRight: '0.5rem', borderRadius:'0rem'}}
                        alt={difficulty.name}
                    />
                )}
                {difficulty.name}
            </ListGroup.Item>
        ))
    );
    
    const getTitle = () => {
        if (showDifficulties) {
            const selectedCat = categories.find(cat => cat.id === selectedCategory);
            return selectedCat ? `Choose difficulty for ${selectedCat.name}` : 'Choose difficulty';
        }

        return ('Choose your available Equipment')
    };



    return (
        <motion.Card
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={dialogVariants}
        transition={{ duration: 0.5 }}
    >
        <Card style={{ width: '100%' , height: '60%', display:'flex' ,justifyContent: 'center'}}>
            <Card.Header>
                <Card.Title>{getTitle()}</Card.Title>
            </Card.Header>
            <Card.Body>
                <ListGroup className='centered-group-item'>
                    {showDifficulties ? renderDifficulties() : renderCategories()}
                </ListGroup>
            </Card.Body>
        </Card>
        </motion.Card>
    );
}

export default CategoryFilterDialog;