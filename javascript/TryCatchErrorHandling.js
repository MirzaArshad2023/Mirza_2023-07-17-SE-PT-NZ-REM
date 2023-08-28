try {
    const error = "mismatched quotes"
    setTimeout(() => handleCode, 4000);
    setTimeout(() => console.log("Succesffuly finished"), 6000);
    } catch (error) {
    console.log(error)
    }

console.log("Applicaiton continues...")
console.log("Applicaiton continues...")
    //SyntaxError: Invalid or unexpected token - doesn't go to catch block