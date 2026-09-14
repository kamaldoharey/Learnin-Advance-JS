# 🚀 Advanced JavaScript Learning Hub

Welcome to your structured repository for learning and mastering modern, advanced JavaScript concepts!

---

## 📁 Repository Structure

```text
Learnin-Advance-JS/
├── 01-Basics-and-Logic/         # Core logic, conditionals, even/odd, pass/fail
├── 02-DOM-Manipulation/         # Document Object Model, element creation, events
├── 03-ES6-and-Beyond/           # Arrow functions, destructuring, rest/spread
├── 04-Asynchronous-JS/          # Promises, Async/Await, Timers, Event Loop
├── 05-Modules-Import-Export/    # ES Modules (import / export)
├── .vscode/                     # Recommended editor settings & debuggers
├── .prettierrc                  # Standard code formatting rules
├── .gitignore                   # Ignore node_modules and temp files
└── package.json                 # Project configuration (ES Modules enabled)
```

---

## 🛠️ Recommended Setup & Workflow

### 1. VS Code Extensions (Install for the best experience)

Open the **Extensions** panel in VS Code (`Ctrl+Shift+X`) and search for:

- **Live Server** (`ritwickdey.LiveServer`): Launches local dev server with auto-reload.
- **Prettier - Code Formatter** (`esbenp.prettier-vscode`): Auto-formats code on save (`Ctrl+S`).
- **Error Lens** (`usernamehw.errorlens`): Shows errors directly inline as you type.
- **Quokka.js** (`WallabyJs.quokka-vscode`): Instant scratchpad directly in your editor.

---

### 2. How to Run Your Code

#### 🔹 For Pure JavaScript Logic (ES6, Promises, Async/Await, Math):

You don't need to open a browser for pure JS! Run it directly in the terminal:

```bash
# Run a specific file once
node "05-Modules-Import-Export/main.js"

# Auto-rerun on file save (hot reload)
node --watch "05-Modules-Import-Export/main.js"
```

#### 🔹 For DOM & Browser Examples (HTML + Events):

1. Right-click any `.html` file in VS Code.
2. Select **"Open with Live Server"** (or click **"Go Live"** in the bottom status bar).
3. Open your browser's Developer Tools (`F12` or `Ctrl+Shift+I`) and view the **Console** tab.

#### 🔹 For Debugging (Breakpoints):

1. Press `F5` or go to the **Run & Debug** panel (`Ctrl+Shift+D`).
2. Select **"▶ Run/Debug Active JS File (Node.js)"** to step through code line-by-line.

---

### 3. Formatting Code

To format all files across the repository according to Prettier rules:

```bash
npm run format
```

Happy Coding! 🎉
