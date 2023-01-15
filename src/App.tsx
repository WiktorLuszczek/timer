import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";

function App() {
    const [minute, setMinute] = useState<number>(1);
    const [second, setSecond] = useState<number>(0)
    const [time, setTime] = useState<number>(0);
    const [showButton ,setShowButton] = useState<boolean>(true)
    const [timeoutId, setTimeoutId] = useState<number>(0)
    const start = () => {
        setTime((minute * 60) + second)
        setShowButton(!showButton)
    }
    const stop = () => {
        setShowButton(!showButton)
    }
    useEffect(() =>{
        if(!showButton)
        if(time > 0){
             const id = setTimeout(()=>setTime(time - 1), 1000);
             console.log(id)
             setTimeoutId(id);
             return () => clearTimeout(timeoutId)
        }
    },[time]);

    return(
        <>
            <label>Minuty: </label>
            <input type="number" defaultValue={1} onChange={(e) => setMinute(Number(e.target.value))} min={0}></input>
            <label>Sekundy: </label>
            <input type="number" defaultValue={0} onChange={(e) => setSecond(Number(e.target.value))} min={0} max={60}></input>
            <br></br>
            {showButton ? 
                <button onClick={start}>Start / Restart</button>
                :
                <button onClick={stop}>Stop</button>
            }
            <br></br>
            <p>  Minuty : sekundy</p>
            <span>{
                Math.ceil((time) / 60) - 1 < 0 
                ? 
                0 
                : Math.ceil((time +1 )/ 60) - 1
            }
            : 
            {
                time % 60
            }
            </span>
        </>
    )
}

export default App;
