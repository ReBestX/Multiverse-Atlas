interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchInput = ({
  value,
  onChange,
  placeholder,
}: SearchInputProps) => {
  return (
    <label className="flex w-full items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm focus-within:border-slate-400">
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4 text-slate-400"
      >
        <path
          d="M11 4a7 7 0 1 1 0 14 7 7 0 0 1 0-14zm8.7 13.3L19 18l.7-.7z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      <input
        type="text"
        inputMode="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent text-slate-800 placeholder:text-slate-400 focus:outline-none"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="text-sm text-slate-400 transition hover:text-slate-600"
          aria-label="Clear search"
        >
          x
        </button>
      )}
    </label>
  );
};
