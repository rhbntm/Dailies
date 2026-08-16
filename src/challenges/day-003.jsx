/*
import { useState } from "react";

function TodoProvider() {
  // this contains the items
  let [todo, setTodo] = useState([]);

  // these are the functions provided which can be used in TodoInput()
  function addTodo() {
    // my idea is that, this function needs access to the value of the input box in the TodoInput(). im stuck.
    setTodo(todo.append())
  }
  function toggleTodo() {

  }
  function removeTodo() {

  }
}

function TodoInput() {
  return (

  )
}

function FilterBar() {
  return (
    <div>
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
    </div>
  )
}


function Day003() {
  return (

  )
}

export default Day003;

==================================================
CHALLENGE
==================================================

Day: 3
Title: Todo List with Filter
Type: Feature
Difficulty: 3
Estimated Implementation Time: ~35 minutes

Concepts
- React functional components
- useState, useEffect (optional)
- Event handlers & synthetic events
- Props & component composition
- Conditional rendering & list rendering

Why this challenge
This builds on the relational reasoning you’ve practiced in days 1‑2 while giving you a fresh opportunity to solidify React state, props, and event handling in a slightly larger component hierarchy.

Task
Create a small Todo application that lets a user add items, mark them as completed, and filter the list by “All”, “Active”, or “Completed”.

Requirements

1. **TodoProvider** – Create a context that holds the todo list state and exposes functions to add, toggle, and remove todos.
2. **TodoInput** – A controlled input with an “Add” button that calls the provider’s add function.
3. **TodoList** – Renders the current list of todos. Each item shows its text and a checkbox to toggle completion.
4. **FilterBar** – Three buttons (“All”, “Active”, “Completed”) that set the current filter.
5. **App** – Wraps the provider and renders `TodoInput`, `FilterBar`, and `TodoList`.

Constraints

- Do **not** use any external state libraries (Redux, Zustand, etc.).
- Persist the list only in memory (no localStorage).
- Use functional components and hooks only.
- Keep styling minimal; focus on functionality.

Acceptance Criteria

1. The input accepts text and adds a new todo when “Add” is clicked or Enter is pressed.
2. Each todo item displays a checkbox that toggles its `completed` state.
3. The filter bar correctly shows the three filter options and highlights the active filter.
4. The list updates to show only the todos that match the selected filter.
5. Removing a todo (optional) works without errors.

Optional Stretch

- Persist the todo list in `localStorage` so it survives page reloads.

==================================================
REFLECTION
==================================================

What I learned:
- React Context specific use case. (I've learnt this already conceptually before but don't know what, how, when to apply it)

What I struggled with:
- Trying to clearly define the role of each component.
- Knowing what applicable concepts to use to make the TodoProvider's available functions accessible by TodoInput.

What I figured out without AI:
- I figured out that the TodoInput will need to have access to the functions defined in TodoProvider but IDK how to establish the connection.

What I would do differently next time:
- For this specific challenge. My approach was to read -> determine the relationships of the known components -> Then try to find the relationship between the components.
- I tried drawing it out to make the connections clearer, but in the end writing things as I'm thinking about the problem helped better subjectively speaking. So for what I would do differently next time, I'll either try writing out my thoughts as I'm thinking or say them out loud(I was quiet most of the time)

Important insight:
- There are probably a lot of complex variables that are at play here when I'm thinking but I concluded that I really do suck at thinking about the relationships of variables when I'm prompted with a clear set of requirements, but whenever I'm thinking freely, I'm relatively better in my own perception at connecting variables/concepts together. But at the end of the day, I believe that deliberate practice will make this skill of thinking with clear requirements better.
*/
