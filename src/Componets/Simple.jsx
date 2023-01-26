import React from "react";

const Simple = () => {
  const array = Array.from(Array(10).keys());
  console.log(array);
  function transformToObjects(numberArray) {
    // Todo: Add your logic
    // should return an array of objects
    return numberArray.map((item) => ({ val: item }));
  }
  const [discount, setDiscount] = React.useState(100);
  const [validMessage, setValidMessage] = React.useState(null);
  const [text, setText] = React.useState("");
  const [count, setcount] = React.useState(0);
  transformToObjects(array);

  const textChangehandler = (e) => {
    setText(e.target.value);
    text.length <3 ? setValidMessage("Valid") : setValidMessage("Invalid");
  };
 

  return (
    <div>
      <h1>Exercise done!</h1>
      <button onClick={() => console.log("Stored!")}>Bookmark</button>;
      <p>${discount}</p>
      <button onClick={() => setDiscount((discount / 100) * 75)}>
        Apply Discount
      </button>
      <div>
        {" "}
        <label>Your message</label>
        <input
          type="text"
          value={text}
          onChange={textChangehandler}
        />
        <p>{validMessage} message</p>
      </div>
      <div className="counterBlock"><p id="counter">{count}</p>
        <button onClick={()=>setcount(count+1)}>Increment</button></div>
      {}
    </div>
  );
};

export default Simple;
