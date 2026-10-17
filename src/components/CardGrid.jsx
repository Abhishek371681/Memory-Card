import Card from "./Card.jsx";


function CardGrid({ cards, onCardClick }) {

    return(
        <div className="card-grid">
            {cards.map((pokemon) => (
                <Card key={pokemon.id} pokemon={pokemon} onClick={onCardClick}/>
            ))}
        </div>
    )
}

export default CardGrid;
