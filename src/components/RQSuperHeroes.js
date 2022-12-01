import React from 'react'
import { useQuery } from 'react-query';
import axios from 'axios';

const RQSuperHeroes = () => {
  const fetchSuperHeroes = () => {
    return axios.get("http://localhost:4000/superheroes");
  };

  const { isLoading, data, isError, error, isFetching } = useQuery("super-heroes", fetchSuperHeroes, { cacheTime: 2000 });

  console.log({isFetching, isLoading});

  if(isLoading){
    return <div>Loading...</div>
  }

  if(isError){
    return <div>{error.message}</div>
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
