/*

import { useState } from "react";

// this is component for the logic for modifying quantity
function Counter() {
  let [count, setCount] = useState(0)

  function increment() {
    setCount(count += 1)
  }
  function decrement() {
    setCount(count -= 1)
  };
}

// this is the component for rendering the product and quantity
function ShoppingCartItem(productName, quantity) {
  let prd = productName
  let qty = quantity
  return (

    <div>
      <button onClick={qty.Counter.increment}>Increment</button>
      <button onClick={qty.Counter.increment}>Increment</button>
    </div>
  )
}

function Day002() {
    return (
      ShoppingCartItem()
    )
  }
export default Day002;

==================================================
CHALLENGE
==================================================
Day: 2
Title: Shopping Cart Item Quantity Adjuster
Type: Feature
Difficulty: 2
Estimated Implementation Time: ~35 minutes

Concepts:
- React functional components
- `useState`1
- Event handlers (`onClick`)
- Props
- Conditional rendering (disabling buttons)

Why this challenge:
This challenge directly reinforces concepts identified as struggles in the previous session, including `useState` for managing component-specific data, `onClick` for handling user interactions, and `props` for passing data between parent and child components. It provides a practical context for applying React's declarative rendering model by updating the UI based on state changes.

Task:
Create a React component named `ShoppingCartItem` that displays a product's name and its current quantity. The component should include buttons to increment and decrement the quantity.

Requirements:
1. The `ShoppingCartItem` component should accept `productName` and initial `quantity` as props.
2. The component should display the `productName` and the current `quantity`.
3. There should be an "Increment" button that increases the quantity by 1 when clicked.
4. There should be a "Decrement" button that decreases the quantity by 1 when clicked.

Constraints:
- The quantity must not go below 0. The "Decrement" button should be disabled when the quantity is 0.

Acceptance Criteria:
1. The `ShoppingCartItem` component renders the `productName` and `quantity` received via props.
2. Clicking the "Increment" button increases the displayed quantity by one.
3. Clicking the "Decrement" button decreases the displayed quantity by one.
4. The "Decrement" button is disabled when the quantity is 0.

Optional Stretch:
Add a "Remove Item" button that, when clicked, sets the quantity to 0 and disables both increment and decrement buttons.
==================================================
REFLECTION
==================================================

What I learned:
- My current primary weaknesses: relational ability, judging the importance of each concept/idea/object in relation to one another. How do each concepts connect together.

What I struggled with:
- I struggled with thinking about the scope of the challenge first and foremost as the root cause which cascaded to all the other problems.

What I figured out without AI:
- I figured out where I went wrong with my way of approaching this problem and my reasoning.

What I would do differently next time:
- I said I would do pseudocode more but I didn't do it last time, and so for the next time, it's not pseudocode that I should prioritize, but to actually read the problem and think about the concepts more relationally.

Important insight:
- It's more about my own meta-thinking that I figured out moreso than the actual technical concepts related to React.

 */
