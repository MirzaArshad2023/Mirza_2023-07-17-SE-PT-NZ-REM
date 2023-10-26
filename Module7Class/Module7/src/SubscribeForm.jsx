import { useState } from "react";
import { useFormInput } from "./useFormInput";

export default function SubscribeForm() {

    const [status, setStatus] = useState('');

    // similar state variables mapped to form inputs
    //const [firstName, setFirstName] = useState('Mary');
    //const [email, setEmail] = useState('mary@poppins.com');
    const [inputFieldFirstName, resetFirstName] =  useFormInput('Mary')
    const [inputFieldemail, resetemail] =  useFormInput('mary@xyz.com')
    // similar handler functions
    //const handleNameChange = (e) => setFirstName(e.target.value);
    //const handleEmailChange = (e) => setEmail(e.target.value);
    
    function handleSubscribe() {
        //setFirstName(''); setEmail('');
        resetFirstName();
        resetemail();
        setStatus('Thanks for subscribing!')
    }
    
    return (
        <div className="SubscribeForm componentBox">
            <label>First name: {/* form inputs with similar props */}
                <input {...inputFieldFirstName} />
            </label>
            <label>Email: {/* form inputs with similar props */}
                <input {...inputFieldemail} />
            </label>
            <button onClick={handleSubscribe}>Subscribe</button>
            <div>{status}</div>
        </div>
    );
}