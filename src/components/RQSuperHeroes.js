import React from 'react'
import { useQuery } from 'react-query';
import axios from 'axios';

const RQSuperHeroes = () => {
  const fetchSuperHeroes = () => {
    return axios.get("http://localhost:4000/superheroes");
  };

  const { isLoading, data } = useQuery("super-heroes", fetchSuperHeroes);
  const allData = useQuery("super-heroes", fetchSuperHeroes);
  console.log(allData);


  if(isLoading){
    return <div>Loading...</div>
  }

  return(
    <>
      <h2>SuperHeroes with React Query.</h2>
      {data.data.map(superHero => (
        <div key={superHero.id}>
          {superHero.name}
        </div>
      ))}
    </>
  );
};

export default RQSuperHeroes;
