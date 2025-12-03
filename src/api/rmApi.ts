import axios from "axios";
import type {
  CharactersResponse,
  Character,
  Episode,
} from "../types/rickmorty";

const rmApi = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

export const fetchCharacters = async (
  page: number,
  name?: string
): Promise<CharactersResponse> => {
  const params: Record<string, string | number> = { page };
  if (name) params.name = name;

  const { data } = await rmApi.get<CharactersResponse>("/character", {
    params,
  });
  return data;
};

export const fetchCharacterById = async (id: number): Promise<Character> => {
  const { data } = await rmApi.get<Character>(`/character/${id}`);
  return data;
};

export const fetchEpisodesByIds = async (
  episodeIds: number[]
): Promise<Episode[]> => {
  if (!episodeIds.length) return [];

  const idPath = episodeIds.join(",");
  const { data } = await rmApi.get<Episode | Episode[]>(`/episode/${idPath}`);
  return Array.isArray(data) ? data : [data];
};
