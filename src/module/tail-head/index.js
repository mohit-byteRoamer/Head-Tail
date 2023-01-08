import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
let Head_Tail = function () {
  const [array, setArray] = React.useState([]);
  const [value, setValue] = React.useState("");
  let getVaule = (e) => {
    setValue(e.target.value);
  };
  let pushVaule = function (value) {
    if (!value) {
      return;
    }
    debugger;
    let cloneArray = [...array];
    if (cloneArray.length == 0) {
      cloneArray.push([value]);
      cloneArray.push([]);
      setArray(cloneArray);
      return;
    }
    let Value = value;
    let complete = false;
    for (let i = 0; i <= cloneArray.length - 1; i++) {
      if (complete) {
        setArray(cloneArray);
        return;
      }
      let checkArray = cloneArray[i];
      if (checkArray.length == 0) {
        checkArray.push(Value);
        cloneArray.push([]);
        setArray(cloneArray);

        return;
      }
      for (let j = checkArray.length - 1; j >= 0; j--) {
        if (checkArray[j] == Value) {
          break;
        }
        checkArray.push(Value);
        complete = true;
        break;
      }
    }
  };
  return (
    <div className="headTail">
      <div className="pageHeader">Head & Tail</div>
      {value}
      <div className="dragDown">
        <label className="label">Select Options</label>
        <div style={{ display: "flex" }}>
          <select value={value} onChange={getVaule} className="select">
            <option value={"Head"}>Head</option>
            <option value={"Tail"}>Tail</option>
          </select>
          <div onClick={() => pushVaule(value)} className="button">
            Accept
          </div>
        </div>
      </div>
      <div>
        {array.map((newArray, index) => {
          return (
            <>
              {newArray.length > 0 ? (
                <div className="array" key={index}>
                  {newArray.map((val, key) => {
                    return (
                      <div className="arrayOfArray" key={key}>
                        {val}
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Head_Tail;
