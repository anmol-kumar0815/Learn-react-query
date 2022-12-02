import { useQueries } from "react-query";
import axios from "axios";

const fetchFriend = id => {
  return axios.get(`http://localhost:4000/friends/${id}`);
};

const useDynamicFriends = friendIds => {
  const queryResult = useQueries(
    friendIds.map(id => {
      return {
        queryKey: ["friends", id],
        queryFn: () => fetchFriend(parseInt(id)),
      }
    })
  );

  return queryResult; //an array that contain response at every index.
}

export default useDynamicFriends;
