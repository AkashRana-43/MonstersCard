// import { Component } from "react";
import './card.style.css'

const Card = ({ monster }) => {
    const { id, name, email } = monster;
    return (
        <div className="card-container" key={id}>
            <img alt={`monsters ${name}`}
                src={`https://robohash.org/${id}`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

// class Card extends Component {
//     render() {
//         const { name, email, id } = this.props.monster;
//         return (
//             <div className="card-container" key={id}>
//                 <img alt={`monsters ${name}`}
//                     src={`https://robohash.org/${id}`} />
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         )
//     }
// }

export default Card;