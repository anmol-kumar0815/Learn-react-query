import { useMutation, useQuery, useQueryClient } from "react-query";
import studentsApi from "../apis/students";
import { DEFAULT_STALE_TIME, QUERY_KEYS } from "../constants/query";

const { STUDENTS_LIST } = QUERY_KEYS;

const useFetchStudents = () =>
  useQuery([STUDENTS_LIST], () => studentsApi.fetch(), {
    staleTime: DEFAULT_STALE_TIME,
  });

const useCreateStudents = () => {
  const queryClient = useQueryClient();
  
  return useMutation(studentsApi.create, {
    onSuccess: () => queryClient.invalidateQueries(STUDENTS_LIST)
  });
}

export { useFetchStudents, useCreateStudents };
