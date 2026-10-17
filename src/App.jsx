import { useState } from "react";
import "./App.css";
import usePokemon from "./components/hooks/PokemonAPI.jsx";
import { shuffle } from "./utils/shuffle.jsx";
import Scoreboard from "./components/Scoreboard.jsx";
import CardGrid from "./components/CardGrid.jsx";

function App() {
  const { cards, setCards, loading, error } = usePokemon(15);
  const [clickedIds, setClickedIds] = useState([]);
  const [bestScore, setBestScore] = useState(0);

  const score = clickedIds.length; 

  const handleCardClick = (id) => {
    if (clickedIds.includes(id)) {
      alert(`Game over! You scored ${score}.`);
      setClickedIds([]);
    } else {
      const updated = [...clickedIds, id];
      setClickedIds(updated);
      setBestScore(Math.max(bestScore, updated.length));

      
      if (updated.length === cards.length) {
        alert(`You win! You scored ${updated.length}.`);
        setClickedIds([]);
      }
    }
    setCards(shuffle(cards)); 
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong: {error}</p>;

  return (
    <>
      <Scoreboard score={score} bestScore={bestScore} />
      <CardGrid cards={cards} onCardClick={handleCardClick} />
    </>
  );
}

export default App;
