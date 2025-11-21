# whack-a-mole
A interactive browser-based Whack-a-Mole game.
Based on exercise 608 from Chas Academy: HTML, CSS (flexbox), classes, import/export, DOM.

---

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [How to Play](#how-to-play)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Game Logic](#game-logic)

---

## Demo
Open `index.html` in your browser to play the game.  

---

## Features
- 3x3 mole board with 9 holes.
- 30 moles appear randomly, each with increasing speed.
- Score tracking for **whacks** and **strikes**.
- Dynamic game board with a **start** and **end** button.
- Real-time game tracker showing total moles, whacks, and strikes.
- Game ends automatically after 30 moles or when manually stopped.

---

## How to Play
1. Click the **Start Game** button.
2. Wait for moles to appear in the holes.
3. Click on a mole to whack it and earn a point.
4. Missing a mole counts as a strike.
5. The game automatically ends after 30 moles.
6. Click **Play again** to reset and start over.

---

## Installation
#### Online
No installation needed: follow link below.
[Github Pages](https://ingridber.github.io/whack-a-mole/)

#### Locally
1. Clone the repository:
`bash git clone <repository-url>`

2. Navigate to the project folder:
`bash cd whack-a-mole`

3. Open the game in your browser:
- Simply double-click `index.html` **or**
- Open it via your preferred browser (Chrome, Firefox, Edge, etc.)

No additional setup or packages are required. The game works offline.

---

## Project Structure
```
whack-a-mole/
│
├─ index.html          # Main HTML file
├─ style.css           # Styling for the game
├─ js/
│   ├─ main.js         # Initializes the game
│   ├─ game.js         # Game class logic
│   └─ mole.js         # Mole class logic
└─ images/
    └─ Mole-in-a-hole.png   # Game icon
```
---

## Technologies Used

- **HTML5** – Game structure
- **CSS3** – Styling and animations
- **JavaScript** (ES6 Modules) – Game logic, event handling

--- 

## Game Logic (the lazy way)

- The game board contains 9 holes, each represented as a button.
- The **Mole** class handles mole appearances, speed, and stopping conditions.
- The **Game** class manages the game state, score tracking, and UI updates.
- Mole speed increases as more moles appear:
    - 1–3 moles: 2000ms interval
    - 4–8 moles: 1000ms interval
    - 9–13 moles: 800ms interval
    - 14–18 moles: 700ms interval
    - 19–25 moles: 600ms interval
    - 26–30 moles: 500ms interval
- The game ends when 30 moles have appeared or the **End Game** button is clicked.