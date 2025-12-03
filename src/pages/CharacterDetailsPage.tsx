import { Link, useParams } from "react-router-dom";
import { useCharacter } from "../hooks/useCharacter";

export const CharacterDetailsPage = () => {
  const { id } = useParams();
  const characterId = Number(id);
  const validId = Number.isFinite(characterId) ? characterId : undefined;
  const { characterQuery, episodesQuery } = useCharacter(validId);

  const { data: character, isLoading, isError, error } = characterQuery;

  if (isLoading) {
    return <p className="text-center text-slate-500">Loading character...</p>;
  }

  if (isError || !character) {
    return (
      <section className="space-y-4">
        <Link to="/" className="text-sm text-slate-500 hover:text-slate-700">
          <span aria-hidden="true">&lt;</span> Back to characters
        </Link>
        <p className="rounded-md border border-red-100 bg-red-50 px-4 py-3 text-red-600">
          {error?.response?.status === 404
            ? "Character not found."
            : "Unable to load this character."}
        </p>
      </section>
    );
  }

  const episodeList = episodesQuery.data ?? [];

  return (
    <section className="space-y-8">
      <Link
        to="/"
        className="inline-flex items-center text-sm font-semibold text-slate-600 hover:text-slate-900"
      >
        <span aria-hidden="true">&lt;</span> Back to characters
      </Link>

      <div className="grid gap-8 lg:grid-cols-[1fr]">
        <div className="flex flex-col items-center gap-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:flex-row sm:items-start">
          <img
            src={character.image}
            alt={character.name}
            className="w-full max-w-[200px] shrink-0 rounded-xl object-cover shadow-md"
          />
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-slate-900">
              {character.name}
            </h1>
            <p className="text-sm text-slate-500">ID #{character.id}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Profile</h2>
            <dl className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-xs uppercase tracking-wide text-slate-500">
                  Status
                </dt>
                <dd className="text-base font-medium text-slate-900">
                  {character.status}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-slate-500">
                  Species
                </dt>
                <dd className="text-base font-medium text-slate-900">
                  {character.species}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-slate-500">
                  Gender
                </dt>
                <dd className="text-base font-medium text-slate-900">
                  {character.gender}
                </dd>
              </div>
              {character.type && (
                <div>
                  <dt className="text-xs uppercase tracking-wide text-slate-500">
                    Type
                  </dt>
                  <dd className="text-base font-medium text-slate-900">
                    {character.type}
                  </dd>
                </div>
              )}
            </dl>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Locations</h2>
            <dl className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-xs uppercase tracking-wide text-slate-500">
                  Origin
                </dt>
                <dd className="text-base font-medium text-slate-900">
                  {character.origin.name}
                </dd>
                <p className="text-xs text-slate-400 wrap-break-word">
                  {character.origin.url || "Unknown"}
                </p>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-slate-500">
                  Current location
                </dt>
                <dd className="text-base font-medium text-slate-900">
                  {character.location.name}
                </dd>
                <p className="text-xs text-slate-400 wrap-break-word">
                  {character.location.url || "Unknown"}
                </p>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-900">Episodes</h2>
          {episodesQuery.isFetching && (
            <span className="text-xs text-slate-400">
              Refreshing episodes...
            </span>
          )}
        </div>

        {episodesQuery.isLoading && (
          <p className="mt-4 text-sm text-slate-500">Loading episodes...</p>
        )}

        {episodesQuery.isError && (
          <p className="mt-4 rounded-md border border-amber-100 bg-amber-50 px-4 py-3 text-sm text-amber-800">
            Unable to load episodes right now.
          </p>
        )}

        {!episodesQuery.isLoading && episodeList.length === 0 && (
          <p className="mt-4 text-sm text-slate-500">No episodes found.</p>
        )}

        {episodeList.length > 0 && (
          <ul className="mt-6 space-y-3">
            {episodeList.map((episode) => (
              <li
                key={episode.id}
                className="rounded-xl border border-slate-100 px-4 py-3 text-sm text-slate-700 shadow-sm"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-semibold text-slate-900">
                    {episode.episode}
                  </span>
                  <span className="text-slate-400">|</span>
                  <span>{episode.name}</span>
                </div>
                <p className="text-xs text-slate-500">
                  Air date: {episode.air_date}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};
