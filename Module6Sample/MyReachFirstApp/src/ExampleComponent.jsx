import { useState } from "react";

function ExampleComponent(props)
{
    const [num1, setNumber] = useState(10);
       
    return(
    <>
      <h1 style={{color:'red', textTransform: 'uppercase'}}>Example component {props.fistName} and institue name passed {props.Institute} and number is {num1}</h1>
      {props.children}
      <button onClick={()=> setNumber(num1 + 1)}>ClickMe</button>
      </>
    );

}

export default ExampleComponent;

