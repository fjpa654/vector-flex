# Vector Flex

A fast React + Vite + TypeScript app styled with TailwindCSS and using CSS variables for light/dark themes. Includes a custom theme toggle and a simple login page UI.

---

## 🔧 Features

- ⚛️ Built with React 18 + Vite
- 🎨 Theme toggle (Light/Dark) using CSS variables
- 🔐 Simulated login form
- 💅 Utility-first styling with TailwindCSS
- 📱 Fully responsive layout
- 🧱 Clean component-based structure

---

## 🖥️ Requirements

- Node.js v18 or later
- Package manager: `npm`, `yarn`, or `pnpm`

---

## 🛠 Installation Instructions

### Clone and Setup

```bash
git clone https://github.com/fjpa654/vector-flex.git
cd vector-flex
npm install
npm run dev
```

Or using `yarn`:

```bash
yarn install
yarn dev
```

Or using `pnpm`:

```bash
pnpm install
pnpm dev
```

---

## 👥 Default Login

To simulate a successful login, use:

- **Username:** `admin`
- **Password:** `admin`

Any other credentials will display an error.

---

## 🧪 Scripts

| Command         | Description                   |
|----------------|-------------------------------|
| `npm run dev`  | Starts development server      |
| `npm run build`| Builds for production          |
| `npm start`    | Starts production server       |
| `npm run lint` | Runs ESLint on source files    |

---

## 📁 Project Structure

```
src/
├── Components/
│   └── ThemeToggle.tsx
├── components/
│   └── ui/
│       └── Layout.tsx
├── pages/
│   └── Login/
│       ├── Login.tsx
│       └── components/
│           ├── Title.tsx
│           ├── TextInput.tsx
│           └── SignInButton.tsx
├── styles/
│   └── index.css
├── App.tsx
├── main.tsx
```

---

## 📦 Tech Stack

- `react@18`
- `vite@5`
- `tailwindcss@3`
- `typescript@5`
- `eslint`

---

## 📄 License

MIT — Free for personal or commercial use.
