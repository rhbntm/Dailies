/*
import { useState } from "react";

function PasswordComponent() {
  let [isChecked, setIsChecked] = useState(false);
  let [passwordValue, setPasswordValue] = useState("")
  // handleChange is the event handler for checking the value of the checkbox: is it True or False?
  // Then it also is responsible for changing the state of the checkbox
  function handleChange(event) {
    let isChecked = event.target.checked
    setPasswordValue(event.target.value)
    setIsChecked(isChecked)
  }

  return (
    <div>
      <input type="password" placeholder="Input password" value={passwordValue}/>
    <input type="checkbox" onChange={handleChange}/>
    </div>

  )
}

export default function Day008() {
  return PasswordComponent();
}


==================================================
CHALLENGE
==================================================

Day: 8
Title: Toggleable Password Visibility
Type: Feature
Difficulty: 3
Estimated Implementation Time: ~25 minutes

Concepts:

* React controlled inputs
* `useState`
* Event handling
* Conditional rendering
* React input `type` attribute
* Relational reasoning between component state and UI elements

Why this challenge:
This challenge reinforces your understanding of controlled inputs and state management by adding an interaction layer between the password state and the UI's display logic. It addresses your recurring struggle with relational reasoning by requiring you to connect an input's attribute (which changes between 'password' and 'text') to an interaction-based state change, maintaining the data flow pattern you've been working on (input event → state update → UI re-render).

Task:
Build a password input component that includes a "Show Password" checkbox or button. Toggling the checkbox should switch the password input between displaying the password as obscured text (the default) and displaying the plain text.

Requirements:

1. The component must have a password input field.
2. The component must have a mechanism (checkbox or button) to toggle the password's visibility.
3. The password input field must switch its `type` attribute between `password` and `text` based on the toggle mechanism's state.
4. The password must remain visible or obscured as the user types, regardless of whether it is toggled on or off.

Constraints:

* Use React `useState` to manage the password string and the visibility boolean state.
* The component must be a single controlled input structure where the visibility state dictates the rendering behavior of the input field.
* Do not use external libraries.

Acceptance Criteria:

1. An input of type `password` is displayed initially.
2. The user can type into the password input.
3. Clicking the toggle mechanism switches the input's `type` to `text`, making the typed characters visible.
4. Clicking the toggle mechanism again switches the input's `type` back to `password`, obscuring the characters.

Optional Stretch:

* Add a visual indicator or label next to the toggle that changes text (e.g., "Show" to "Hide") based on the current visibility state.

==================================================
REFLECTION
==========

What I learned:

-Controlled inputs need separate state for different types of data. The checkbox visibility state is a boolean, while the password input state is a string.
-event.target refers to the element that triggered the event, so the checkbox handler's event.target.value is not the password input's value.
-JSX attributes can dynamically use JavaScript expressions, allowing the input's type to depend on the visibility state.


What I struggled with:
-Connecting the checkbox's state to the password input's type attribute.
 Understanding that the password input and checkbox need separate event handlers because they update different pieces of state.


What I figured out without AI:
-isChecked should represent whether the checkbox is checked or unchecked.
-isChecked should not be used as the password input's value because it stores a boolean rather than the password string.
-The password itself needs its own state variable.


What I would do differently next time:
-Spend more time mapping each UI element to the piece of state it controls before implementing.
-Think through which element triggers each event handler before accessing event.target.


Important insight:

React state should represent distinct pieces of information, and I need to reason about the relationship between the UI element, its event, the state it updates, and the UI property that state controls.
 */
