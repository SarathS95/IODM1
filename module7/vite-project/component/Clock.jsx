import { useState, useEffect } from "react";
 // Renders a digital time that updates every second
 export function Clock() {
    const [date, setDate] = useState(new Date());
    const [tickCount, setTickCount] = useState(0)

    // useEffect(() => { // first arg is usually an arrow function
    //     setInterval(() => tick(), 1000);
    //     console.log('Clock component mounted');
    // }, []); // second arg is an array of dependencies

    useEffect(() => {
        let clockInterval = setInterval(() => tick(), 1000);
        console.log('Clock component mounted');
        // function returned from useEffect is run on unmount
        // and used to cleanup any side effects
        return () => {
            console.log('Clock component unmounted');
            clearInterval(clockInterval);
            
        }
    }, []);

    const tick = () => {
        setDate(new Date());
        setTickCount(a => a+1);
        console.log('tick');
        console.log({tickCount}) // track the effect frequency
    };

    return (
        <div className="Clock">
            <p>{tickCount}</p>
            <h3>Digital Clock</h3>
            {date.toLocaleTimeString()}
        </div>
    );    
}
 // ++ Try removing the dependency array from useEffect
 // and notice the difference in ‘tick’ log messages
 // ++ Why do the console messages appear double