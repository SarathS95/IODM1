import { useState } from "react";

export function AddCatForm () {
    const [catName, setCatName] = useState('')
    const [catLatinName, setCatLatinName] = useState('')
    const [catImage, setCatImage] = useState('');
    const [submitResult, setSubmitResult] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    // if (catName != catFamily) {
    //     setSubmitResult('Only can add Cat species');
    // }else{
    //         setSubmitResult('Cat Added Successfully')
    //     }
    

    return (
        
        <div className="AddCatForm componentBox">
            <form onSubmit={handleSubmit}>
                <button>Add Cat</button>
                <p>{submitResult}</p>
            </form>
            <div className="formRow">
                <label>Cat Form:
                    <input type="catName" value={catName} name="catName"
                    onChange={(e) => setCatName(e.target.value)} />
                    </label>
            </div>
            <div className="formRow">
                <label>Cat Form:
                    <input type="latinName" value={catLatinName} name="LatinName"
                    onChange={(e) => setCatLatinName(e.target.value)} />
                    </label>
            </div>
            <div className="formRow">
                <label>Cat Form:
                    <input type="catImage" value={catImage} name="catImage"
                    onChange={(e) => setCatImage(e.target.value)} />
                    </label>
            </div>

        </div>
    )
}
