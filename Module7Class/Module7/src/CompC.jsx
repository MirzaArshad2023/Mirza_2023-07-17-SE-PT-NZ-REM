import { CompD } from "./CompD";
import { CompE } from "./CompE";
import { useFormInput } from "./useFormInput";
import { MyThemeContext } from "./MyThemeContextProvider";
import { useContext } from "react";
export function CompC()
{
    const { theme, setTheme, darkMode} = useContext(MyThemeContext);
    return(<>
        <p>Component C..</p>
        <p>{theme.background}</p>
        <CompD></CompD>
        <CompE></CompE>
    </>)
}