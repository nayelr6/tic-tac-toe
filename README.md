# Tic Tac Toe (Electron)

A simple tic-tac-toe game built with [Electron](https://www.electronjs.org/), packaged into a desktop app for Mac and Windows.

## Running it locally (for development)

Requires [Node.js](https://nodejs.org/) installed.

```bash
git clone https://github.com/yourusername/tic-tac-toe.git
cd tic-tac-toe
npm install
npm start
```

This opens the game in a dev window. Any changes to the code will require restarting `npm start` to see them.

## Building an installer

The same command works on both platforms — Electron Forge automatically builds the right installer for whichever OS you run it on.

```bash
npm run make
```

- **On a Mac** → produces a `.dmg` and `.zip` in `out/make/`
- **On Windows** → produces a `.exe` installer in `out/make/`

You must build on the platform you want an installer for (a Mac produces a Mac installer, Windows produces a Windows installer).

## Opening the app on Mac (first time only)

Since this app isn't code-signed by an Apple Developer account, macOS may show a warning the first time you open it.

- **"Unidentified developer"** → right-click the app → **Open** → click **Open** again in the dialog that appears.
- **"App is damaged"** (can happen if downloaded via zip/cloud storage) → open Terminal and run:
  ```bash
  xattr -cr /path/to/TicTacToe.app
  ```
  Then try opening it again.

Both are one-time fixes per machine — the app isn't actually broken, macOS is just being cautious about unsigned software.

## Project structure

| File | Purpose |
|---|---|
| `main.js` | Electron's main process — creates the app window |
| `index.html` | The game's HTML structure |
| `style.css` | Styling |
| `renderer.js` | Game logic (board state, win checking, click handling) |
| `face-x.png` / `face-o.png` | Images shown for X and O |

