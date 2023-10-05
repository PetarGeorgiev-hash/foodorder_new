import { useState } from "react"
import OrderContext from "../../orderContext/orderContext"
import { useContext, useEffect } from "react"
import styles from "./Header.module.css"
import image from "./logo1.png"
import OrderIcon from "./OrderIcon/OrderIcon"
const Header = () =>{
  const [count,setCount] = useState(0);
  const ctx = useContext(OrderContext);
  const { orderCountObj : order} = ctx;

  useEffect( () => {
    let total = 0
    for (const key in order) {
      total += order[key]
    }

    setCount(total)
    
  } , [order])
  

    return <div className={styles.headerWrapper}>
      <div className={styles.container}>Food Order App</div>
      <div><OrderIcon className={styles.logo} image={image}/></div>
      <div onClick={ctx.onClick} className={styles.container + " " + styles.button}>Order <span style={{margin : "0 0 0 12px"}}>{count}</span></div>
    </div>
}

export default Header