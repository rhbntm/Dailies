/*
import { useState } from "react";

function WelcomeMessage(initialName) {
  const [name, setName] = useState(initialName || 'Guest');

  function HandleMessage(name) {
    return(
      setName(() => name = input.value)
    )

  }


  return (
    <div>
      <input placeholder={'Enter name'}></input>
      <p>Hello {name}</p>
      <button onClick={HandleMessage}>Set Name</button>
    </div>

  )
}

function Day005() {
  return (
    WelcomeMessage()
  )
}
export default Day005;

==================================================
CHALLENGE
==================================================
Day: 5
Title: Dynamic Welcome Message
Type: Feature
Difficulty: 3
Estimated Implementation Time: ~25 minutes

Concepts:

* React functional components
* `useState`
* `props`
* Conditional rendering
* Event handlers
* Object destructuring

Why this challenge:
This challenge aims to reinforce your understanding of component state management, props, and conditional rendering within React. It specifically targets your recurring weakness in relational reasoning by requiring you to connect these concepts to build a dynamic UI element. You will also get an opportunity to practice object destructuring in a practical context.

Task:
Create a React component called `WelcomeMessage` that displays a personalized welcome message. The component should initially display a generic welcome message. It should also include an input field and a button. When the user types their name into the input field and clicks the button, the welcome message should update to include their name.

Requirements:

1.  Create a new file `WelcomeMessage.jsx` in the `src/challenges` directory.
2.  The `WelcomeMessage` component should accept an optional `initialName` prop. If `initialName` is provided, the component should start with that name in the welcome message and the input field.
3.  The component should use `useState` to manage the currently displayed name.
4.  The component should render an input field for the user to type their name.
5.  The component should render a button to "Set Name".
6.  When the "Set Name" button is clicked, the displayed welcome message should update with the name from the input field.
7.  The welcome message should be "Hello, Guest!" initially if no `initialName` prop is provided.
8.  If an `initialName` prop is provided, the initial message should be "Hello, [initialName]!".

Constraints:

*   Do not use any external libraries other than React.
*   The component should manage its own name state internally.

Acceptance Criteria:

1.  The `WelcomeMessage` component renders.
2.  The initial welcome message is "Hello, Guest!" when no `initialName` prop is provided.
3.  The initial welcome message is "Hello, [initialName]!" when an `initialName` prop is provided.
4.  Typing a name into the input field and clicking "Set Name" updates the displayed welcome message to "Hello, [Typed Name]!".
5.  The input field's value updates as the user types.

Optional Stretch:
Add a "Clear Name" button that resets the welcome message back to "Hello, Guest!" and clears the input field.

==================================================
REFLECTION
==================================================

What I learned:
- The difference between passing a destructured object as a props vs passing a whole object as a props.

What I struggled with:
- How to access the value of the <input>

What I figured out without AI:
- The conceptual data flow of each subcomponents

What I would do differently next time:
- Nothing really, I would've written down my thoughts more but given the short time I wasn't able to. So maybe for next time, I will increase my time budget to 30 minutes instead of the usual 25 minutes.

Important insight:
- I didn't consider the fact that I have to store the input value in a useState() so that I can actually use it inside the WelcomeMessage component. What I was doing is brute-forcing it. In simple terms, I didn't create a carrier that will carry the value of <input> to be given to WelcomeMessage component.
*/
