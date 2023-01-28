import React from "react";
import moment from "moment";
import { MdClose } from "react-icons/md";
import { data } from "../../Assets/StaticData/ExpenseList";
import { useGlobalContext } from "../../Context/GlobalCOntext";
const ExpenseListItem = ({ item }) => {
  const { expense, setExpense,expanseHistory, setExpanseHistory } = useGlobalContext();
  const deleteExpense = (id) => {
    setExpense(expense.filter((item) => item.id !== id));
    console.log(expense);
  };
  const editExpenseData = (id) => {
    const dataItem =   expense.find((item)=>item.id===id)
    setExpanseHistory(dataItem)
  };
  
  



  return (
    <li className="ExpenseListItem">
      <div className="date">{moment(item.date).format("MMMM Do YYYY")}</div>{" "}
      <h3>{item.item}</h3> <div className="price">{item.price}</div>
      <span className="delete">
        <MdClose onClick={() => deleteExpense(item.id)}></MdClose>
      </span>
    </li>
  );
};

export default ExpenseListItem;
