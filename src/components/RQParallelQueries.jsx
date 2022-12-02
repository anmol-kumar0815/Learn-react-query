import React from 'react'
import useSuperHeroesAndFriends from '../customHooks/useSuperHeroesAndFriends';

const RQParallelQueries = () => {
  const { superHeroesLoading, friendsLoading, superHeroesData, friendsData } = useSuperHeroesAndFriends();

  if( friendsLoading || superHeroesLoading ){
    return <div>Loading...</div>
  }

  console.log(superHeroesData);
  console.log(friendsData);

  return (
    <div>
      <h2>Parallel queries is when you want to invoke more than one api like here superheroes and friends.</h2>
      <h3>Lets see our super heroes data</h3>
      {superHeroesData.data.map(superHero => (
        <div key={superHero.id}>
          <h5>Id: {superHero.id}</h5>
          <p>Name: {superHero.name}</p>
        </div>
      ))}
      <hr />
      <h3>Lets see our friends data</h3>
      {friendsData.data.map(friend => (
        <div key={friend.id}>
          <h5>Id: {friend.id}</h5>
          <p>Name: {friend.name}</p>
        </div>
      ))}
    </div>
  )
}

export default RQParallelQueries;
