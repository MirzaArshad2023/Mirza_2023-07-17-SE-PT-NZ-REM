import { SecondComponent, ThridComponent } from "./SubComponents";
import './App.css'

function ExampleComponent({firstName, Institute, Country="NZ", children})
{
    return (
        <>
             {children}
            <h1 className="header">Example component</h1>
            <p>Written by {firstName} from Insititue {Institute} in Country {Country}</p>
            <SecondComponent></SecondComponent>
            <ThridComponent></ThridComponent>
           
        </>
    );
}

export default ExampleComponent;