import {Link} from 'react-router-dom'

function PageNotFound() {
    return (
        <div className="PageNotFound">
            <h1>Page no Found</h1>
            <p>What are you looking for <Link to="/">Home</Link></p>
        </div>
    )
}
export default PageNotFound