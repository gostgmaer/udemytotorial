import React from "react";
import "./styles.scss";
import moment from "moment";

const Expenses = () => {
  const data = [
    {
      id: 1,
      date: "2009-05-03T06:41:09Z",
      item: "Galliano",
      price: "$13.83",
    },
    {
      id: 2,
      date: "2010-12-25T12:30:48Z",
      item: "Cassis",
      price: "$58.08",
    },
    {
      id: 3,
      date: "2010-07-18T07:06:38Z",
      item: "Paper - Brown Paper Mini Cups",
      price: "$81.24",
    },
    {
      id: 4,
      date: "2002-10-27T12:01:28Z",
      item: "Yeast - Fresh, Fleischman",
      price: "$27.83",
    },
    {
      id: 5,
      date: "2006-03-18T22:06:31Z",
      item: "Lettuce - Belgian Endive",
      price: "$104.35",
    },
    {
      id: 6,
      date: "2008-05-22T21:52:43Z",
      item: "Olives - Black, Pitted",
      price: "$127.50",
    },
    {
      id: 7,
      date: "2021-04-02T14:38:50Z",
      item: "Muffin - Mix - Strawberry Rhubarb",
      price: "$111.94",
    },
    {
      id: 8,
      date: "2017-12-05T23:58:29Z",
      item: "Thyme - Fresh",
      price: "$184.57",
    },
    {
      id: 9,
      date: "2022-08-22T15:59:10Z",
      item: "Pepper - Chipotle, Canned",
      price: "$122.36",
    },
    {
      id: 10,
      date: "2020-06-30T10:38:04Z",
      item: "Muffin Mix - Lemon Cranberry",
      price: "$251.33",
    },
  ];

  const LIelement = ({ item }) => {
    return (
      <li>
        <div className="date">{moment().format("MMMM Do YYYY")}</div>{" "}
        <h3>{item.item}</h3> <div className="price">{item.price}</div>
      </li>
    );
  };

  return (
    <div className="Expenses">
      <div className="title">Expense List</div>
      <ul>
        {data.map((item) => (
          <LIelement key={item.id} item={item}></LIelement>
        ))}
      </ul>
    </div>
  );
};

export default Expenses;
