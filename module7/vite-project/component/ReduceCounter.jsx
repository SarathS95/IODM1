import { useReducer } from "react";

function ReducerCounter() {
   // useReducer takes a reducer function and the initial state value
   // returns array with the state variable and a dispatch function
   const [counter, dispatch] = useReducer(reducer, 0);
   const handleIncrement = () => {
       // we call the dispatch function to make all state updates
       dispatch({ type: "increment" });
       dispatch({type: "newIncrement"});
   };
   const handleDecrement = () => {
       // dispatch takes a single argument - object passed to reducer
       dispatch({ type: "decrement" });
       dispatch({type: "newDecrement"})
   };
   return (
      <div className="ReducerCounter componentBox">
         <h2>Count: {counter}</h2>
         <button onClick={handleIncrement}>Reducer Increment</button>
         <button onClick={handleDecrement}>Reducer Decrement</button>
         <button onClick={handleIncrement}>New Reducer Increment</button>
         <button onClick={handleDecrement}> New Reducer Decrement</button>
      </div>
   );
};
// see next slide for reducer function
export default ReducerCounter;

 // reducer function - can be called anything
 // takes two arguments: the current state, and the action to be taken
 // action is passed via dispatch, state is stored in component
 const reducer = (state, action) => {
    switch (action.type) { // switch statements are common in reducers
        case "increment":
            return state + 1;
            case "newIncrement":
                return state +5;
        case "decrement":
            return state - 1;
        case "newDecrement":
            return state -5;
        default:
            return state;
        
        
    }
 };
 // reducer function returns the new value of state after taking action
 // ++ Try to add more buttons for incrementing and decrementing by 5:
 // 1. Add the buttons
 // 2. Add handler functions which dispatch new types
 // 3. Update the reducer function to handle the new types