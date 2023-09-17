# React + TypeScript + Vite + Redux/toolKit

This project is a modern and robust web application that utilizes technologies like React, Redux Toolkit, TypeScript, and Spring Boot to provide an advanced and interactive user experience. The application aims to perform integration operations with a database, implemented using Java and Spring Boot.

Key Features:

Front-end with React and Redux Toolkit: The front-end of the application is developed using React, an open-source JavaScript library for building user interfaces. Additionally, Redux Toolkit is employed to efficiently manage global state, making it easier to develop scalable and well-organized applications.

Static Typing with TypeScript: The project uses TypeScript as its primary language, enabling the addition of static typing to JavaScript, increasing code robustness and ease of maintenance.

Integration with Redux and React-Redux: Application state management is achieved through Redux, a unidirectional data flow pattern. The react-redux library is used to connect React components to Redux, facilitating access to global state and action handling.

Forms with React Hook Form: To handle forms efficiently and with ease, the React Hook Form library is used. It offers features such as input validation, event handling, and simplicity of use.

Environment Variables with Dotenv: The dotenv library is employed to manage environment variables, allowing sensitive keys and values to be configured outside of the source code.

Navigation with React Router Dom: React Router Dom is used for navigation between application pages, enabling the creation of dynamic and easily configurable routes.

Java Back-end with Spring Boot: The application's back-end is developed in Java, utilizing the powerful Spring Boot framework. This enables the creation of a robust RESTful API to manage integration operations with the database.

Project Objectives:

Create a modern and user-friendly web application.
Implement an intuitive and responsive user experience.
Efficiently manage the global state of the application.
Perform database integration operations using Java and Spring Boot.
Ensure the security of sensitive information through the use of environment variables.
Provide smooth and efficient navigation between pages.
Through the combination of the React ecosystem, Redux Toolkit, TypeScript, and Java Spring Boot, the project is capable of delivering a powerful and scalable web application, offering a pleasant and high-performance experience to users, with secure and reliable database operations.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## How to run the project

- Install the dependencies using "npm start"in console
- To run use "npm run dev" in console
