import { useEffect } from "react";

let myVar = 10;

function test(){

    useEffect(()=>{
    
        myVar = 20;
        myFunction(myVar);
    });

    function myFunction(myVar){

    }
    
    return(
        {myVar}
    );
}
    