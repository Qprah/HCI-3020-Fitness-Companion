import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import Star from './star';
import './favorite.css';
import { useSnackbar } from 'notistack';
import { addFavorite, removeFavorite, getFavorites } from '../../assets/favoriteData';
import { getLogin } from '../../isLogin';


const Favorite = ({ item, isFav: initialFavoritedStatus }) => {
    const { enqueueSnackbar } = useSnackbar();
    const [isFavorited, setIsFavorited] = useState(initialFavoritedStatus);

    useEffect(() => {
        setIsFavorited(initialFavoritedStatus);
    }, [initialFavoritedStatus]);

    const toggleFavorite = () => {
        const newFavoritedStatus = !isFavorited;
        console.log('toggleFavorite');
        console.log('why im not login:', getLogin());
        if (getLogin() === false) {
            enqueueSnackbar('Please login first!', {
                variant: 'error',
                anchorOrigin: { vertical: 'top', horizontal: 'center' },
                maxSnack: 1,
                className: 'shake-and-fade-out-animation',
                autoHideDuration: 800,
            });
            return;
        }

        if (newFavoritedStatus) {
            addFavorite(item);
            console.log('current fav:', getFavorites());

        } else {
            if (removeFavorite(item.id)) {
                console.log('removeFavorite');
            }
            else {
                console.log('removeFavorite failed');
            }
        }

        setIsFavorited(newFavoritedStatus);
        const message = newFavoritedStatus ? 'Add to favorite!' : 'Remove from favorite!';
        const variant = newFavoritedStatus ? 'success' : 'warning';
        enqueueSnackbar(message, {
            variant,
            anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
            maxSnack: 3,
            autoHideDuration: 800,
        });
    };


    const variants = {
        active: {
            scale: 1.1,
            fill: "#ffd700",
        },
        inactive: {
            scale: 1,
            fill: "#848a91",
            transition: { duration: 0.2 }
        }
    }

    return (
        <div className="popup-window">
            <motion.svg
                className="star-icon"
                onClick={toggleFavorite}
                variants={variants}
                initial="inactive"
                animate={isFavorited ? "active" : "inactive"}
                whileHover="active"
                style={{
                    cursor: 'pointer',
                    position: 'static',
                    top: '3rem',
                    left: '10rem'
                }}
            >
                <Star />
            </motion.svg>

        </div>
    );
};

export default Favorite;