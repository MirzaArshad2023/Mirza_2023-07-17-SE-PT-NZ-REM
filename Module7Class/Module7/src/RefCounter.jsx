import { useRef, useState } from "react";
export default function RefCounter() {

    const [state, updateState] = useState(0);

    let countRef = useRef(0); // one counter stored in a ref
    let count = 0; // one counter stored in a normal variable

    function handleClick() {
        updateState(state + 1);
        // update countRef object when clicking, via current property
        countRef.current = countRef.current + 1;
        count = count + 1; // update count variable when clicking
        // both counts should be the same value
        alert(`You clicked ${countRef.current} (${count}) times!`);
    }

    return (
        <div className="RefCounter componentBox">
            <p>You clicked :useRef variable {countRef.current} and javascript variable {count}</p>
            <button onClick={handleClick}>
                REFCOUNTER: Click me!
                {/* try rendering {count} and {countRef.current} here */}
            </button>
        </div>
    );
}
