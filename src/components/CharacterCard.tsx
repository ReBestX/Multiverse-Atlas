import { Link } from "react-router-dom";
import type { Character } from "../types/rickmorty";

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <Link
      to={`/character/${character.id}`}
      className="group rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="aspect-3/4 overflow-hidden rounded-t-xl bg-slate-100">
        <img
          src={character.image}
          alt={character.name}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="space-y-1 p-4">
        <p className="text-lg font-semibold text-slate-900">{character.name}</p>
        <p className="text-sm text-slate-600">
          {character.species} | {character.status}
        </p>
      </div>
    </Link>
  );
};
