

export function ComplexComment(props) { // complex component which displays different elements of a comment
    return (
        <div className="Comment componentBox"> 
            <div className="UserInfo"> 
                {/* the user info is one aspect of the comment */}
                <img className="Avatar" src={props.author.avatarUrl} alt={props.author.name} />  
                <div className="UserInfo-name">{props.author.name}</div>
            </div>  
            <div className="Comment-text"> {/* the actual comment text is another aspect */}
                {props.text}
            </div>
            <div className="Comment-date"> {/* the comment date is another aspect */}
                {props.date.toLocaleString()}
            </div>
        </div>
    );
 } // save in a new file ComplexComment.jsx, then export it and import into App.js

 function UserInfo(props) {
    return (
        <div className="UserInfo componentBox">
             
             <div className="UserInfo-name">{props.author.name}</div>
             
        </div>
        
    )
}

function Avatar(props) {
    return (
        <img className="Avatar" src={props.author.avatarUrl} alt={props.author.name} />  
    )
}

function FormattedDate(props) {
    <div className="Comment-date"> {/* the comment date is another aspect */}
                {props.date.toLocaleString()}
            </div>
}