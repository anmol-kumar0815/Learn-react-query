import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const fetchFriends = () => {
  return axios.get("http://localhost:4000/friends");
};

const useSuperHeroesAndFriends = () => {
  const { data: superHeroesData, isLoading: superHeroesLoading } = useQuery("super-heroes", fetchSuperHeroes);
  const { data: friendsData, isLoading: friendsLoading } = useQuery("friends", fetchFriends);

  return { superHeroesLoading, friendsLoading, superHeroesData, friendsData }

};

export default useSuperHeroesAndFriends;
