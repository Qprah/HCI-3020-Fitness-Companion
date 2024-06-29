// favoritesAPI.js
let favorites = [];

const addFavorite = (exercise) => {

    const isFavorite = favorites.some(fav => fav?.id  === exercise.id);
    if (!isFavorite) {
        favorites.push(exercise);
        return true;
    }
    return false;
};

const removeFavorite = (exerciseId) => {
    const initialLength = favorites.length;
    favorites = favorites.filter(fav => fav?.id !== exerciseId);
    return initialLength !== favorites.length;
};


const getFavorites = () => {
    return favorites;
};

const getFavorite = (exerciseId) => {

    return favorites.find(fav => fav?.id === exerciseId);
};

export { addFavorite, removeFavorite, getFavorites, getFavorite };
