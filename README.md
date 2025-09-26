# 🌍 InspireAI Africa Network Website

A modern, mobile-friendly, and professional website for **InspireAI Africa Network**, an organization empowering African youth and professionals through AI, robotics, and digital skills training.

---

## 🚀 Project Goals

- Attract students and professionals to join bootcamps, online courses, and training programs.
- Showcase corporate training services for organizations.
- Encourage partnerships, sponsorships, and collaborations.
- Highlight impact through success stories and case studies.
- Provide resources, blog posts, and news updates.
- Offer interactive features like registration forms, event calendar, session booking, and newsletter signup.

---

## 🎨 Brand Identity

- **Colors**:  
  - Vibrant Orange `#E07D3B`  
  - Deep Olive Green `#546D37`  
  - Soft Beige/Cream `#F7F2F1`

- **Fonts**:  
  - Headings: Montserrat  
  - Body: Roboto

- **Tone**: Inspirational, inclusive, professional, and future-focused.

---

## 🧩 Tech Stack

- Vite – Fast build tool
- React – UI library
- TypeScript – Typed JavaScript
- React Router – Routing
- Tailwind CSS or SCSS – Styling
- Axios – API calls
- React Query – Data fetching
- [Firebase/Supabase] – Authentication & backend (optional)

---

## 📁 Folder Structure

```bash
inspireai-africa/
├── public/
│   └── assets/                  # Static files (logo, icons, images)
├── src/
│   ├── assets/                  # Imported images, illustrations, fonts
│   ├── components/              # Reusable UI components
│   ├── pages/                   # Page-level components
│   ├── layouts/                 # Layout wrappers
│   ├── routes/                  # Route definitions
│   ├── context/                 # React Contexts
│   ├── hooks/                   # Custom hooks
│   ├── services/                # API calls
│   ├── types/                   # TypeScript interfaces
│   ├── utils/                   # Utility functions
│   ├── styles/                  # Global styles and theme config
│   ├── config/                  # App-wide config
│   ├── App.tsx                  # Root component
│   ├── main.tsx                 # Vite entry point
│   └── index.css                # Global styles
├── .env                         # Environment variables
├── tsconfig.json                # TypeScript config
├── vite.config.ts               # Vite config
├── package.json                 # Project dependencies
└── README.md                    # Project overview

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
