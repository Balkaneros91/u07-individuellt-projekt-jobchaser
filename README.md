# u05 - Todolist i Typescript

## Innehållsförteckning
- [u05 - Todolist i Typescript](#u05---todolist-i-typescript)
  - [Innehållsförteckning](#innehållsförteckning)
- [u07-individuell-uppgift-jobchaser - ACA](#u07-individuell-uppgift-jobchaser---aca)
  - [Live Site](#live-site)
- [Veckans teoretiska frågor - V.1](#veckans-teoretiska-frågor---v1)
- [Veckans teoretiska frågor - V.2](#veckans-teoretiska-frågor---v2)
- [Veckans teoretiska frågor - V.3](#veckans-teoretiska-frågor---v3)
- [Veckans teoretiska frågor - V.4](#veckans-teoretiska-frågor---v4)
  - [Technologies Used](#technologies-used)
    - [Languages Used](#languages-used)
    - [Frameworks, Libraries \& Programs Used](#frameworks-libraries--programs-used)
    - [Browser Compatibility](#browser-compatibility)
    - [Chrome DevTools](#chrome-devtools)
  - [Installation](#installation)




# u07-individuell-uppgift-jobchaser - ACA 

## Live Site

The live deployed application can be found deployed on [Vercel]().

The link to my Github repository's [Github Repo](https://github.com/Balkaneros91/todo-list-typescript-Balkaneros91).

# Veckans teoretiska frågor - V.1

- Allmänt om ramverket React: Hur/Varför uppkom det? Vad är centralt i React?

React was developed by Facebook. There is a devided opionion about React, some refer to it as a Javascript library and some as a framework. It's used for building user interfaces. React makes, building dynamic, efficient and scabeble web applications easier by breaking down complex UI's into reusable components. React's centers the idea of virtual DOM and components which improves the speed and efficiency of UI rendering.

- Vad är JSX?

JSX stands for Javascript XML and is a syntax extension for JS. It allows writing Javascript code within HTML elements. JSX gets compiled into regular Javascript before being executed by the browser and helps React to understand the UI's output.

- Vad är en komponent?

Components in React can be class or functional that optionally takes in props("inputs") and they return React element which describes the UI's output. They are also called as a 'building blocks' of a React application.

- Vad är props?

Pfrops stands for 'properties'. They are read-only inputs passed from a parent component to a child component. They are the gateway for passing and sharing the data between components.

- Vad menas med one-way-dataflow?

One-way-dataflow means that due to data being passed from parent down to children via props makes the flow easier to manage and more predictable since it only goes one way.

- Hur kan man använda sig av konditionell rendering i React?

React allows rendering of different UI elements based on certain conditions. For such Javascript expressions are used like 'if', logical '&&' (and) or ternary operators.

- Vad menas med en återanvändbar komponent?

As the name mentions they are re-usable, whic means that one component can be used in many different places throughout the application, such as buttons. They are designed to be flexible and customizable. Adding different props meks them adapt to different situations depending on the placing in the application.


# Veckans teoretiska frågor - V.2

- Vad är state i React?

State is a set of data which determines the behavior and rendering of the component. This data is mutable so it can be updated and any update triggers a re-render of the component.

- Vad är det för skillnad mellan state och props?

State is a local part of the component and it can be modified by its component, while the props are immutable data passed from parent down to it's child.

- Vad menas med en kontrollerad komponent i React?

It's an input element (checkbox, text field) and the value of it is controlled by the React's state. Since the value is bound to the state any change of the input is refelected in the state.

- Vad är en callback handler?

This is a function passed in a form of prop from a parent to a child component and as such the child can use it to call an action to send data back to the parent or to trigger an action in the parent component.

- Vad menas med "lifting state up"?

This action is a process of moving the state from a child component up to the closest ancestor component. It's useful because in this case the state can be shared between multiple child components.

- Vad är syftet med useEffect-hook i React?

This hook is used to perform side effects in a functional component. Actions like data fetching, event subscribtionsd or DOM updates. It can be configured to run conditionally but its doen usually after the component renders.

- Vad är syftet kring den s.k dependency-arrayen i useEffect?

Depenedancy array defines when the effect should re-run. If the value in it changes the effect run again. But if no value is passed into it it runs only once when the component mounts.


# Veckans teoretiska frågor - V.3

- Vilka fördelar finns det med att använda NextJS? Nackdelar?

NextJS advantages are:
1. server-side rendering which improves the SEO and performance
2. static side generation for fast-loading pages
3. API routes and built-in routing
4. Automatic code splitting for better performance
5. Optimized for React applications

NextJS disadvantages are:
1. complexity when setting up compared to Create React App
2. little lesser flexibility than a pure React app
3. in larger applications, performance trade-offs with SSR

- Vad menas med Routing? På vilket sätt löser NextJS Routing v.s "vanliga React"?

Routing refers to a process of navigation between web applications views or pages. In compare to regular React in which the routing is manually handled using libraries like 'react-router' where the routes are programmatically defined, Next.JS's routing is handled through the file system. By adding a pages files to the files created under the app folder.

- Vad menas med Reacts ekosystem? Nämn några viktiga bibliotek i Reacts ekosystem?

Ecosystem refers to the collection of tools, libraries and frameworks built around React to impårove and extend its functionallity. Important libraries are 'React Router' used for routing, 'Readux' for state management, 'React Query' for data fetching, 'Formik' for handling forms, 'Styled Components' responsible for styling, Next.js for SSR and SSG.

- Vad är syftet med useContext? Vilket problem med props löser den?

'useContext' allows state sharing across multiple components without having to pass props through every level of the component tree. It helps solving the problem of "prop drilling" which basically means that the prop should be otherwise passed down to deeply nested components.

# Veckans teoretiska frågor - V.4

- Vad är Redux Toolkit?

It's an official and recommended toolset for writing Readux logic. It simplifies tasks like creating actions and reducers, handling side effetcs and managing store configuration.The goal of it is to improve developer experience and reduce the complexity of using Redux.

- När, i vilka situationer vill man använda Redux Toolkit?

RTK is used for managing complex global state across an application. It's useful in cases like when multiple components needs to access the shared state, or for need of advanced state managments features like middleware, asynchronous actions or caching. Using RTK simplifies the process and improves maintainability.

## Technologies Used

### Languages Used

<ul>
<li>HTML/CSS</li>
<li>JavaScript</li>
<li>Next.JS</li>
<li>Typescript</li>
</ul>

### Frameworks, Libraries & Programs Used

<ul>
<li>Github</li>
<li>Gitpod</li>
<li>VS Code</li>
<li>REact Hook Form</li>
<li>Redux Toolkit</li>
</ul>

<hr>

### Browser Compatibility

| Browser       | Pass/Fail |
| ------------- | --------- |
| Google Chrome | Pass      |
| Safari        | Pass      |
| Opera         | Pass      |
| Firefox       | Pass      |

<br>

[Back to content list](<#innehållsförteckning>)

<br>

### Chrome DevTools
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
    played a big role in projects development. I used it for testing, debugging. Further more for exploring around and helping myself to fix HTML and CSS difficulties with it. It help me a lot with setting the responsiveness accross different screen sizes.


## Installation
1. Klona projektet från GitHub:
   ```bash
   git clone https://github.com/username/portfolio-project.git

[Back to content list](<#innehållsförteckning>)

-----
Happy coder :)