import React from 'react'
import useSuperHeroes from '../customHooks/useSuperHeroes';
import { Link } from "react-router-dom";

const RQSuperHeroes = () => {
  const onSuccess = data => {
    console.log("Api call successfully completed", data);
  };

  const onError = error => {
    console.log("Api call failed", error.message);
  };

  const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroes(onSuccess, onError);

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

      {data.data.map(superHero => (
        <div key={superHero.id}>
          <Link to={`/rq-super-heroes/${superHero.id}`}>{superHero.name}</Link>
        </div>
      ))}
    </>
  );
};

export default RQSuperHeroes;
