import { useMemo, useState } from "react";
import type { AxiosError } from "axios";
import { CharacterCard } from "../components/CharacterCard";
import { SearchInput } from "../components/SearchInput";
import { useCharacters } from "../hooks/useCharacters";
import { useDebounce } from "../utils/useDebounce";
import type { Character } from "../types/rickmorty";

const getErrorMessage = (error: AxiosError) => {
  if (error.response?.status === 404) {
    return "No characters found. Try a different search.";
  }
  return "Something went wrong while fetching characters.";
};

export const CharactersPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const debouncedSearch = useDebounce(searchInput, 400);
  const [page, setPage] = useState(1);
  const [lastSearch, setLastSearch] = useState(debouncedSearch);

  // Reset page when search changes (use state comparison, not ref)
  let activePage = page;
  if (lastSearch !== debouncedSearch) {
    setLastSearch(debouncedSearch);
    setPage(1);
    activePage = 1;
  }

  const { data, isLoading, isError, error, isFetching } = useCharacters({
    page: activePage,
    name: debouncedSearch,
  });

  const characters: Character[] = data?.results ?? [];
  const paginationInfo = data?.info;

  const isEmptyState = useMemo(() => {
    if (isLoading || isError) return false;
    return characters.length === 0;
  }, [characters.length, isError, isLoading]);

  const disabledPrev = !paginationInfo?.prev || isFetching;
  const disabledNext = !paginationInfo?.next || isFetching;

  const handlePrevious = () => {
    if (!disabledPrev) {
      setPage((prev) => Math.max(prev - 1, 1));
    }
  };

  const handleNext = () => {
    if (!disabledNext) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <section className="space-y-8">
      <header className="space-y-4">
        <div className="space-y-1">
          <p className="text-sm uppercase tracking-wide text-slate-500">
            Explore
          </p>
          <h1 className="text-3xl font-bold text-slate-900">
            Rick and Morty Characters
          </h1>
          <p className="text-slate-600">
            Search for your favorite characters and browse their profiles.
          </p>
        </div>
        <SearchInput
          value={searchInput}
          onChange={setSearchInput}
          placeholder="Search characters by name"
        />
      </header>

      {isError && error && (
        <p className="rounded-md border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
          {getErrorMessage(error)}
        </p>
      )}

      {isLoading && (
        <p className="text-center text-slate-500">Loading characters...</p>
      )}

      {isEmptyState && (
        <p className="text-center text-slate-500">No characters available.</p>
      )}

      {!isLoading && characters.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      )}

      {data && (
        <div className="flex flex-col gap-4 rounded-xl border border-slate-100 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            Page {page} of {paginationInfo?.pages ?? "?"}
          </p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={disabledPrev}
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={disabledNext}
              className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {isFetching && !isLoading && (
        <p className="text-center text-xs text-slate-400">
          Updating results...
        </p>
      )}
    </section>
  );
};
