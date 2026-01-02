# 🌌 Multiverse Atlas

A modern React application for exploring characters from the Rick and Morty universe. Built with TypeScript, React 19, and powered by the [Rick and Morty API](https://rickandmortyapi.com/).

### 🔗 [Live Preview](https://multiverse-atlas.vercel.app/)

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?style=flat-square&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)

## ✨ Features

- 🔍 **Character Search** — Search for characters by name with debounced input
- 📄 **Paginated Results** — Browse through 800+ characters with smooth pagination
- 👤 **Character Details** — View detailed profiles including status, species, origin, and location
- 📺 **Episode List** — See all episodes a character has appeared in
- ⚡ **Fast & Responsive** — Optimized performance with React Query caching
- 🎨 **Modern UI** — Clean, responsive design with Tailwind CSS

## 🛠️ Tech Stack

| Category          | Technology                                         |
| ----------------- | -------------------------------------------------- |
| **Framework**     | [React 19](https://react.dev/)                     |
| **Language**      | [TypeScript](https://www.typescriptlang.org/)      |
| **Build Tool**    | [Vite](https://vitejs.dev/)                        |
| **Styling**       | [Tailwind CSS 4](https://tailwindcss.com/)         |
| **Data Fetching** | [TanStack React Query](https://tanstack.com/query) |
| **HTTP Client**   | [Axios](https://axios-http.com/)                   |
| **Routing**       | [React Router v7](https://reactrouter.com/)        |
| **Linting**       | [ESLint](https://eslint.org/)                      |

## 📁 Project Structure

```
src/
├── api/
│   └── rmApi.ts          # API client and endpoints
├── components/
│   ├── CharacterCard.tsx # Character card component
│   └── SearchInput.tsx   # Search input component
├── hooks/
│   ├── useCharacter.ts   # Single character data hook
│   └── useCharacters.ts  # Characters list data hook
├── pages/
│   ├── CharactersPage.tsx      # Main listing page
│   └── CharacterDetailsPage.tsx # Character detail page
├── types/
│   └── rickmorty.d.ts    # TypeScript type definitions
├── utils/
│   └── useDebounce.ts    # Debounce utility hook
├── App.tsx               # Root application component
└── main.tsx              # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) (recommended) or npm/yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/rickmortyapi.git
   cd rickmortyapi
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start the development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:5173](http://localhost:5173)

## 📜 Available Scripts

| Command        | Description                              |
| -------------- | ---------------------------------------- |
| `pnpm dev`     | Start development server with hot reload |
| `pnpm build`   | Build for production                     |
| `pnpm preview` | Preview production build locally         |
| `pnpm lint`    | Run ESLint to check code quality         |

## 🌐 API Reference

This application uses the [Rick and Morty API](https://rickandmortyapi.com/documentation), a free REST API providing data about characters, episodes, and locations from the show.

### Endpoints Used

- `GET /character` — Fetch paginated list of characters
- `GET /character/:id` — Fetch a single character by ID
- `GET /episode/:ids` — Fetch episodes by IDs

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Rick and Morty API](https://rickandmortyapi.com/) for providing the data
- [Adult Swim](https://www.adultswim.com/) for creating Rick and Morty
