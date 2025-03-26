import { useState } from 'react';
 import { useFormInput } from '../hooks/useFormInput';
//  import { useUserContext } from '../context/userContext';
//  import { MyThemeContext } from '../context/ThemeContext';
 
 export default function SubscribeForm() {
    const [status, setStatus] = useState('');
    // use our custom hook instead of useState directly
    const [nameInputProps, resetName] = useFormInput('Mary');
    const [emailInputProps, resetEmail] = useFormInput('mary@pop.com');
    const {currentUser, handleUpdateUser} = useUserContext();
    

    function handleSubscribe() {
        resetName(); resetEmail();
        setStatus('Thanks for subscribing!')
    }
    
    if (currentUser.email) return (
      <>
      <p>Welcome back, {currentUser.name} ({currentUser.email})!</p>
        <button onClick={() => handleUpdateUser({})}>Log Out</button>
        </>
    );
   
    return (
       <div className="SubscribeForm componentBox"
       style={{background: theme.background, color: theme.foreground}}>
          <label>First name: <input {...nameInputProps} /></label>
          <label>Email: <input {...emailInputProps} /></label>
          <button onClick={handleSubscribe}>Subscribe</button>
          <div>{status}</div>
       </div>
    );
 }
 // ++ Try adding another form input using the custom hook
 // ++ Try creating another form component using the custom hook