# Calculator App

Welcome to my **Calculator App**, a simple yet functional calculator built with React! This project was my first dive into building and deploying a React application, and it has been an exciting journey of learning and growth.

## Features

- Perform basic arithmetic operations: addition, subtraction, multiplication, and division.
- Clear the display with a single button.
- Chain calculations seamlessly.
- Error handling for invalid expressions.

## Technologies Used

- **React**: For building the user interface.
- **Math.js**: For safely evaluating mathematical expressions.
- **CSS**: For styling the app.

## What I Learned

### 1. React Basics
- Managing state with `useState` to handle the calculator's display and tokens.
- Handling user interactions with event listeners (`onClick`).
- Rendering dynamic content using `.map()`.

### 2. Safe Evaluation of Expressions
- Using `mathjs` to evaluate mathematical expressions safely instead of relying on `eval()`.

### 3. Deploying React Apps on GitHub Pages
Deploying a React app on GitHub Pages was a bit different from deploying traditional HTML, CSS, and JavaScript projects. Here's what I learned:
- **Build Process**: React apps need to be built into static files using `npm run build` before deployment.
- **Homepage Configuration**: The `homepage` field in `package.json` must be set to the GitHub Pages URL (e.g., `https://<username>.github.io/<repo-name>`).
- **gh-pages Package**: The `gh-pages` package simplifies deployment by automating the process of pushing the `build` folder to the `gh-pages` branch.
- **Routing Challenges**: React apps using React Router require additional configuration for proper routing on GitHub Pages.

### 4. Debugging and Iteration
- Testing the app thoroughly to ensure all edge cases (e.g., dividing by zero, invalid inputs) are handled gracefully.
- Iterating on the design and functionality to improve the user experience.

## How to Run the App Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/<repo-name>.git
   ```
2. Navigate to the project directory:
   ```bash
   cd <repo-name>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and visit `http://localhost:3000`.

## How to Deploy to GitHub Pages

1. Add the `homepage` field to `package.json`:
   ```json
   "homepage": "https://<your-username>.github.io/<repo-name>"
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

## Acknowledgments

- Thanks to the creators of React and Math.js for their amazing tools.
- Special shoutout to GitHub Pages for providing free hosting for this project.

## Future Improvements

- Add support for advanced operations (e.g., square root, exponentiation).
- Improve the UI/UX with animations and themes.
- Make the app responsive for better usability on mobile devices.

---

Thank you for checking out my first React project! I hope you enjoy using the calculator as much as I enjoyed building it. 😊