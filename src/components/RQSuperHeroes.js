import React from 'react'
import { useQuery } from 'react-query';
import axios from 'axios';

const RQSuperHeroes = () => {
  const fetchSuperHeroes = () => {
    return axios.get("http://localhost:4000/superheroes");
  };

  const formatResponseData = data => {
    return data.data.map(superHero => superHero.name);
  };

  const { isLoading, data, isError, error, isFetching, refetch } = useQuery("super-heroes", fetchSuperHeroes, { select: formatResponseData, });

  console.log({isFetching, isLoading});

  if(isLoading || isFetching){
    return <div>Loading...</div>
  }

  if(isError){
    return <div>{error.message}</div>
  }

  return(
    <>
      <h2>SuperHeroes with React Query.</h2>
      <button onClick={refetch}>Fetch Data</button>
      {/* {data?.data.map(superHero => (
        <div key={superHero.id}>
          {superHero.name}
        </div>
      ))} */}
      {data.map(superHero => (
        <div key={superHero}>
          {superHero}
        </div>
      ))}
    </>
  );
};

export default RQSuperHeroes;
