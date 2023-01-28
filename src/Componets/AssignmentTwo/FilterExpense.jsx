import moment from "moment";
import React, { useEffect, useState } from "react";
import { data } from "../../Assets/StaticData/ExpenseList";
import { useGlobalContext } from "../../Context/GlobalCOntext";
import LineChartWithLabel from "./Charts";

const FilterExpense = () => {
  const { getYear, setGetYear, expense } = useGlobalContext();
  const [getMonth, setGetMonth] = useState(null);
  const [showChart, setShowChart] = useState(false);
  let uniqueYears = Array.from(
    new Set(expense.map((item) => moment(item.date).format("yyyy")))
  );
  let uniqueMonths = Array.from(
    new Set((getYear
      ? expense?.filter(
        (item) => moment(item.date).format("yyyy") === getYear
      )
      : expense)?.map((item) => moment(item.date).format("MM")))
  );



  const selectYear =(e)=>{
    setGetYear(e.target.value)
    setShowChart(true)
  }

  return (
    <div className="FilterExpense">
     { showChart && <LineChartWithLabel ChartData={(getYear
        ? expense?.filter(
          (item) => moment(item.date).format("yyyy") === getYear
        )
        : expense)?.map(item => item.price)} dataLabel={(getYear
          ? expense?.filter(
            (item) => moment(item.date).format("yyyy") === getYear
          )
          : expense)?.map((item) => moment(item.date).format("MM"))}></LineChartWithLabel>}
      <div className="expenses-filter">
        <div className="expenses-filter__control">
          <label>Filter by year</label>
          <select onChange={selectYear}>
            {uniqueYears.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterExpense;
