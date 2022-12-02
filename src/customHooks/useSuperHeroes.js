import { useQuery  } from 'react-query';
import axios from 'axios';

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const useSuperHeroes = (onSuccess, onError) => {
  return useQuery("fetch-super-heroes", fetchSuperHeroes, {
    onSuccess,
    onError,
  });
}

export default useSuperHeroes;
