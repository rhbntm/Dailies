/*
import { useState } from "react";

function handleClick() {
  return (
    <button onClick={onClick}></button>
  )
}

function Counter() {
  let [counter, setCounter] = useState(0)


  if (button) {
    setCounter(() => counter += 1)
  }
  // but if decrement button is clicked this runs
  else if (y = 0)
  {
    setCounter(() => counter += 1)

  }
  // and if reset button is clicked this runs
  else {
    setCounter(counter == 0)
  }
}
function CounterDisplay() {
  return {
    <button>Add</button>;
    <button>decrement</button>;
    <button>Reset</button>;

  }
}


function Day001() {
  return (
    CounterDisplay()
  );
}

export default Day001;

/*

Challenge:

**Day: 1**
**Title: Interactive Counter Component**
**Type: Feature**
**Difficulty: 2/10**
**Estimated Time: 30–45 minutes**

**Concepts:**
- React functional components
- `useState` hook for local state
- Event handlers (onClick)
- Conditional rendering
- Component composition (parent/child)


**Task:**
Build a counter feature with two components: a `Counter` parent and a `CounterDisplay` child. The counter should increment, decrement, and reset. The display component should receive the count as a prop and show different messages based on the value.


**Requirements:**
1. Create a `Counter` component that manages the count state
2. Create a `CounterDisplay` component that receives `count` as a prop
3. Three buttons: Increment (+1), Decrement (-1), Reset (to 0)
4. `CounterDisplay` shows:
   - "Count is zero" when count === 0
   - "Count is positive" when count > 0
   - "Count is negative" when count < 0
   - The actual number in all cases
5. Disable the Decrement button when count <= -5
6. Disable the Increment button when count >= 5


**Constraints:**
- Use only `useState` for state management
- No external libraries beyond React
- Keep all logic in the `Counter` component; `CounterDisplay` should be purely presentational
- Do not use inline styles—use CSS classes (you can add a simple CSS file or use index.css)


**Acceptance Criteria:**
- [ ] Clicking Increment increases count by 1
- [ ] Clicking Decrement decreases count by 1
- [ ] Clicking Reset sets count to 0
- [ ] Display updates correctly for zero, positive, and negative values
- [ ] Buttons disable/enable at the correct boundaries (-5 and 5)
- [ ] Components are separated: `Counter` (logic) and `CounterDisplay` (UI)


**Optional Stretch:**
Add a "Step" input (number type) that lets the user configure how much Increment/Decrement changes the count (default 1). The Reset button should always return to 0 regardless of step size.

---

Summary:

Day: 1
Type: Feature
Difficulty: 2/10
Time: 60 minutes
Completed: No


What I learned:
Relearned React basic concepts useState

What I struggled with:
Syntax

What I would do differently:
I'd try to do a complete pseudocode to make things clearer.
Because, diagrams at least for me are not enough for solving specific syntax problems,

Important insight:
Non-assisted AI coding is actually fun and got me engaged the whole 60 minutes.
*/
