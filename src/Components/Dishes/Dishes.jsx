import styles from "./Dishes.module.css"
import DishCard from "./DishCard/DishCard"
const dishes = {
    "dishes": [
      {
        "name": "Spaghetti Carbonara",
        "price": "$10 - $12 per serving",
        "ingredients": "Spaghetti, Eggs, Parmesan cheese, Pancetta"
      },
      {
        "name": "Chicken Alfredo",
        "price": "$12 - $15 per serving",
        "ingredients": "Fettuccine pasta, Chicken breast, Heavy cream, Parmesan cheese, Garlic, Butter"
      },
      {
        "name": "Vegetable Stir-Fry",
        "price": "$8 - $10 per serving",
        "ingredients": "Assorted vegetables (e.g., bell peppers, broccoli, carrots), Tofu or chicken (optional), Soy sauce, Ginger, Garlic, Sesame oil, Rice or noodles"
      },
      {
        "name": "Margherita Pizza",
        "price": "$8 - $10 per pizza",
        "ingredients": "Pizza dough, Tomato sauce, Fresh mozzarella cheese, Fresh basil leaves, Olive oil, Salt, Garlic (optional)"
      }
    ]
  }



const Dishes = () =>{
  return <div className={styles.card}>
    {dishes.dishes && dishes.dishes.map( (dish) => ( <DishCard key={Math.random()} title={dish.name} ingredients={dish.ingredients} price={dish.price}/>))}
  </div>
}

export default Dishes
