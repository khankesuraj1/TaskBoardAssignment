# TaskBoard Pro – Kanban-Style Task Manager

A React.js single-page application that implements a Kanban-style task manager with drag-and-drop functionality, task creation/editing, and local storage persistence — all without any UI frameworks or external state libraries.

---

## Features

- Three default columns: **To Do**, **In Progress**, **Done**
- Add, edit, and delete tasks
- Each task has:
  - Title
  - Description
  - Creation date (auto-generated)
  - Priority (Low, Medium, High)
- Drag & drop support:
  - Move tasks between columns
  - Reorder tasks within columns
- Persistent data saved in **localStorage**
- Built with React hooks (`useState`, `useEffect`)
- Controlled form components for task input
- No external UI or state management libraries used

---

## Setup Instructions

1. **Clone the repository**

2. Install dependencies
   * npm install

3. Install required additional packages
   * npm install @hello-pangea/dnd uuid
    
4. Start the development server
   * npm start
    
5. Open your browser
   * Navigate to http://localhost:3000 to view the application.
