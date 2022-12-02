import React from 'react'
import useSuperHeroes from '../customHooks/useSuperHeroes';

const RQSuperHeroes = () => {
  const onSuccess = data => {
    console.log("Api call successfully completed", data);
  };

  const onError = error => {
    console.log("Api call failed", error.message);
  };

  const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroes(onSuccess, onError);

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
      {data.map(superHero => (
        <div key={superHero}>
          {superHero}
        </div>
      ))}
    </>
  );
};

export default RQSuperHeroes;
