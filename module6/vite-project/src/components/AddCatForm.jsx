import { useState } from "react";


export function AddCatForm () {
    const [catName, setCatName] = useState('')
    const [catLatinName, setCatLatinName] = useState('')
    const [catImage, setCatImage] = useState('');
    const [submitResult, setSubmitResult] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
    
        // guessing to create a new value/key**
      const newCat = {
        id: '',
        name: catName,
        latinName: catLatinName,
        image: catImage
      }
      onAddCat(newCat)
      setSubmitResult("Cat Added")
    }
    
   
    

    return (
        
        <div className="AddCatForm componentBox">
            <form onSubmit={handleSubmit}>
                <button>Add Cat</button>
                <p>{submitResult}</p>
           
            <div className="formRow">
                <label>Cat Name:
                    <input type="catName" value={catName} name="catName"
                    onChange={(e) => setCatName(e.target.value)} />
                    </label>
            </div>
            <div className="formRow">
                <label>Cat LatinName:
                    <input type="latinName" value={catLatinName} name="LatinName"
                    onChange={(e) => setCatLatinName(e.target.value)} />
                    </label>
            </div>
            <div className="formRow">
                <label>Cat Pic:
                    <input type="catImage" value={catImage} name="catImage"
                    onChange={(e) => setCatImage(e.target.value)} />
                    </label>
            </div>
            </form>

        </div>
    )
}
