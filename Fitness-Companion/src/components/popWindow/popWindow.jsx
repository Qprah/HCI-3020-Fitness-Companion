// PopWindow.jsx
import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import SmartVideo from './smartVideo';
import Comment from './comment';
import './PopWindow.css';
import { motion } from 'framer-motion';
import DragDropDialog from './upload';
import Favorite from './favorite';
import { SnackbarProvider, useSnackbar } from 'notistack';
import { addFavorite, removeFavorite, getFavorite, getFavorites } from '../../assets/favoriteData';
import { p1, p2, p3, p4, p5, p6, p7, p8, p9 } from '../../assets/imgs';


function PopWindow(props) {
  const [isItemFavorited, setIsItemFavorited] = useState(false);

  useEffect(() => {
    console.log('useEffect triggered');
    const itemKey = props.item?.id;
    console.log('Current item:', props.item);
    console.log('Current fav key:', getFavorites());
    if (itemKey !== undefined && getFavorite(itemKey)) {
      console.log('Item is favorited:', itemKey);
      setIsItemFavorited(true);
    } else {
      console.log('Item is not favorited:', itemKey);
      setIsItemFavorited(false);
    }
  }, [props.show]);

  const getRandomImage = () => {
    const images = [p1, p2, p3, p4, p5, p6, p7, p8, p9];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  return (
    <div>
      <Modal show={props.show} onHide={props.onHide} centered dialogClassName='custom-modal-size'>
        <Modal.Header closeButton>
          <Modal.Title className='content'>
            {/* Render item properties instead of the entire item object */}
            {props.item && (

              <>
                <img src={getRandomImage()} alt="Exercise" />
                <div className="info">
                <div>Exercise: {props.item.name}</div>
                <div>Target Muscle: {props.item.muscle}</div>
                <div>Category: {props.item.category?.name}</div>
                <div>Difficulty: {props.item.difficulty?.name}</div>
                </div>
              </>
            )}
            <SnackbarProvider transitionDuration={{ enter: 225, exit: 250 }}>
              <div style={{ position: 'static' }}>
                <Favorite item={props.item} isFav={isItemFavorited} />
              </div>
            </SnackbarProvider>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Here you can add more details or components that use the item data */}
          <SmartVideo />
        </Modal.Body>
        <Modal.Footer>
          <Comment />
          <SnackbarProvider transitionDuration={{ enter: 225, exit: 250 }} autoHideDuration={800} maxSnack={1} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
            <DragDropDialog />
          </SnackbarProvider>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PopWindow;
