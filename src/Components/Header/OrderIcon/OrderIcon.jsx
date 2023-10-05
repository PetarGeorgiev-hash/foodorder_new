import styles from "./OrderIcon.module.css"

const OrderIcon = (props) => {
    const imgClickHandler= () =>{
        console.log("Ordering");
    }
    return <img onClick={imgClickHandler}className={props.className + " " + styles.orderImg} src={props.image} alt="burger icon"></img>
}

export default OrderIcon