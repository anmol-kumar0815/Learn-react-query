import React, { useEffect, useState } from 'react'
import axios from 'axios';

const SuperHeroes = () => {
  const [loading, setLoading] = useState(true);
  const [superHeroes, setSuperHeroes] = useState([]);

  const fetchSuperHeroes = async () => {
    try {
      await axios.get("http://localhost:4000/superheroes").then(result => setSuperHeroes(result.data));
    } catch (error){
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSuperHeroes();
  }, []);

  if(loading){
    return <div>Loading</div>;
  }

  return (
    <div>
      <h2>SuperHeroes Page.</h2>
      {superHeroes.map((superHero) => {
        return <div key={superHero.id}>{superHero.name}</div>
      })}
    </div>
  )
};

export default SuperHeroes;
