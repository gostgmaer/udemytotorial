import React, { useEffect, useState } from "react";
import { data } from "../../Assets/StaticData/ExpenseList";
import { useGlobalContext } from "../../Context/GlobalCOntext";

const ExpenseForm = ({ expenseFormHandler }) => {
  const { expense, getYear,setExpense } = useGlobalContext();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState('');

  const saveExpense = () => {
    if (name === '' || date === '' || amount === '') {
      setError('field are blank please add data to fields')
    }else{
      const newObj = {
        id: data.length + 1,
        item: name,
        date: date,
        price: amount,
      };
      console.log(newObj);
      setExpense([...expense,newObj])
      // let newArr =[ ...expense,newObj]
      // console.log(newArr);
      expenseFormHandler()
      setError(null)
    }
    

  };
  const UpdateExpense = () => { };

  useEffect(() => {
    console.log(expense);
  
   
  }, []);

  return (
    <div className="ExpenseForm">
      <h2>Add Expenses</h2>
     {error&& <h4 style={{color:'red'}}>{error}</h4>}
      <div className="form">
        <div className="formGroup">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </div>
        <div className="formGroup">
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="datetime-local"
          />
        </div>
        <div className="formGroupLg">
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
          />
        </div>
        <div className="formGroupLg">
          <button onClick={saveExpense}>Save Expense</button>{" "}
          <button onClick={expenseFormHandler}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ExpenseForm;
