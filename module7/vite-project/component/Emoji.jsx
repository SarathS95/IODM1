import { useState } from "react";
import { createContext } from "react";
export function Emoji(){
    const [emoji, setEmoji] = useState('😀');

    const happy =() => {
    setEmoji('😆')
}

    const sad =() => {
        let newEmoji = '😥';
        if (emoji === '😥') newEmoji = '😥';
        setEmoji(newEmoji)
    }

    return (
       <div className="Emoji">
        current Emoji: {emoji}
        <button onClick={() => setEmoji('😝')}>Excited</button>
        <button onClick={sad}>Sad</button>
        <button onClick={happy}>Happy</button>
       </div>
    )
    
}