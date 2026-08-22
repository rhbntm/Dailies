/*
import { useState } from "react"

function CharacterCounter() {
  let [character, setCharacter] = useState("")

  // function hasExceeded() {
  //   if (character.length > 20) {
  //     return("Warning: Character has exceeded 20 characters")
  //   }
  // }
  function handleChange(e) {
    // hasExceeded()
    setCharacter(() => e.target.value)
  }

  return (
    <div>
      <input
        value={character}
        onChange={handleChange}
        placeholder="Type characters"
      />
      <p>Caracter allowance is: {20 - character.length}</p>
      <p style={{color: "red"}}>{ character.length > 20 ? "Warning character exceeded": ""}</p>
      <p> Character count is: {character.length}</p>
    </div>

  )
}


function Day009() {

  return (
    <CharacterCounter/>
  )
}

export default Day009;

==================================================
REFLECTION
==================================================

Day: 9
Title: Character Counter Input
Type: Feature
Difficulty: 3
Estimated Implementation Time: ~25 minutes

Concepts:
* React controlled inputs
* `useState`
* Event handling (`onChange`)
* Derived state (calculating remaining characters and limit exceeded status)
* Conditional rendering

Why this challenge:
Recent sessions showed struggles with relational reasoning—specifically connecting user input events to React state and deriving downstream UI output from that state. This challenge reinforces controlled input handling and derived state calculations within a clean, bounded interactive component.

Task:
Build a character counter component for a short text input (such as a status update or bio field). The component should track user input, display the current character count and remaining character allowance against a defined limit, and alert the user when the limit is exceeded.

Requirements:
1. Store the user's input text in React state as a controlled input.
2. Establish a maximum character limit (e.g., 20 characters).
3. Derive character count metrics from the input text state without storing redundant state.
4. Display current character count and remaining character allowance.
5. Display a warning message when the typed input exceeds the maximum limit.

Constraints:
* Do not use external form or validation libraries.
* Do not store character count or warning flags in React state; derive them directly from the input text state during rendering.

Acceptance Criteria:
1. Typing into the input field updates the input's value in real time.
2. The component displays the accurate count of characters currently typed.
3. The component displays the remaining character allowance.
4. A warning message appears when the input length exceeds the limit and disappears when the character count is within the limit.

Optional Stretch:
Render a "Submit" button that is disabled whenever the input is empty or exceeds the character limit.

==================================================
REFLECTION
==================================================

What I learned:
- I'm getting the hang of the event handler pattern

What I struggled with:
- I tried creating a separate function for checking the limit when I could've used JSX for conditional rendering

What I figured out without AI:
- I suppose the challenge, and that I can use JSX expression to use conditional rendering for the warning instead of creating a custom function and invoking it somewhere.

What I would do differently next time:
- Clarifying the requirements probably helped a lot so I'd like to spend more time understanding the requirements before implementing.

Important insight:
- I'm starting to think more in a React way by by utilziing JSX and built-in functions where previously I wasn't aware or I've forgotten how to apply.
*/