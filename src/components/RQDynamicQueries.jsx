import React from 'react'
import { useParams } from 'react-router-dom';
import useDynamicFriends from '../customHooks/useDynamicFriends';

const RQDynamicQueries = () => {
  const { ids } = useParams();
  const friendIds = ids.split(",");

  const responses = useDynamicFriends(friendIds);

  if(!responses.every(response => response.isLoading === false)){
    return <div>Loading...</div>
  };

  return (
    <div>
      <h2>Here is the list of friends.</h2>
      {responses.map(response => (
        <div key={response.data.data.id}>
          <p>Id: {response.data.data.id}</p>
          <p>Name: {response.data.data.name}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default RQDynamicQueries;
