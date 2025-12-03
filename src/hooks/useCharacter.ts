import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { fetchCharacterById, fetchEpisodesByIds } from "../api/rmApi";
import type { Character, Episode } from "../types/rickmorty";

const extractEpisodeIds = (episodes: string[]): number[] =>
  episodes
    .map((episodeUrl) => Number(episodeUrl.split("/").pop()))
    .filter((id): id is number => Number.isFinite(id));

export const useCharacter = (id?: number) => {
  const characterQuery = useQuery<Character, AxiosError>({
    queryKey: ["character", id],
    queryFn: () => fetchCharacterById(id as number),
    enabled: typeof id === "number" && id > 0,
  });

  const episodeIds = useMemo(() => {
    if (!characterQuery.data) return [];
    return extractEpisodeIds(characterQuery.data.episode);
  }, [characterQuery.data]);

  const episodesQuery = useQuery<Episode[], AxiosError>({
    queryKey: ["episodes", episodeIds],
    queryFn: () => fetchEpisodesByIds(episodeIds),
    enabled: episodeIds.length > 0,
  });

  return { characterQuery, episodesQuery };
};
