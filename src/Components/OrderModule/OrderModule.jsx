    import { useContext, useEffect, useState } from "react"
    import OrderContext from "../../orderContext/orderContext"
    import styles from "./OrderModule.module.css"
    import Order from "./Order/Order"

    const OrderMoudle = () =>{
        const [orderArr, setOrderArr] = useState([])
        const ctx = useContext(OrderContext)
        const { orderCountObj : order} = ctx
        useEffect( ()=>{
            const arr = []
            for (const key in order) {
                arr.push({title : key , count : order[key]})
            }
            setOrderArr(arr)
        }, [order])
        return <div className={styles.orderModule}>
            { orderArr.length > 0 ? orderArr.map( (order)=> { 
                return <Order key={Math.random()} title={order.title} count={order.count} />
            }) : <div className={styles.noItems}>No itmes selected</div>}
            <div onClick={ctx.onClick} className={styles.closeBtn}>Close</div>
        </div>
    }

    export default OrderMoudle