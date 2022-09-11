import { useState } from "react";
import { createContext } from("react");

const FavoritesContext = createContext({
    ids: [],
    addFavourite: (id) => {},
    removeFavourite: (id) => {}
});

function FavoritesContextProvider({children}) {
    const [favMealIds, setFavMealIds] = useState([])

    function addFavourite(id){
        setFavMealIds((current) => [...current,id]);
    }

    function removeFavourite(id){
        setFavMealIds((current) => current.filter((mealId) => mealId != id))
    }

    const value = {
        ids: favMealIds,
        addFavourite: addFavourite,
        removeFavourite: removeFavourite
    }

    return <FavoritesContext.Provider value={value} > {children} </FavoritesContext.Provider>
}

export default FavoritesContextProvider