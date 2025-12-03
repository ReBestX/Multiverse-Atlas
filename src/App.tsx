import { Link, Navigate, Route, Routes } from "react-router-dom";
import { CharactersPage } from "./pages/CharactersPage";
import { CharacterDetailsPage } from "./pages/CharacterDetailsPage";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8 flex flex-col gap-2 border-b border-slate-100 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight text-slate-900"
          >
            Multiverse Atlas
          </Link>
          <p className="text-sm text-slate-500">
            Powered by the Rick and Morty API
          </p>
        </header>

        <main className="flex-1 pb-16">
          <Routes>
            <Route path="/" element={<CharactersPage />} />
            <Route path="/character/:id" element={<CharacterDetailsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <footer className="border-t border-slate-100 pt-6 text-center text-xs text-slate-400">
          Data courtesy of rickandmortyapi.com
        </footer>
      </div>
    </div>
  );
};

export default App;
