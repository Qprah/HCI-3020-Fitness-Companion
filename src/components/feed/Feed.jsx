import React, { useState } from 'react';
import PopWindow from '../popWindow/popWindow';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Box, Grid } from '@mui/material';
import { hot1, like } from '../../assets/icons';
import Like2 from './like';
import './Feed.css';
import { p1, p2, p3, p4, p5, p6, p7, p8, p9 } from '../../assets/imgs';
import { motion } from 'framer-motion';

function Feed({ exercises, size }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
  };

  const handleClose = () => setClicked(false);

  const handleClicked = (item) => {
    setSelectedItem(item);
    setClicked(true);
  };



  const renderExercises = () => {


    let filteredExercises = exercises.filter((exercise) =>
      exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    filteredExercises.sort((a, b) => {
      return sortOrder === 'desc' ? b.hot - a.hot : a.hot - b.hot;
    });

    if (filteredExercises.length === 0) {
      return (
        <div className="empty-message-container">
          <Typography color="neutral" level="h3" variant="plain" className="empty-message">
            No Exercises Found
          </Typography>
        </div>
      );
    }

    const getRandomImage = () => {
      const images = [p1, p2, p3, p4, p5, p6, p7, p8, p9];
      const randomIndex = Math.floor(Math.random() * images.length);
      return images[randomIndex];
    };

    return filteredExercises.map((exercise, index) => {
      const cardColor = index % 2 === 0 ? 'neutral' : 'primary';
      const cardVariant = index % 2 === 0 ? 'soft' : 'soft';

      return (
        <Card
          key={exercise.id}
          onClick={() => handleClicked(exercise)}
          color={cardColor}
          variant={cardVariant}
          z-depth={-1}
        >
          <div className="card-container">
            <img src={getRandomImage()} alt={exercise.name} className="exercise-image" />
            <div className="content-container">
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box>
                    <CardContent orientation='horizontal'>
                      <Typography fontWeight='md' textTransform='uppercase'>Exercise:</Typography>
                      <Typography fontWeight='xl' >{exercise.name}</Typography>
                    </CardContent>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box>
                    <CardContent orientation='horizontal'>
                      <Typography fontWeight='md' textTransform='uppercase'>Target Muscle:</Typography>
                      <Typography fontWeight='md'>{exercise.muscle}</Typography>
                    </CardContent>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box>
                    <CardContent orientation='horizontal'>
                      <Typography fontWeight='md' textTransform='uppercase'>Equipment:</Typography>
                      <Typography fontWeight='md' >{exercise.category?.name}</Typography>
                    </CardContent>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box>
                    <CardContent orientation='horizontal'>
                      <Typography fontWeight='md' textTransform='uppercase'>Difficulty:</Typography>
                      <Typography fontWeight='md'>{exercise.difficulty?.name}</Typography>
                    </CardContent>
                  </Box>
                  <Box>
                    <Grid item xs={6} style={{ display: 'flex', alignItems: 'center' }}>
                      <motion.svg
                        fill={'#ffd700'}
                        width="20"
                        height="20"
                        style={{ marginRight: '10px' }}
                      >
                        <Like2 />
                      </motion.svg>
                      <Typography fontWeight='md' style={{ fontSize: '1rem' }}>{exercise.hot}</Typography>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>

            </div>
          </div>
        </Card>
      );
    });
  };




  return (
    <div className="container">
      <PopWindow show={clicked} item={selectedItem} onHide={handleClose}></PopWindow>

      {/* Search Bar */}

      <input
        type="text"
        placeholder="Search by exercise name..."
        value={searchTerm}
        className="search-container"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={toggleSortOrder} className="sort-button">
        Sort by Hot {sortOrder === 'desc' ? '↓' : '↑'}
      </button>
      <div className="ex-card-list">{renderExercises()}</div>
    </div>
  );
}

export default Feed;
