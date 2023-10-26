import { useState } from "react";
import { useFormInput } from "./useFormInput";

export default function SubscribeForm() {
    const [status, setStatus] = useState('');
    // similar state variables mapped to form inputs
    const [firstNameInputProps, resetFirstName] = useFormInput('Mary');
    const [emailInputProps, resetEmail] = useFormInput('mary@poppins.com');
    // similar handler functions

    function handleSubscribe() {
        resetFirstName();resetEmail();
        setStatus('Thanks for subscribing!')
    }
    return (
        <div className="SubscribeForm componentBox">
            <label>First name: {/* form inputs with similar props */}
                <input {...firstNameInputProps} />
            </label>
            <label>Email: {/* form inputs with similar props */}
                <input {...emailInputProps} />
            </label>
            <button onClick={handleSubscribe}>Subscribe</button>
            <div>{status}</div>
        </div>
    );
}