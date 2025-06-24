# Frontend Project Health DashBoard

A React-based dashboard application to monitor and visualize health data efficiently. This project aims to provide users with real-time insights.

## Technologies Used

![React](https://img.shields.io/badge/react-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=white) ![Vite](https://img.shields.io/badge/vite-%234646ff.svg?style=for-the-badge&logo=vite&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black) ![API](https://img.shields.io/badge/API-%23FF6C37.svg?style=for-the-badge&logo=swagger&logoColor=white) ![Chart.js](https://img.shields.io/badge/chart.js-%23324954.svg?style=for-the-badge&logo=chartdotjs&logoColor=white)  

## Demo

Initial Screen
<img width="1436" alt="Screenshot 2025-06-24 at 2 02 59 PM" src="https://github.com/user-attachments/assets/a2590cbe-c916-41f2-b52d-4f9465e22310" />


Select a Patient on the List
<img width="1419" alt="Screenshot 2025-06-24 at 2 23 12 PM" src="https://github.com/user-attachments/assets/0f9e66d2-f98a-491e-9c5d-3567f99e140a" />
<img width="1434" alt="Screenshot 2025-06-24 at 2 03 26 PM" src="https://github.com/user-attachments/assets/d484ac36-051e-4588-9a36-7706bc039519" />

Select Patient 2 and 3 (The API data transfer functionality is incomplete and may not work as expected.)
<img width="1420" alt="Screenshot 2025-06-24 at 2 03 47 PM" src="https://github.com/user-attachments/assets/e05bc00e-65fa-4cac-9551-4a2ded928612" />
<img width="1423" alt="Screenshot 2025-06-24 at 2 03 54 PM" src="https://github.com/user-attachments/assets/3f78eb07-b42d-41d7-9bb1-0ba9e11505cf" />

## Features
• Quick overview of patient information  
• Easy navigation with a list of patient names  
• Charts that track blood pressure over time  
• Monitoring of respiratory rate, temperature, and heart rate  
• User profiles with personal and contact details  
• History of diagnostics and lab results  

## Project Structure

- src
  - assets
    - main_icons
    - navbar_icons
    - profile_pictures
    - react.svg
  - components
  - main-body
    - left-section
    - middle-section
    - right-section
  - navbar
  - .gitignore
  - App.tsx
  - FetchGet.module.css
  - FetchGet.tsx
  - index.css
  - main.tsx
  - test.tsx

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
