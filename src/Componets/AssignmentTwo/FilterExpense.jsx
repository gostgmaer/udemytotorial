import moment from "moment";
import React from "react";
import { data } from "../../Assets/StaticData/ExpenseList";
import { useGlobalContext } from "../../Context/GlobalCOntext";

const FilterExpense = () => {
  const { getYear, setGetYear,expense } = useGlobalContext();
  let uniqueYears = Array.from(
    new Set(expense.map((item) => moment(item.date).format("yyyy")))
  );

  return (
    <div className="FilterExpense">
      <div className="expenses-filter">
        <div className="expenses-filter__control">
          <label>Filter by year</label>
          <select onChange={(e) => setGetYear(e.target.value)}>
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
