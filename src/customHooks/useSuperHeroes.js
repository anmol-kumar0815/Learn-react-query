import { useQuery  } from 'react-query';
import axios from 'axios';

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const formatData = data => {
  console.log(data);
  return data.data.map(superHero => superHero.name);
};

export const useSuperHeroes = (onSuccess, onError) => {
  return useQuery("fetch-super-heroes", fetchSuperHeroes, {
    onSuccess,
    onError,
    select: formatData,
  });
}

export default useSuperHeroes;
