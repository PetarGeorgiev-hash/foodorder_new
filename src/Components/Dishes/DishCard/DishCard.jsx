import { useContext, useRef} from "react"
import styles from "./DishCard.module.css"
import OrderContext from "../../../orderContext/orderContext"

const DishCard = (props) =>{

    const ctx = useContext(OrderContext)
    const inputRef = useRef(null)

    const submitHandler = (event) =>{
        event.preventDefault()
        ctx.addToOrder({title : props.title, count: +inputRef.current.value})
    }

    return <div className={styles.card}>
       <div>
        <div>{props.title}</div>
        <div>{props.ingredients.length > 80 ? props.ingredients.slice(0,50) + "..." : props.ingredients}</div>
      </div> 
      <div>
        <form className={styles.cardForm} onSubmit={submitHandler}>
            <input ref={inputRef} type="number" min="1" defaultValue="1"></input>
            <button type="submit">Add</button>
        </form>
      </div>
    </div>
}

export default DishCard 