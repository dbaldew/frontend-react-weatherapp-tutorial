import React,{createContext} from "react";

export const TempContext = createContext(null);

function TempContextProvider (){
    //state

    return(
        <TempContextProvider value={}>
            {children}
        </TempContextProvider>
    )
}

export default TempContextProvider;