import React, { useState } from 'react'
import { Link } from "react-router-dom";
import useSuperHeroesAndFriends from '../customHooks/useSuperHeroesAndFriends';

const RQParallelQueries = () => {
  const [ids, setIds] = useState("");
  const { superHeroesLoading, friendsLoading, superHeroesData, friendsData } = useSuperHeroesAndFriends();

  if( friendsLoading || superHeroesLoading ){
    return <div>Loading...</div>
  }

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
      <hr />

      <h2>Now lets see what is dynamic queries</h2>
      <label>Enter ids of friends whose data you want to see ( between 1 to 3, inclusive)</label>
      <input type="text" placeholder='Comma separated' onChange={e => setIds(e.target.value)} />
      <br />
      <Link to={`/dynamic-queries/${ids}`}>
        <button>Fetch</button>
      </Link>
      <br />
    </div>
  )
}

export default RQParallelQueries;
