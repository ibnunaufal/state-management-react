import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MealsList from '../components/MealsList/MealsList';
import { MEALS } from '../data/dummy-data';
import { FavoritesContext } from './../store/context/favorites-context'

function FavoritesScreen() {
  const favContext = useContext(FavoritesContext)

  const favMeals = MEALS.filter(meal => favContext.ids.includes(meal.id))

  if(favMeals.length === 0){
    return (
      <View style ={styles.rootConteiner}>
        <Text style={styles.text}>
          Favourites is Empty !!
        </Text>
      </View>
    )
  }
  
  return <MealsList items={favMeals} />
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootConteiner: {
    flex:1 ,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontStyle: 'bold',
    color: 'white'
  }
})