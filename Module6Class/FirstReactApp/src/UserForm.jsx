function UserForm()
{
    function HandleSubmit(eventHandler)
    {
        //alert("Form submitted");
        eventHandler.preventDefault();
        alert(eventHandler.target.elements.firstName.value)
    }
    return(
        <>
        <form onSubmit={HandleSubmit}>
            <div>
                <label>First Name:</label>
                <input type='text' name="firstName"></input>
            </div>
            <div>
                <label>Email:</label>
                <input type='email' name="useremail"></input>
            </div>
            <div>
                <input type='submit' value='submit'></input>
            </div>
            
        </form>
        </>
    )
}
export default UserForm;