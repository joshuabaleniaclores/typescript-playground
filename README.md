# TypeScript Playground

A simple playground project for learning TypeScript.

---

## Project Structure

```
ts-learning/
│
├── src/          # TypeScript source files
│   └── index.ts
├── dist/         # Compiled JavaScript (ignored in Git)
├── node_modules/ # Dependencies (ignored in Git)
├── package.json
├── tsconfig.json
└── .gitignore
```

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run build` | Compile TypeScript files to `dist/` |
| `npm run start` | Run compiled JavaScript (`dist/index.js`) |
| `npm run dev` | Watch and automatically compile on changes |
| `npm run clean` | Delete the `dist/` folder |

---

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run in development mode:

```bash
npm run dev
```

3. Compile and run:

```bash
npm run build
npm run start
```

---

## Notes

- TypeScript version: `^5.9.3`
- Module system: CommonJS
- Target: ESNext
- The compiled JS is output to `dist/`
- `.gitignore` prevents committing `node_modules`, `dist`, and other temporary files

