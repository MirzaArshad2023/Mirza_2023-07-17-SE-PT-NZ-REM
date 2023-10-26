import { useState } from "react";
import { CompB } from "./CompB";

export function CompA()
{
    return(
        <>
            <div><p>..CompA</p></div>
            <div>
                <CompB></CompB>
            </div>
        </>
    )
}
