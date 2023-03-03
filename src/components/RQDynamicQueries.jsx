import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import useDynamicFriends from '../customHooks/useDynamicFriends';

const RQDynamicQueries = () => {
  const { ids } = useParams();
  const friendIds = ids.split(",");
  const [enabled, setEnabled] = useState(false);
  const { isLoading, queryResult } = useDynamicFriends(friendIds, enabled);
  enabled && setEnabled(false);

  const fetchData = () => {
    setEnabled(true);
  };

  if(isLoading){
    return <div>Loading...</div>
  };

  console.log(isLoading);
  console.log(queryResult);

  return (
    <div>
      <h2>Here is the list of friends.</h2>
      {queryResult.map(response => (
        <div key={response?.data?.data?.id}>
          <p>Id: {response?.data?.data?.id}</p>
          <p>Name: {response?.data?.data?.name}</p>
          <hr />
        </div>
      ))}
      <button onClick={fetchData}>Click Me.</button>
    </div>
  );
};

export default RQDynamicQueries;
