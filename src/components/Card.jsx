import "./Card.css";

function Card({ pokemon, onClick }) {
    return (
        <button className="card" type="button" onClick={() => onClick(pokemon.id)}>
          <img src={pokemon.image} alt={pokemon.name} />
          <p className="card-name">{pokemon.name}</p>
        </button>

    );
}

export default Card
