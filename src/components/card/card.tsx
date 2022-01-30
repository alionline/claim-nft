import './card.css'

function Card({title,body}:{title:any,body:any}) {
    return(
    <div className="card-container">

        <div className="card-content">
            <div className="card-title">
                <h3>{title}</h3>
            </div>
            <div className="card-body">
                <div>{body}</div>
            </div>
        </div>
        
    </div>)
}

export default Card