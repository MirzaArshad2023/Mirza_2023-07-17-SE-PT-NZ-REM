import { useState } from "react";

function ShowCounts()
{

    //let number = 10;



    const [number, setNumber] = useState(10)
    const [language, setlanguage] = useState('english')

    function IncreaseCount(num1)
    {
        //lert("called")
        setNumber(number + 1);
        console.log(number);
    }
    return(
        <>
            <div>
                Language is : {language}
            </div>
            <div>Number is {number}</div>

            <button onClick={IncreaseCount(12)}>ClickMe</button>
            <button onClick={()=> setlanguage('English')}>English</button>
            <button onClick={()=> setlanguage('Spanish')}>Spanish</button>
        </>
    )

}
export default ShowCounts;