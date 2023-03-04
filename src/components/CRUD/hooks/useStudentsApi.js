import { useMutation, useQuery, useQueryClient } from "react-query";
import studentsApi from "../apis/students";
import { DEFAULT_STALE_TIME, QUERY_KEYS } from "../constants/query";

const { STUDENTS_LIST } = QUERY_KEYS;

const useFetchStudents = () =>
  useQuery([STUDENTS_LIST], () => studentsApi.fetch(), {
    staleTime: DEFAULT_STALE_TIME,
  });

  //query invalidation
// const useCreateStudents = () => {
//   const queryClient = useQueryClient();

//   return useMutation(studentsApi.create, {
//     onSuccess: () => queryClient.invalidateQueries(STUDENTS_LIST)
//   });
// };

  //using query cache or mutation response
const useCreateStudents = () => {
  const queryClient = useQueryClient();

  return useMutation(studentsApi.create, {
    onSuccess: data => queryClient.setQueryData([STUDENTS_LIST], oldQueryData => {
      return {
        ...oldQueryData,
        data: [...oldQueryData.data, data.data],
      }
    })
  });
}

export { useFetchStudents, useCreateStudents };
