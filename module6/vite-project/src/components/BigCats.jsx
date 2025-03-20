import { useState } from "react";
import { AddCatForm } from "./AddCatForm";
function SingleCat({name, latinName, image}) {
    return (
        <>
        {/* no key prop here - only at top level inside .map */}
        <li> 
            <div className="SingleCat componentBox">
                <img src={image} alt={name} width={'100px'} height={'100px'} />
                <h3>{name} {latinName}</h3> 
            </div>
            {/* <h3>{title}</h3> <span>({year})</span> */}
            {/* <div>{synopsis}</div> */}
        </li>
        </>
    )
}


function BigCats(){
const cats = [
    { id:1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: "https://twpark.com/wp-content/uploads/2023/05/2023MAY02_BABY_CHEETAH_CUBS_KAZI_ZURI_ANDIALEXANDER_0_DSC06575-Enhanced-NR-1-683x1024.jpg" },
    { id:2, name: 'Cougar', latinName: 'Puma concolor', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVmkK46QOwpU5gqtIOkN5zarNDlBm9DWGNaA&s" },
    { id:3, name: 'Jaguar', latinName: 'Panthera onca', image: "https://www.zooborns.com/.a/6a010535647bf3970b014e87f404fb970d-500wi" },
    { id:4, name: 'Leopard', latinName: 'Panthera pardus', image:"https://static.vecteezy.com/system/resources/thumbnails/037/920/119/small/ai-generated-adorable-little-leopard-resting-on-rocks-baby-wild-animals-photo.jpeg" },
    { id:5, name: 'Lion', latinName: 'Panthera leo', image: "https://media.zenfs.com/en/pethelpful_915/8f8496bb14672189aace5b1a6020f6dc" },
    { id:6, name: 'Snow leopard', latinName: 'Panthera uncia', image: "https://www.wric.com/wp-content/uploads/sites/74/2022/11/Alakhai-5.jpg?strip=1" },
    { id:7, name: 'Tiger', latinName: 'Panthera tigris', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvOf2ASwwVoO0GXfuFAH6C3HErGRv1eVOjlg&s" },
   ];
   
   const [catList, setcatList] = useState (cats)
const sortCats = () => {
    setcatList([...catList].sort((a, b) => a.name.localeCompare(b.name)))
}
const catFamily = () => {
    setcatList([...catList].filter(cats => cats.latinName.startsWith("Panthera") ))
}

const resetCats =() => {
    setcatList(cats);
}

   const catItems = catList.map(cats => (
    <li key={cats.id}><SingleCat name={cats.name} latinName={cats.latinName} image={cats.image}/></li>
   ))
  

   return (
    <div className="BigCats componentBox">
        <AddCatForm />
         <button onClick={sortCats}>SortCats</button>
         <button onClick={catFamily}>Cat Family</button>
         <button onClick={resetCats}>Reset</button>
        <ul>
           
            {catItems}
            {/* {cats.map(cats => (
                <li key= {cats.id}>{cats.name} {cats.latinName} {cats.image}</li>
            ))}
             */}
        </ul>
    </div>
   )
}
export default BigCats;