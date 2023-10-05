import { useContext } from "react"
import styles from "./Order.module.css"
import OrderContext from "../../../orderContext/orderContext"
const Order = (props) =>{
    const ctx = useContext(OrderContext)
    return <div onClick={()=>{ ctx.removeItem(props.title)}} className={styles.order}>{props.title} <span>x{props.count}</span></div>
}

export default Order