import { useEffect, useState } from "react";
import { shuffle } from "../../utils/shuffle";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

function usePokemon(count = 15) {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        let ignore = false;

        async function fetchPokemon() {
            try{
                setLoading(true);
                setError(null)

                const ids = new Set();
                while(ids.size < count) {
                    ids.add(Math.floor(Math.random() * 151) + 1);
                }

                const responses = await Promise.all(
          [...ids].map((id) =>
            fetch(`${BASE_URL}/${id}`).then((res) => {
              if (!res.ok) throw new Error("Failed to fetch Pokemon");
              return res.json();
            })
          )
        );

        const formatted = responses.map((p) => ({
            id: p.id,
            name: p.name,
            image: p.sprites.other["official-artwork"].front_default
        }));

         if (!ignore) setCards(shuffle(formatted)); 
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    fetchPokemon();

return () => {
      ignore = true;
    };
  }, [count]);

  return { cards, setCards, loading, error };
}

export default usePokemon;