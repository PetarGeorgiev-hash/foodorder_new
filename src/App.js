import { useEffect, useState } from "react";
import "./App.css";
import Dishes from "./Components/Dishes/Dishes";
import Header from "./Components/Header/Header";
import OrderContext from "./orderContext/orderContext";
import OrderMoudle from "./Components/OrderModule/OrderModule";
import { createPortal } from "react-dom";

function App() {
  const [order, setOrder] = useState([]);
  const addToOrderHandler = (orderObj) => {
    setOrder((prevState) => {
      return [...prevState, orderObj];
    });
  };

  const removeItemHandler = (title) => {
    console.log(title);
    const index = order.findIndex((element) => element.title === title);
    setOrder((prevState) => {
      const uppdatedArr = [...prevState];
      uppdatedArr.splice(index, 1);
      return uppdatedArr;
    });
  };

  const [orderObj, setOrderObj] = useState({});
  useEffect(() => {
    const obj = {};
    order.forEach((orderElement) => {
      if (obj[orderElement.title]) {
        obj[orderElement.title] += orderElement.count;
      } else {
        obj[orderElement.title] = orderElement.count;
      }
    });
    setOrderObj(() => {
      return { ...obj };
    });
  }, [order]);

  const [isClicked, setIsClicked] = useState(false);
  const clickHandler = () => {
    if (isClicked === false) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  };

  return (
    <div className="app">
      <OrderContext.Provider
        value={{
          orderArr: order,
          addToOrder: addToOrderHandler,
          removeItem: removeItemHandler,
          orderCountObj: orderObj,
          isCountCliked: false,
          onClick: clickHandler,
        }}
      >
        <Header />
        {isClicked &&
          createPortal(<OrderMoudle />, document.getElementById("orderModule"))}
        <Dishes></Dishes>
      </OrderContext.Provider>
    </div>
  );
}

export default App;
