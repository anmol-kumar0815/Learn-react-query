import { useQueries } from "react-query";
import axios from "axios";

const fetchFriend = id => {
  return axios.get(`http://localhost:4000/friends/${id}`);
};

const useDynamicFriends = (friendIds, enabled) => {
  const queryResult = useQueries(
    friendIds.map(id => {
      return {
        queryKey: ["friends", id],
        queryFn: () => fetchFriend(parseInt(id)),
      }
    }), enabled
  );

  const isLoading = queryResult.some(result => result.isLoading)
  return {isLoading, queryResult};
}

export default useDynamicFriends;
