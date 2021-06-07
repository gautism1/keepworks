import React, { useState } from "react";
import "../style/home.css";

function Home() {
  let [output, setOutput] = useState("0");
  let [type, setCalcultorType] = useState(false);

  function calculate(s) {
    try {let b;
      let n = s.length;
        //checking if the expression is valid or not
      if (s[0] == "*" || s[0] == "/" || s[n - 1] == "*" || s[n - 1] == "/")
       {  alert("wrong expression,Please clear  ");
        return;
       } 
      else {
       
        for (let i = 0; i < n - 1; i++) {
          if (isoperator(s[i]) && isoperator(s[i + 1])) {
            alert("wrong expression,Please clear  ");
            return;
          }
        }
          //computing the exprssion entered if valid 
        var a = s
          .split("+")
          .join()
          .split("-")
          .join()
          .split("*")
          .join()
          .split("/")
          .join()
          .split(",");                       // taken all operands out of the expression 
          let op=[];
        for (let i = 1; i < n - 1; i++)
         {       
             if(isoperator(s[i]))
               op.push(s[i]);                // taken alll operators out of expression sequentially
         }
         let ans;
        
         if(a.length>1 && op.length>0)
         {     
          if(s[0]=='-')
            {  
             ans=eval('-1*'+a[0]+op[0]+a[1]);}
       else 
           ans=eval(a[0]+op[0]+a[1]);

       for(let i=1;i<op.length;i++)
       {
          ans=eval(ans.toString()+op[i]+a[i+1]);    
       }      
                setOutput(ans.toString());
            b=ans;
         }
        
      }
      return b;
    } catch (e) {
      alert("something went wrong")
      setOutput("");
    }
  }

  function isoperator(c) {
    if (c == "+" || c == "-" || c == "*" || c == "/") return true;
    else return false;
  }
  
  function square() {
    try {
        if (output === "") return;
        else
        {
            const result = calculate(output);
            setOutput(result * result);
        }  
    } catch (e) {
      alert("Something went wrong")
      setOutput("");
    }
  }

  function squareRoot() {
    try {
      if (output === "")  return;
      else {
        const result = Math.sqrt(calculate(output));
        setOutput(result);
      }
    } catch (e) {
      setOutput("error");
    }
  }


  function flip() {
    try {
      if (output === "") return;
      else {
        const result = -1 * eval(output);
        setOutput(result);
      }
    } catch (e) {
      setOutput("error");
    }
  }

  function operation(e) {
    const value = e.target.getAttribute("data-value");
    switch (value) {
      case "clear":
        setOutput("");
        break;
      case "calculate":
        calculate(output);
        break;
      case "square":
        square();
        break;
      case "squareroot":
        squareRoot();
        break;
      case "flip":
        flip();
        break;
      default:
        setOutput(output + value);
        break;
    }
  }
  return (
    <div className="home">
      <div className="changemode" onClick={() => setCalcultorType(!type)}>
          switch to:
        {!type && <span> Scientific Mode</span>}
        {type && <span> Simple Mode</span>}
      </div>
      <div className="workSpace">
        <div className="displayOutput">{output}</div>
        <div className="keypad">
          <div onClick={operation} data-value="1" className="button   dark-theme || light-theme">
            1
          </div>
          <div onClick={operation} data-value="2" className="button">
            2
          </div>
          <div onClick={operation} data-value="3" className="button">
            3
          </div>
          <div onClick={operation} data-value="+" className="button">
            Add
          </div>
          <div onClick={operation} data-value="4" className="button">
            4
          </div>
          <div onClick={operation} data-value="5" className="button">
            5
          </div>
          <div onClick={operation} data-value="6" className="button">
            6
          </div>
          <div onClick={operation} data-value="-" className="button">
            Subtract
          </div>
          <div onClick={operation} data-value="7" className="button">
            7
          </div>
          <div onClick={operation} data-value="8" className="button">
            8
          </div>
          <div onClick={operation} data-value="9" className="button">
            9
          </div>
          <div onClick={operation} data-value="*" className="button">
            Multiply
          </div>
          <div onClick={operation} data-value="clear" className="button">
            Clear
          </div>
          <div onClick={operation} data-value="0" className="button">
            0
          </div>
          <div onClick={operation} data-value="calculate" className="button">
            =
          </div>
          <div onClick={operation} data-value="/" className="button">
            Divide
          </div>
          {type && (
            <>
              <div
                onClick={operation}
                data-value="flip"
                className="button scientific"
              >
                Flip
              </div>
              <div
                onClick={operation}
                data-value="square"
                className="button scientific"
              >
                Square
              </div>
              <div
                onClick={operation}
                data-value="squareroot"
                className="button scientific"
              >
                Square Root
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
