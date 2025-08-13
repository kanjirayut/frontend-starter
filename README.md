<!-- --------------------------------------------------------------
  aksorn-starter-experimental
  -------------------------------------------------------------- -->

<p align="center">
  <img src="https://img.shields.io/badge/Aksorn Starter-ED1C24?style=for-the-badge&labelColor=000000&logo=next.js&logoColor=white" alt="Aksorn Starter badge">
</p>

> **A unified, battle-tested Next.js project template for Aksorn.**  
> Clone it, fork it, or copy-paste it—either way, you start every project with the same clean architecture and sensible defaults.

---

## ✨ Highlights

- **Organizing Principles** – Feature-based folders, with a light domain-driven layer inside each feature. This strikes a balance between easy discovery, maintainability, and intuitive navigation.
- **File Naming** – Directories & non-component files: kebab-case (e.g. user-profile).
  React component files: PascalCase (e.g. UserProfile.tsx).
- **Variable Naming** – Choose names that clearly describe the purpose but remain short—for example, use 'selectedProductId' instead of unclear terms like 'selectedOptions' or 'itemsOptions'.
  Variables: camelCase (e.g. isAuthenticated).
  Constant Variables: SCREAMING_SNAKE_CASE (e.g. EDUCATION_YEARS).
- **File Suffixes** – put suffixes for 'role' in each files (e.g. project.type.ts, education-years.const.ts)
- **Exports** – Default-export the main React component; use named exports for everything else (helpers, hooks, types).
- **Barrel files** – Create an index.ts in each folder to re-export public items, keeping import statements short and readable.
- **Grouping** – Within a feature, separate folders for components, hooks, utils, etc., so each item sits next to peers that serve a similar “technical role.”

---

## ✨ Mandatory Extensions

- **Code Spell Checker** – Catches typos as you type—especially in identifiers, comments, and commit messages—so that misspellings never make it into the code base or the docs. A clean dictionary helps reviewers focus on logic, not spelling.
- **ESLint** – Enforces our JavaScript/TypeScript rules (naming, import order, no-unused-vars, etc.) the moment a file is saved. This guarantees every commit adheres to the same linting standard, preventing style drift across the team.
- **Sort lines** – One-keystroke alphabetical sorting keeps block imports, exports, and env files deterministic. Consistent order reduces merge conflicts and makes diffs easy to scan.
- **Prettier** – Auto-formats on save, applying our agreed width, quotes, and bracket spacing. Because formatting is handled automatically, code reviews stay focused on design, not whitespace.

---

## 📂 Project structure (abridged)

```text
frontend/
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── public/
│   ├── logo.svg
│   └── images/
│       └── default-profile.webp
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   └── (protected)/
│   │       └── project/
│   │           └── create/
│   │               └── page.tsx
│   ├── components/
│   │   ├── common/
│   │   │   └── button/
│   │   │       ├── Button.tsx
│   │   │       └── BackButton.tsx
│   │   └── layout/
│   │       └── header/
│   │           ├── UserBadge.tsx
│   │           └── index.ts
│   ├── configs/
│   │   ├── index.ts
│   │   └── navigation/
│   │       └── nav-bar-items.tsx
│   ├── hooks/
│   │   └── useBeforeUnload.ts
│   ├── services/
│   │   └── project.service.ts
│   └── utils/
│       └── formatter/
│           └── enum.ts
└── test/
    └── **mock**/
```
