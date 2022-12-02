import React from 'react'
import useSuperHero from '../customHooks/useSuperHero';
import { useParams } from 'react-router-dom';

const RQSuperHero = () => {
  const { id } = useParams();
  const {isLoading, data, isFetching } = useSuperHero(id);

  if(isLoading || isFetching){
    return <div>Loading...</div>
  }

  return (
    <div>
      <p>ID: {data.data.id}</p>
      <p>Name: {data.data.name}</p>
      <p>Alter Ego: {data.data.alterEgo}</p>
    </div>
  )
};

export default RQSuperHero;
