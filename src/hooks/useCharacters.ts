import { useQuery, keepPreviousData } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { fetchCharacters } from "../api/rmApi";
import type { CharactersResponse } from "../types/rickmorty";

interface UseCharactersParams {
  page: number;
  name?: string;
}

export const useCharacters = ({ page, name }: UseCharactersParams) => {
  return useQuery<CharactersResponse, AxiosError>({
    queryKey: ["characters", { page, name }],
    queryFn: () => fetchCharacters(page, name?.trim() ? name : undefined),
    placeholderData: keepPreviousData,
  });
};
