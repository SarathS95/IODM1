

export function Greetings(props) {
    const stringPorps = JSON.stringify(props.name)
return (
    <div className="Greetings componentBox">
        <h1>Hello {props.name ? `${props.name}` : "World"}</h1>
        {props.children}

        {/* <h3>{stringPorps}</h3> */}
        
    </div>
)
}
