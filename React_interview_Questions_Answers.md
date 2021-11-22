1. What is React JS?
React is a front-end JS library developed by Facebook for building web user interfaces. It allows developers to build reusable UI components.

2. What are React Components?
React breaks down everything on the UI into small components, and the components are reusable. When the state of a component changes, React rerenders the component with the updated information.

3. What's the main difference between props and state?
Props - (properties) describe the way a component is configured. Props are like function arguments in JS, and attributes in HTML. To send props into a component, use the same syntax as HTML attributes:
e.g. <Person name="Amy" />

4. What is JSX?
JSX is a syntax extension to JS, it describes what the UI should look like. It produces React elements.

5. What are virtual DOMS?
React creates a virtual DOM in memory when the React app first renders. Then when the state of React elements changes, the virtual DOM also changes. Then the virtual DOM is compared with the actual DOM in the browser by some React library, e.g. ReactDOM. Only the parts that are different are updated to the actual DOM, versus reloading the whole HTML file. It speeds up the rendering of the pages significantly.

6. what are the major advantages to using react when building UIs?
  - It increases application performance via the Virtual DOM model
  - Improved coding efficiency with JSX
  - The ability to reusable compoents across multiple projects
  - Flexibility and extensibility through add-on tools provided by React's open source community.

