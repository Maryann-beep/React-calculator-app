# 🧮 React Calculator App

A simple calculator built with **React**. This is my very first React project, and it taught me a lot about the differences between building and deploying traditional static sites (HTML, CSS, JS) and modern frameworks on GitHub Pages.

---

## ✨ Features
- Perform basic arithmetic operations: add, subtract, multiply, divide  
- Clear and user-friendly interface  
- Built with React components for modularity  
- Error handling for invalid expressions  

---

## 🛠️ Tech Stack
- **React** – component-based UI library  
- **Math.js** – safely evaluates mathematical expressions  
- **CSS** – styling for layout and design  
- **GitHub Pages** – free static hosting  

---

## 🌍 Live Demo
👉 Check out the calculator [React Calculator App](https://Mary1na-Code.github.io/React-calculator-app/)


---

## 📚 Lessons Learned
Building and deploying this project taught me some important lessons:

- **React apps need a build step**  
  Unlike plain HTML/CSS/JS projects, you can’t just push files to GitHub Pages. You must run `npm run build` to generate a `build/` folder and `npm run deploy` to deploy project.

- **Configuring GitHub Pages for React**  
  Adding the `homepage` field in `package.json` ensures assets load correctly from the subpath.

- **Deployment workflow is different**  
  Traditional static sites: push files → site is live.  
  React apps: build → deploy → configure Pages → site is live.

- **GitHub Pages only serves static files**  
  No Node.js backend, no server-side rendering. Everything must be prebuilt.


---

## 🚀 Getting Started

### Run Locally
Clone the repo and install dependencies:
```bash
git clone https://github.com/Maryann-beep/React-calculator-app
cd React-calculator-app
npm install
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Deploy to GitHub Pages
1. Add the `homepage` field to `package.json`:
   ```json
   "homepage": "https://mary1na-code.github.io/React-calculator-app/"
   ```
2. Install the `gh-pages` package:
   ```bash
   npm install gh-pages --save-dev
   ```
3. Add the following scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
4. Deploy the app:
   ```bash
   npm run deploy
   ```
   Set homepage in package.json
   ```
   "homepage": "https://mary1na-code.github.io/React-calculator-app/"
   ```
5. Make sure your repo’s **Settings → Pages** is set to:
   ```
   Branch: gh-pages
   Folder: / (root)
   ```

---

### Update app on GitHub Pages
Run
```
npm run deploy
```
to update the /build folder and the app on github pages.

## 🎉 Final Thoughts
This calculator may be simple, but it marks the start of my React journey. I would appreciate your honest feedback both criticism and constructive feedbacks, it would help me iterate and do better. 

Thank you for checking out my project! 😊

