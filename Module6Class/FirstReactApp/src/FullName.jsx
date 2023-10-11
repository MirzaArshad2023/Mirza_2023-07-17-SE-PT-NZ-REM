import NamePart from "./NamePart";

function FullName({firstName, lastName})
{
    return(
            <div className="FullName componentBox">
                First Name : <NamePart value={firstName}></NamePart>Last Name:<NamePart value={lastName}></NamePart>
            </div>
    );
}
export default FullName;