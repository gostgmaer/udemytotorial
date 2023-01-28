import moment from "moment";
import React, { useState } from "react";
import { data } from "../../Assets/StaticData/ExpenseList";
import { useGlobalContext } from "../../Context/GlobalCOntext";
import LineChartWithLabel from "./Charts";
import ExpenseForm from "./ExpenseForm";
import ExpenseListItem from "./ExpenseListItem";
import FilterExpense from "./FilterExpense";
import "./styles.scss";

const AssignmentExpense = () => {
  const { expense, getYear } = useGlobalContext();
  const [openAddExpense, setOpenAddExpense] = useState(false);

  const expenseFormHandler = () => {
    setOpenAddExpense(!openAddExpense)
  }
  return (
    <div className="AssignmentExpense">
      <div className="Expenses">
        <div className="title">Expense List</div>
        <div className="add">
          {openAddExpense ? <ExpenseForm expenseFormHandler={expenseFormHandler} ></ExpenseForm> : <button onClick={expenseFormHandler}>Add Expenses</button>}

        </div>
        <FilterExpense></FilterExpense>
     
        <ul>
          {(getYear
            ? expense?.filter(
              (item) => moment(item.date).format("yyyy") === getYear
            )
            : expense)?.map((item) => (
              <ExpenseListItem key={item.id} item={item}></ExpenseListItem>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default AssignmentExpense;
