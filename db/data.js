export const data = [
  {
    id: 0,
    number: 1,
    category: 'JavaScript Questions',
    teacher: 'Chat GPT',
    questions: [
      {
        id: 0,
        question: 'Inside which HTML element do we put the JavaScript?',
        answers: [
          {
            id: 'a',
            answer: '<javascript>',
            isTrue: true
          },
          {
            id: 'b',
            answer: '<java>',
            isTrue: false
          },
          {
            id: 'c',
            answer: '<js>',
            isTrue: false
          },
          {
            id: 'd',
            answer: '<java-script>',
            isTrue: false
          }
        ]
      },
      {
        id: 1,
        question: 'Where is the correct place to insert a JavaScript?',
        answers: [
          {
            id: 'a',
            answer: 'The <head> section',
            isTrue: false
          },
          {
            id: 'b',
            answer: 'The <body> section',
            isTrue: true
          },
          {
            id: 'c',
            answer: 'Both the <head> section and the <body> section are correct',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'Neither the <head> section nor the <body> section',
            isTrue: false
          }
        ]
      },
      {
        id: 2,
        question: 'What is the correct syntax for referring to an external script called "script.js"?',
        answers: [
          {
            id: 'a',
            answer: '<script src="script.js">',
            isTrue: true
          },
          {
            id: 'b',
            answer: '<script href="script.js">',
            isTrue: false
          },
          {
            id: 'c',
            answer: '<script name="script.js">',
            isTrue: false
          },
          {
            id: 'd',
            answer: '<script file="script.js">',
            isTrue: false
          }
        ]
      },
      {
        id: 3,
        question: 'How do you write "Hello World" in an alert box?',
        answers: [
          {
            id: 'a',
            answer: 'msgBox("Hello World");',
            isTrue: false
          },
          {
            id: 'b',
            answer: 'alertBox("Hello World");',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'msg("Hello World");',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'alert("Hello World");',
            isTrue: true
          }
        ]
      },
      {
        id: 4,
        question: 'How do you create a function in JavaScript?',
        answers: [
          {
            id: 'a',
            answer: 'function = myFunction()',
            isTrue: false
          },
          {
            id: 'b',
            answer: 'function myFunction()',
            isTrue: true
          },
          {
            id: 'c',
            answer: 'var function = myFunction()',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'myFunction = function()',
            isTrue: false
          }
        ]
      },
      {
        id: 5,
        question: 'How do you call a function named "myFunction"?',
        answers: [
          {
            id: 'a',
            answer: 'call myFunction()',
            isTrue: false
          },
          {
            id: 'b',
            answer: 'call function myFunction()',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'myFunction()',
            isTrue: true
          },
          {
            id: 'd',
            answer: 'function myFunction()',
            isTrue: false
          }
        ]
      },
      {
        id: 6,
        question: 'How do you write an IF statement in JavaScript?',
        answers: [
          {
            id: 'a',
            answer: 'if i = 5',
            isTrue: false
          },
          {
            id: 'b',
            answer: 'if (i == 5)',
            isTrue: true
          },
          {
            id: 'c',
            answer: 'if i = 5 then',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'if i == 5 then',
            isTrue: false
          }
        ]
      },
      {
        id: 7,
        question: 'How do you write an IF-ELSE statement in JavaScript?',
        answers: [
          {
            id: 'a',
            answer: 'if i = 5 else',
            isTrue: false
          },
          {
            id: 'b',
            answer: 'if i == 5 else',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'if (i == 5) else',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'if (i == 5) { } else { }',
            isTrue: true
          }
        ]
      },
      {
        id: 8,
        question: 'How do you write a FOR loop in JavaScript?',
        answers: [
          {
            id: 'a',
            answer: 'for (i = 0; i <= 5)',
            isTrue: false
          },
          {
            id: 'b',
            answer: 'for (i <= 5; i++)',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'for (i = 0; i <= 5; i++)',
            isTrue: true
          },
          {
            id: 'd',
            answer: 'for (i++)',
            isTrue: false
          }
        ]
      },
      {
        id: 9,
        question: 'How do you exit a loop in JavaScript?',
        answers: [
          {
            id: 'a',
            answer: 'exit',
            isTrue: false
          },
          {
            id: 'b',
            answer: 'break',
            isTrue: true
          },
          {
            id: 'c',
            answer: 'continue',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'stop',
            isTrue: false
          }
        ]
      },
      {
        id: 10,
        question: 'How do you write a function called "myFunction"?',
        answers: [
          {
            id: 'a',
            answer: 'function myFunction()',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'function = myFunction()',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'myFunction = function()',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'myFunction()',
            isTrue: false
          }
        ]
      },
      {
        id: 11,
        question: 'How do you call a function named "myFunction"?',
        answers: [
          {
            id: 'a',
            answer: 'myFunction.call()',
            isTrue: false
          },
          {
            id: 'b',
            answer: 'myFunction()',
            isTrue: true
          },
          {
            id: 'c',
            answer: 'call myFunction()',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'call function myFunction()',
            isTrue: false
          }
        ]
      },
      {
        id: 12,
        question: 'How do you write a conditional statement for executing some code if "i" is NOT equal to 5?',
        answers: [
          {
            id: 'a',
            answer: 'if (i =! 5)',
            isTrue: false
          },
          {
            id: 'b',
            answer: 'if (i != 5)',
            isTrue: true
          },
          {
            id: 'c',
            answer: 'if (i <> 5)',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'if (i !== 5)',
            isTrue: false
          }
        ]
      },
      {
        id: 13,
        question: 'Which operator is used to assign a value to a variable?',
        answers: [
          {
            id: 'a',
            answer: '=',
            isTrue: true
          },
          {
            id: 'b',
            answer: '==',
            isTrue: false
          },
          {
            id: 'c',
            answer: '===',
            isTrue: false
          },
          {
            id: 'd',
            answer: ':=',
            isTrue: false
          }
        ]
      },
      {
        id: 14,
        question: 'What is the correct way to write a JavaScript array?',
        answers: [
          {
            id: 'a',
            answer: 'var colors = (1:"red", 2:"green", 3:"blue")',
            isTrue: false
          },
          {
            id: 'b',
            answer: 'var colors = ["red", "green", "blue"]',
            isTrue: true
          },
          {
            id: 'c',
            answer: 'var colors = "red", "green", "blue"',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'var colors = {red, green, blue}',
            isTrue: false
          }
        ]
      },
      {
        id: 15,
        question: 'How do you find the number with the highest value of x and y?',
        answers: [
          {
            id: 'a',
            answer: 'Math.ceil(x, y)',
            isTrue: false
          },
          {
            id: 'b',
            answer: 'Math.max(x, y)',
            isTrue: true
          },
          {
            id: 'c',
            answer: 'Math.top(x, y)',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'Math.high(x, y)',
            isTrue: false
          }
        ]
      },
      {
        id: 16,
        question: 'How do you generate a random number between 0 and 1?',
        answers: [
          {
            id: 'a',
            answer: 'random()',
            isTrue: false
          },
          {
            id: 'b',
            answer: 'Math.random()',
            isTrue: true
          },
          {
            id: 'c',
            answer: 'Math.rnd()',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'rand()',
            isTrue: false
          }
        ]
      },
      {
        id: 17,
        question: 'Which event occurs when the user clicks on an HTML element?',
        answers: [
          {
            id: 'a',
            answer: 'onclick',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'onchange',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'onmouseclick',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'onmouseover',
            isTrue: false
          }
        ]
      },
      {
        id: 18,
        question: 'What is the correct way to write a JavaScript object?',
        answers: [
          {
            id: 'a',
            answer: 'var person = {name: "John", age: 30, city: "New York"}',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'var person = [name: "John", age: 30, city: "New York"]',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'var person = "John", 30, "New York"',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'var person = name: "John", age: 30, city: "New York"',
            isTrue: false
          }
        ]
      },
      {
        id: 19,
        question: 'How do you access the elements of an array in JavaScript?',
        answers: [
          {
            id: 'a',
            answer: 'myArray{1}, myArray{2}, myArray{3}',
            isTrue: false
          },
          {
            id: 'b',
            answer: 'myArray[1], myArray[2], myArray[3]',
            isTrue: true
          },
          {
            id: 'c',
            answer: 'myArray(1), myArray(2), myArray(3)',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'myArray.1, myArray.2, myArray.3',
            isTrue: false
          }
        ]
      },
      {
        id: 20,
        question: 'Which operator is used to concatenate strings in JavaScript?',
        answers: [
          {
            id: 'a',
            answer: '+',
            isTrue: true
          },
          {
            id: 'b',
            answer: '&',
            isTrue: false
          },
          {
            id: 'c',
            answer: '-',
            isTrue: false
          },
          {
            id: 'd',
            answer: '*',
            isTrue: false
          }
        ]
      },
      {
        id: 21,
        question: 'What is the correct way to write a comment in JavaScript?',
        answers: [
          {
            id: 'a',
            answer: '//This is a comment',
            isTrue: true
          },
          {
            id: 'b',
            answer: '<!--This is a comment-->',
            isTrue: false
          },
          {
            id: 'c',
            answer: '/*This is a comment*/',
            isTrue: false
          },
          {
            id: 'd',
            answer: '**This is a comment**',
            isTrue: false
          }
        ]
      },
      {
        id: 22,
        question: 'Which method is used to remove the last element from an array and returns that element?',
        answers: [
          {
            id: 'a',
            answer: 'pop()',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'push()',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'join()',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'slice()',
            isTrue: false
          }
        ]
      },
      {
        id: 23,
        question: 'Which method is used to add one or more elements to the end of an array and returns the new length of the array?',
        answers: [
          {
            id: 'a',
            answer: 'push()',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'pop()',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'concat()',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'reverse()',
            isTrue: false
          }
        ]
      },
      {
        id: 24,
        question: 'What is the correct way to create a new date object in JavaScript?',
        answers: [
          {
            id: 'a',
            answer: 'var date = new Date();',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'var date = Date();',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'var date = new Date;',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'var date = Date;',
            isTrue: false
          }
        ]
      },
      {
        id: 25,
        question: 'How do you get the current year in JavaScript?',
        answers: [
          {
            id: 'a',
            answer: 'getDate()',
            isTrue: false
          },
          {
            id: 'b',
            answer: 'getFullYear()',
            isTrue: true
          },
          {
            id: 'c',
            answer: 'getYear()',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'getMonth()',
            isTrue: false
          }
        ]
      },
      {
        id: 26,
        question: 'Which method is used to convert a string to uppercase letters in JavaScript?',
        answers: [
          {
            id: 'a',
            answer: 'toUpperCase()',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'toLowerCase()',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'charAt()',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'concat()',
            isTrue: false
          }
        ]
      },
      {
        id: 27,
        question: 'What is the result of the following expression: "5" + 2?',
        answers: [
          {
            id: 'a',
            answer: '7',
            isTrue: false
          },
          {
            id: 'b',
            answer: '52',
            isTrue: true
          },
          {
            id: 'c',
            answer: '10',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'undefined',
            isTrue: false
          }
        ]
      },
      {
        id: 28,
        question: 'Which method is used to remove whitespace from both ends of a string in JavaScript?',
        answers: [
          {
            id: 'a',
            answer: 'trim()',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'concat()',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'toUpperCase()',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'substring()',
            isTrue: false
          }
        ]
      },
      {
        id: 29,
        question: 'What is the output of the following code: console.log(typeof undefined);',
        answers: [
          {
            id: 'a',
            answer: 'boolean',
            isTrue: false
          },
          {
            id: 'b',
            answer: 'number',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'undefined',
            isTrue: true
          },
          {
            id: 'd',
            answer: 'string',
            isTrue: false
          }
        ]
      },
      {
        id: 30,
        question: 'Which method is used to check if a string contains a specified value in JavaScript?',
        answers: [
          {
            id: 'a',
            answer: 'includes()',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'indexOf()',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'split()',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'toUpperCase()',
            isTrue: false
          }
        ]
      } 
    ]
  },
  {
    id: 1,
    number: 2,
    category: 'React JS',
    teacher: 'Chat GPT',
    questions: [
      {
        id: 0,
        question: 'What is React?',
        answers: [
          {
            id: 'a',
            answer: 'A JavaScript framework for building user interfaces.',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'A back-end development language.',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'A database management system.',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'A styling library for HTML.',
            isTrue: false
          }
        ]
      },
      {
        id: 1,
        question: 'What are the key features of React?',
        answers: [
          {
            id: 'a',
            answer: 'Virtual DOM, Component-based architecture, One-way data binding.',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'Two-way data binding, Object-oriented programming, Server-side rendering.',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'Imperative programming, CSS-in-JS, Code splitting.',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'Static typing, Webpack bundling, Modular CSS.',
            isTrue: false
          }
        ]
      },
      {
        id: 2,
        question: 'What is JSX?',
        answers: [
          {
            id: 'a',
            answer: 'A syntax extension for JavaScript that allows writing HTML-like code.',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'A package manager for React applications.',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'A state management library for React.',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'A build tool for optimizing React applications.',
            isTrue: false
          }
        ]
      },
      {
        id: 3,
        question: 'What is the purpose of the render() method in React?',
        answers: [
          {
            id: 'a',
            answer: 'To return the JSX code that represents the component\'s UI.',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'To handle user interactions and update the component\'s state.',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'To define the component\'s lifecycle methods.',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'To perform asynchronous operations and fetch data from APIs.',
            isTrue: false
          }
        ]
      },
      {
        id: 4,
        question: 'What is the purpose of state in React?',
        answers: [
          {
            id: 'a',
            answer: 'To store and manage mutable data within a component.',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'To handle user input and trigger UI updates.',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'To define the initial props of a component.',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'To handle the lifecycle events of a component.',
            isTrue: false
          }
        ]
      },
      {
        id: 5,
        question: 'What is the difference between props and state?',
        answers: [
          {
            id: 'a',
            answer: 'Props are read-only, while state is mutable.',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'Props are used for parent-child communication, while state is used for internal component data.',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'Props are defined in functional components, while state is defined in class components.',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'Props are passed through context, while state is passed through component hierarchy.',
            isTrue: false
          }
        ]
      },
      {
        id: 6,
        question: 'What is the purpose of keys in React lists?',
        answers: [
          {
            id: 'a',
            answer: 'Keys help React identify which items have changed, are added, or are removed in a list.',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'Keys provide a unique identifier for each component in the virtual DOM.',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'Keys determine the order in which components are rendered.',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'Keys enforce strict immutability in React components.',
            isTrue: false
          }
        ]
      },
      {
        id: 7,
        question: 'What is the purpose of the componentDidMount() lifecycle method?',
        answers: [
          {
            id: 'a',
            answer: 'To perform actions after the component is inserted into the DOM.',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'To handle user interactions and update the component\'s state.',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'To define the initial state of the component.',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'To render the component\'s UI based on the props and state.',
            isTrue: false
          }
        ]
      },
      {
        id: 8,
        question: 'What is React Router?',
        answers: [
          {
            id: 'a',
            answer: 'A library that provides routing capabilities for React applications.',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'A state management library for React.',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'A styling library for React components.',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'A build tool for optimizing React applications.',
            isTrue: false
          }
        ]
      },
      {
        id: 9,
        question: 'What are React Hooks?',
        answers: [
          {
            id: 'a',
            answer: 'Functions that allow you to use state and other React features in functional components.',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'Functions that define the lifecycle methods of a component.',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'Functions that enable server-side rendering of React components.',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'Functions that handle routing in React applications.',
            isTrue: false
          }
        ]
      },
      {
        id: 10,
        question: 'What is the purpose of useEffect() hook in React?',
        answers: [
          {
            id: 'a',
            answer: 'To perform side effects (e.g., data fetching, subscriptions) in functional components.',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'To update the component\'s state and trigger a re-render.',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'To handle user interactions and update the component\'s state.',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'To render the component\'s UI based on the props and state.',
            isTrue: false
          }
        ]
      },
      {
        id: 11,
        question: 'What is the purpose of the useContext() hook in React?',
        answers: [
          {
            id: 'a',
            answer: 'To access the value of a context in functional components.',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'To update the component\'s state and trigger a re-render.',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'To define the lifecycle methods of a component.',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'To handle user interactions and update the component\'s state.',
            isTrue: false
          }
        ]
      },
      {
        id: 12,
        question: 'What is the purpose of Redux?',
        answers: [
          {
            id: 'a',
            answer: 'A state management library that helps manage the application state in a predictable way.',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'A library for server-side rendering of React components.',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'A styling library for React components.',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'A build tool for optimizing React applications.',
            isTrue: false
          }
        ]
      },
      {
        id: 13,
        question: 'What are React components?',
        answers: [
          {
            id: 'a',
            answer: 'Reusable building blocks that encapsulate the logic and UI of a part of the application.',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'Functions that define the lifecycle methods of a component.',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'CSS classes used for styling React elements.',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'Templates for generating React project structures.',
            isTrue: false
          }
        ]
      },
      {
        id: 14,
        question: 'What is the purpose of the shouldComponentUpdate() method?',
        answers: [
          {
            id: 'a',
            answer: 'To control whether the component should re-render or not.',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'To handle user interactions and update the component\'s state.',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'To define the initial state of the component.',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'To perform actions after the component is inserted into the DOM.',
            isTrue: false
          }
        ]
      },
      {
        id: 15,
        question: 'What is the purpose of the setState() method?',
        answers: [
          {
            id: 'a',
            answer: 'To update the component\'s state and trigger a re-render.',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'To perform actions after the component is inserted into the DOM.',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'To handle user interactions and update the component\'s state.',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'To define the initial state of the component.',
            isTrue: false
          }
        ]
      },
      {
        id: 16,
        question: 'What is the purpose of the componentWillUnmount() method?',
        answers: [
          {
            id: 'a',
            answer: 'To perform cleanup actions before the component is removed from the DOM.',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'To handle user interactions and update the component\'s state.',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'To define the initial state of the component.',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'To render the component\'s UI based on the props and state.',
            isTrue: false
          }
        ]
      },
      {
        id: 17,
        question: 'What is the purpose of the React.Fragment component?',
        answers: [
          {
            id: 'a',
            answer: 'To group multiple elements without adding an extra node to the DOM.',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'To handle user interactions and update the component\'s state.',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'To define the initial state of the component.',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'To render the component\'s UI based on the props and state.',
            isTrue: false
          }
        ]
      },
      {
        id: 18,
        question: 'What is the purpose of the key prop in React?',
        answers: [
          {
            id: 'a',
            answer: 'To help React identify which items have changed, are added, or are removed in a list.',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'To provide a unique identifier for each component in the virtual DOM.',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'To determine the order in which components are rendered.',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'To enforce strict immutability in React components.',
            isTrue: false
          }
        ]
      },
      {
        id: 19,
        question: 'What is the purpose of the React.memo() function?',
        answers: [
          {
            id: 'a',
            answer: 'To memoize a component and prevent unnecessary re-renders.',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'To update the component\'s state and trigger a re-render.',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'To handle user interactions and update the component\'s state.',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'To render the component\'s UI based on the props and state.',
            isTrue: false
          }
        ]
      },
      {
        id: 20,
        question: 'What is the purpose of the useCallback() hook?',
        answers: [
          {
            id: 'a',
            answer: 'To memoize a function and prevent unnecessary re-creations.',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'To update the component\'s state and trigger a re-render.',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'To handle user interactions and update the component\'s state.',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'To perform side effects in functional components.',
            isTrue: false
          }
        ]
      },
      {
        id: 21,
        question: 'What is the purpose of the useRef() hook?',
        answers: [
          {
            id: 'a',
            answer: 'To create a mutable reference that persists across re-renders.',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'To update the component\'s state and trigger a re-render.',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'To handle user interactions and update the component\'s state.',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'To perform side effects in functional components.',
            isTrue: false
          }
        ]
      },
      {
        id: 22,
        question: 'What is the purpose of the useMemo() hook?',
        answers: [
          {
            id: 'a',
            answer: 'To memoize a value and prevent unnecessary re-calculations.',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'To update the component\'s state and trigger a re-render.',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'To handle user interactions and update the component\'s state.',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'To perform side effects in functional components.',
            isTrue: false
          }
        ]
      },
      {
        id: 23,
        question: 'What is the purpose of the useContext() hook?',
        answers: [
          {
            id: 'a',
            answer: 'To access the value of a context in functional components.',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'To update the component\'s state and trigger a re-render.',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'To handle user interactions and update the component\'s state.',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'To perform side effects in functional components.',
            isTrue: false
          }
        ]
      },
      {
        id: 24,
        question: 'What is the purpose of the useReducer() hook?',
        answers: [
          {
            id: 'a',
            answer: 'To manage state with complex logic using a reducer function.',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'To update the component\'s state and trigger a re-render.',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'To handle user interactions and update the component\'s state.',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'To perform side effects in functional components.',
            isTrue: false
          }
        ]
      },
      {
        id: 25,
      question: 'What is the purpose of the withRouter() HOC (Higher Order Component) in React Router?',
        answers: [
          {
            id: 'a',
            answer: 'To provide access to the router props (match, location, history) in a component that is not directly rendered by a Route.',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'To update the component\'s state and trigger a re-render.',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'To handle user interactions and update the component\'s state.',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'To render the component\'s UI based on the props and state.',
            isTrue: false
          }
        ]
      },
      {
        id: 26,
      question: 'What is the purpose of the ErrorBoundary component in React?',
      answers: [
        {
          id: 'a',
          answer: 'To catch and handle errors in the component tree below it.',
          isTrue: true
        },
        {
          id: 'b',
          answer: 'To update the component\'s state and trigger a re-render.',
          isTrue: false
        },
        {
          id: 'c',
          answer: 'To handle user interactions and update the component\'s state.',
          isTrue: false
        },
        {
          id: 'd',
          answer: 'To perform side effects in functional components.',
          isTrue: false
        }
      ]
    },
    {
      id: 27,
      question: 'What is the purpose of the render prop in React?',
      answers: [
        {
          id: 'a',
          answer: 'To pass a function as a prop to a component, which the component can call to render a specific part of its UI.',
          isTrue: true
        },
        {
          id: 'b',
          answer: 'To update the component\'s state and trigger a re-render.',
          isTrue: false
        },
        {
          id: 'c',
          answer: 'To handle user interactions and update the component\'s state.',
          isTrue: false
        },
        {
          id: 'd',
          answer: 'To perform side effects in functional components.',
          isTrue: false
        }
      ]
    },
    {
      id: 28,
      question: 'What is the purpose of the propTypes library in React?',
      answers: [
        {
          id: 'a',
          answer: 'To define the types of the props accepted by a component.',
          isTrue: true
        },
        {
          id: 'b',
          answer: 'To update the component\'s state and trigger a re-render.',
          isTrue: false
        },
        {
          id: 'c',
          answer: 'To handle user interactions and update the component\'s state.',
          isTrue: false
        },
        {
          id: 'd',
          answer: 'To perform side effects in functional components.',
          isTrue: false
        }
      ]
    },
    {
      id: 29,
      question: 'What is the purpose of the Jest library in React?',
      answers: [
        {
          id: 'a',
          answer: 'To provide a testing framework for React applications.',
          isTrue: true
        },
        {
          id: 'b',
          answer: 'To update the component\'s state and trigger a re-render.',
          isTrue: false
        },
        {
          id: 'c',
          answer: 'To handle user interactions and update the component\'s state.',
          isTrue: false
        },
        {
          id: 'd',
          answer: 'To perform side effects in functional components.',
          isTrue: false
        }
      ]
    },
    {
      id: 30,
      question: 'What is the purpose of the React Router library in React?',
      answers: [
        {
          id: 'a',
          answer: 'To handle routing and navigation in single-page applications.',
          isTrue: true
        },
        {
          id: 'b',
          answer: 'To update the component\'s state and trigger a re-render.',
          isTrue: false
        },
        {
          id: 'c',
          answer: 'To handle user interactions and update the component\'s state.',
          isTrue: false
        },
        {
          id: 'd',
          answer: 'To perform side effects in functional components.',
          isTrue: false
        }
      ]
    }
    ]
  },
  {
    id: 2,
    number: 3,
    category: 'HTML & CSS',
    teacher: 'Chat GPT',
    questions: [
      {
        id: 0,
        question: 'What does HTML stand for?',
        answers: [
          {
            id: 'a',
            answer: 'Hyper Text Markup Language',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'Home Tool Markup Language',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'Hyperlinks and Text Markup Language',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'Hyperlinks, Text, and Multimedia Language',
            isTrue: false
          }
        ]
      },
      {
        id: 1,
        question: 'What is the correct way to include an external CSS file in an HTML document?',
        answers: [
          {
            id: 'a',
            answer: '<link rel="stylesheet" href="styles.css">',
            isTrue: true
          },
          {
            id: 'b',
            answer: '<style src="styles.css">',
            isTrue: false
          },
          {
            id: 'c',
            answer: '<script src="styles.css">',
            isTrue: false
          },
          {
            id: 'd',
            answer: '<css src="styles.css">',
            isTrue: false
          }
        ]
      },
      {
        id: 2,
        question: 'Which HTML tag is used to define an unordered list?',
        answers: [
          {
            id: 'a',
            answer: '<ul>',
            isTrue: true
          },
          {
            id: 'b',
            answer: '<ol>',
            isTrue: false
          },
          {
            id: 'c',
            answer: '<li>',
            isTrue: false
          },
          {
            id: 'd',
            answer: '<list>',
            isTrue: false
          }
        ]
      },
      {
        id: 3,
        question: 'Which CSS property is used to change the text color of an element?',
        answers: [
          {
            id: 'a',
            answer: 'color',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'text-color',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'font-color',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'text-style',
            isTrue: false
          }
        ]
      },
      {
        id: 4,
        question: 'Which JavaScript function is used to select an HTML element by its ID?',
        answers: [
          {
            id: 'a',
            answer: 'document.getElementById()',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'document.querySelector()',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'document.getElementByName()',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'document.getElementsByClass()',
            isTrue: false
          }
        ]
      },
      {
        id: 5,
        question: 'What is the correct way to write a JavaScript comment?',
        answers: [
          {
            id: 'a',
            answer: '// This is a comment',
            isTrue: true
          },
          {
            id: 'b',
            answer: '<!-- This is a comment -->',
            isTrue: false
          },
          {
            id: 'c',
            answer: '/* This is a comment */',
            isTrue: false
          },
          {
            id: 'd',
            answer: '** This is a comment **',
            isTrue: false
          }
        ]
      },
      {
        id: 6,
        question: 'What is the purpose of the <div> element in HTML?',
        answers: [
          {
            id: 'a',
            answer: 'To group and style other HTML elements',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'To define a section of an HTML document',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'To display an image',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'To create a hyperlink',
            isTrue: false
          }
        ]
      },
      {
        id: 7,
        question: 'What is the CSS box model used for?',
        answers: [
          {
            id: 'a',
            answer: 'To describe the layout and spacing of elements on a web page',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'To add animations and transitions to elements',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'To define the font styles and sizes',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'To handle user interactions and events',
            isTrue: false
          }
        ]
      },
      {
        id: 8,
        question: 'What is the purpose of the "display: none;" CSS property?',
        answers: [
          {
            id: 'a',
            answer: 'To hide an element from the web page',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'To change the font size of an element',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'To add a border around an element',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'To make an element unclickable',
            isTrue: false
          }
        ]
      },
      {
        id: 9,
        question: 'What is the JavaScript event that occurs when a user clicks on an HTML element?',
        answers: [
          {
            id: 'a',
            answer: 'onclick',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'onchange',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'onload',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'onsubmit',
            isTrue: false
          }
        ]
      },
      {
        id: 10,
        question: 'Which CSS property is used to add shadows to elements?',
        answers: [
          {
            id: 'a',
            answer: 'box-shadow',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'background-shadow',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'text-shadow',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'element-shadow',
            isTrue: false
          }
        ]
      },
      {
        id: 11,
        question: 'What is the purpose of the "position: relative;" CSS property?',
        answers: [
          {
            id: 'a',
            answer: 'To position an element relative to its normal position',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'To change the font family of an element',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'To add a background image to an element',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'To align an element vertically',
            isTrue: false
          }
        ]
      },
      {
        id: 12,
        question: 'What is the purpose of the "document.getElementById()" JavaScript function?',
        answers: [
          {
            id: 'a',
            answer: 'To select an HTML element by its ID',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'To create a new HTML element',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'To change the text content of an HTML element',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'To add a class to an HTML element',
            isTrue: false
          }
        ]
      },
      {
        id: 13,
        question: 'Which HTML tag is used to define a table row?',
        answers: [
          {
            id: 'a',
            answer: '<tr>',
            isTrue: true
          },
          {
            id: 'b',
            answer: '<td>',
            isTrue: false
          },
          {
            id: 'c',
            answer: '<th>',
            isTrue: false
          },
          {
            id: 'd',
            answer: '<table>',
            isTrue: false
          }
        ]
      },
      {
        id: 14,
        question: 'What is the purpose of the "font-weight" CSS property?',
        answers: [
          {
            id: 'a',
            answer: 'To control the boldness of text',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'To change the font color of text',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'To add an underline to text',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'To change the font size of text',
            isTrue: false
          }
        ]
      },
      {
        id: 15,
        question: 'What is the purpose of the "appendChild()" JavaScript method?',
        answers: [
          {
            id: 'a',
            answer: 'To add a new child element to an existing element',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'To remove a child element from its parent element',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'To replace an existing element with a new element',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'To select an HTML element by its ID',
            isTrue: false
          }
        ]
      },
      {
        id: 16,
        question: 'Which CSS property is used to control the spacing between lines of text?',
        answers: [
          {
            id: 'a',
            answer: 'line-height',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'text-indent',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'letter-spacing',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'text-transform',
            isTrue: false
          }
        ]
      },
      {
        id: 17,
        question: 'What is the purpose of the "querySelectorAll()" JavaScript method?',
        answers: [
          {
            id: 'a',
            answer: 'To select multiple HTML elements that match a specified CSS selector',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'To select the first HTML element that matches a specified CSS selector',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'To select an HTML element by its ID',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'To change the text content of an HTML element',
            isTrue: false
          }
        ]
      },
      {
        id: 18,
        question: 'Which CSS property is used to add a background color to an element?',
        answers: [
          {
            id: 'a',
            answer: 'background-color',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'color',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'font-color',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'text-color',
            isTrue: false
          }
        ]
      },
      {
        id: 19,
        question: 'What is the purpose of the "classList" property in JavaScript?',
        answers: [
          {
            id: 'a',
            answer: 'To add, remove, or toggle CSS classes on an HTML element',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'To change the text content of an HTML element',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'To select an HTML element by its ID',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'To create a new HTML element',
            isTrue: false
          }
        ]
      },
      {
        id: 20,
        question: 'What is the purpose of the "text-decoration" CSS property?',
        answers: [
          {
            id: 'a',
            answer: 'To add decorations to text, such as underlines or strikethroughs',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'To change the font size of text',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'To control the spacing between lines of text',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'To change the font style of text',
            isTrue: false
          }
        ]
      },
      {
        id: 21,
        question: 'What is the purpose of the "addEventListener()" JavaScript method?',
        answers: [
          {
            id: 'a',
            answer: 'To attach an event handler function to an HTML element',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'To select an HTML element by its ID',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'To change the text content of an HTML element',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'To add a class to an HTML element',
            isTrue: false
          }
        ]
      },
      {
        id: 22,
        question: 'Which HTML tag is used to define a hyperlink?',
        answers: [
          {
            id: 'a',
            answer: '<a>',
            isTrue: true
          },
          {
            id: 'b',
            answer: '<link>',
            isTrue: false
          },
          {
            id: 'c',
            answer: '<h1>',
            isTrue: false
          },
          {
            id: 'd',
            answer: '<p>',
            isTrue: false
          }
        ]
      },
      {
        id: 23,
        question: 'What is the purpose of the "border-radius" CSS property?',
        answers: [
          {
            id: 'a',
            answer: 'To round the corners of an element',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'To add a border around an element',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'To change the font color of an element',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'To align an element vertically',
            isTrue: false
          }
        ]
      },
      {
        id: 24,
        question: 'What is the purpose of the "innerHTML" property in JavaScript?',
        answers: [
          {
            id: 'a',
            answer: 'To get or set the HTML content of an element',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'To add a new child element to an existing element',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'To change the font style of an element',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'To select an HTML element by its ID',
            isTrue: false
          }
        ]
      },
      {
        id: 25,
        question: 'Which CSS property is used to control the order of elements on a web page?',
        answers: [
          {
            id: 'a',
            answer: 'order',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'position',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'display',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'float',
            isTrue: false
          }
        ]
      },
      {
        id: 26,
        question: 'What is the purpose of the "setAttribute()" JavaScript method?',
        answers: [
          {
            id: 'a',
            answer: 'To set the value of an attribute on an HTML element',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'To select an HTML element by its ID',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'To change the text content of an HTML element',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'To add a class to an HTML element',
            isTrue: false
          }
        ]
      },
      {
        id: 27,
        question: 'Which HTML tag is used to define a section heading?',
        answers: [
          {
            id: 'a',
            answer: '<h1>-<h6>',
            isTrue: true
          },
          {
            id: 'b',
            answer: '<p>',
            isTrue: false
          },
          {
            id: 'c',
            answer: '<section>',
            isTrue: false
          },
          {
            id: 'd',
            answer: '<div>',
            isTrue: false
          }
        ]
      },
      {
        id: 28,
        question: 'What is the purpose of the "text-align" CSS property?',
        answers: [
          {
            id: 'a',
            answer: 'To align the text within an element',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'To change the font size of text',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'To control the spacing between lines of text',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'To add decorations to text, such as underlines or strikethroughs',
            isTrue: false
          }
        ]
      },
      {
        id: 29,
        question: 'What is the purpose of the "classList.add()" JavaScript method?',
        answers: [
          {
            id: 'a',
            answer: 'To add a CSS class to an HTML element',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'To remove a CSS class from an HTML element',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'To change the text content of an HTML element',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'To select an HTML element by its ID',
            isTrue: false
          }
        ]
      },
      {
        id: 30,
        question: 'Which CSS property is used to control the visibility of an element?',
        answers: [
          {
            id: 'a',
            answer: 'visibility',
            isTrue: true
          },
          {
            id: 'b',
            answer: 'display',
            isTrue: false
          },
          {
            id: 'c',
            answer: 'opacity',
            isTrue: false
          },
          {
            id: 'd',
            answer: 'position',
            isTrue: false
          }
        ]
      }
    ]
  }
];