React Task Manager — Task 2

A simple React Task Manager developed as part of Task 2: Core Concepts / Fundamentals of my Full Stack Development internship.

The project focuses on understanding and practically implementing fundamental React concepts such as components, state management, props, event handling, conditional rendering, list rendering, and component-based architecture.

📌 Task Objective

The main objective of this task was to learn and practice the fundamental concepts of React through a small practical application.

The Task Manager was built to demonstrate how React manages application state and dynamically updates the user interface based on user interactions.

🚀 Features

- Add new tasks
- Prevent empty tasks from being added
- Display all tasks
- Mark tasks as completed/uncompleted
- Delete tasks
- Display total number of tasks
- Display completed task count
- Empty-state message when there are no tasks
- Dynamic styling for completed tasks
- Component-based application structure

🧠 React Concepts Practiced

- Functional Components
- JSX
- "useState" Hook
- Props
- Parent-to-child communication
- Event Handling
- Controlled Components
- Conditional Rendering
- List Rendering with "map()"
- Array methods such as "map()" and "filter()"
- React "key" property
- State immutability
- JavaScript Spread Operator
- Reusable Components
- Dynamic CSS Classes

🏗️ Project Structure

react-task-manager/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── TaskForm.jsx
│   ├── TaskList.jsx 
│   ├── TaskStats.jsx
│   └── main.jsx
│
├── public/
├── package.json
├── vite.config.js
└── README.md

Component Responsibilities

App.jsx

The main component that manages the application state and task operations.

TaskForm.jsx

Handles task input and form submission.

TaskList.jsx

Displays the task list and handles task completion and deletion.

TaskStats.jsx

Displays the total number of tasks and the number of completed tasks.

⚙️ Technologies Used

- React.js
- JavaScript (ES6+)
- JSX
- CSS
- Vite
- ESLint
- Node.js
- npm

💻 Getting Started

1. Clone the repository

git clone https://github.com/biswasayan833-crypto/react-task-manager-task2.git

2. Navigate to the project

cd react-task-manager-task2

3. Install dependencies

npm install

4. Start the development server

npm run dev

The application will be available at the local URL provided by Vite.

🧪 Testing

The following functionality was tested:

- Adding tasks
- Preventing empty tasks
- Completing and uncompleting tasks
- Deleting tasks
- Updating total task count
- Updating completed task count
- Empty-state rendering
- Component communication
- Browser functionality
- ESLint validation

The application was tested successfully during development.

🔍 Example Task Flow

User enters a task
       ↓
TaskForm
       ↓
App State
       ↓
Task is added
       ↓
TaskList displays the task
       ↓
User can complete/delete the task
       ↓
State updates
       ↓
React re-renders the UI
       ↓
TaskStats updates

📚 Learning Outcome

Through this task, I gained practical experience in building React applications using reusable components and managing application state.

I learned how components communicate using props, how state changes trigger UI updates, and how React can dynamically render content based on application data.

This task also improved my understanding of JavaScript array methods, event handling, controlled inputs, conditional rendering, and basic frontend project organization.

👨‍💻 Internship Task

Task: Task 2 — Core Concepts / Fundamentals
Domain: Full Stack Development
Application: React Task Manager
