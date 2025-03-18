import { useState } from "react";
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
        <button onClick={() => setEmoji('😝')}></button>
        <button onClick={sad}></button>
        <button onClick={happy}></button>
       </div>
    )
    
}