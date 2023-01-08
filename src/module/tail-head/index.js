import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
let Head_Tail = function () {
  const options = ["Head", "Tail"];
  const [array, setArray] = React.useState([]);
  const [value, setValue] = React.useState("");
  const [message, setMessage] = React.useState(false);
  const [option, setOption] = React.useState(false);
  let showOption = () => {
    setOption(option ? false : true);
  };
  let getVaule = function (value) {
    setValue(value == "Head" ? "H" : "T");
  };
  let pushVaule = function (value) {
    if (!value) {
      setMessage(true);
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
  React.useEffect(() => {
    setTimeout(() => {
      setMessage(false);
    }, 2000);
  }, [message]);
  return (
    <div className="headTail">
      <div className="pageHeader">Head & Tail</div>
      <div style={{ color: "red" }}>
        {message ? "Please select value from dropdown" : null}
      </div>
      <div className="controller">
        <div className="selectionBox">
          <div onClick={showOption} className="label">
            Select Options
          </div>
          {option
            ? options.map((val, key) => {
                return (
                  <div
                    onClick={() => getVaule(val)}
                    className="options"
                    key={key}
                  >
                    {val}
                  </div>
                );
              })
            : null}
        </div>
        <div onClick={() => pushVaule(value)} className="button">
          Submit
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
