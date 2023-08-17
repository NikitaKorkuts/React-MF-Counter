# React-MF-Counter
This project consist of three pieces, a shell (app container) and two remotes modules increase and decrease.

Shell contains counter and state. Increase contains increaseButton component. Decrease contains decreaseButton component.

Workflow:

* shell
  - expose store
  - import increaseButton and decreaseButton components
  
* increase: 
  - expose increaseButton component
  - import store

* decrease:
  - expose decreaseButton component
  - import store

# Running Demo
* Running shell
  
  Open console #1 and run commands below in the project root directory
  ```
  cd shell
  ```
  ```
  npm install
  ```
  ```
  npm start
  ```
  It will run shell at http://localhost:3000

* Running increase

  Open console #2 and run commands below in the project root directory
  ```
  cd increase
  ```
  ```
  npm install
  ```
  ```
  npm start
  ```
  It will run increase at http://localhost:3001

* Running decrease

  Open console #3 and run commands below in the project root directory
  ```
  cd decrease
  ```
  ```
  npm install
  ```
  ```
  npm start
  ```
  It will run increase at http://localhost:3002

# Deployment
shell - https://react-mf-counter-shell.vercel.app/

increase - https://react-mf-counter-increase.vercel.app/

decrease - https://react-mf-counter-decrease.vercel.app/
# Technologies stack:
* HTML, CSS, Styled-Components
* Typescript
* React
* Redux Toolkit
* Webpack, Module Federation Plugin
