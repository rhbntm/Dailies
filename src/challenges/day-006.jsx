/*
import { useState } from "react";

function Day006() {
  const [inputName, setName] = useState("");
  const names = [
    "Alice",
    "Bob",
    "Charlie",
    "Diana",
    "Ethan",
    "Fiona",
    "George",
    "Hannah",
  ];

  function filterName(event) {
    if event.target.value ==
  }



  return (
    <div>
      <input
        value={inputName}
        placeholder="Enter name"
        onChange={handleChange}
      />
      <p>{inputName === "" ? names: inputName }</p>
    </div>
  );
}
export default Day006;

==================================================
CHALLENGE
==================================================
**Day:** 6
**Title:** Filterable Name List
**Type:** Feature
**Difficulty:** 3
**Estimated Implementation Time:** ~25 minutes

---

**Concepts:**

* React controlled inputs
* `useState`
* Event handling
* Derived state (filtering)
* List rendering
* Props and component composition
* Object destructuring

---

**Why this challenge:**

Day 5 showed that controlled inputs remain unstable — you reached for `input.value` without a reference to the element, and confused the event handler parameter with component state. This is a direct repetition weakness.

Days 2–5 all confirm that relational reasoning between inputs, state, handlers, and rendered output is the core recurring gap. This challenge surfaces that exact relationship in a slightly different form: instead of using an input to update a displayed name, you use an input to filter a displayed list. The underlying skill — wiring an input's value through state into a downstream output — is the same.

Derived state (filtering) appeared in Day 3's reinforce list and was not solidified. It now appears alongside controlled inputs, which gives you two concepts to integrate relationally rather than in isolation.

---

**Task:**

Build a filterable name list. The user can type into a text input to filter which names are displayed. The displayed list updates live as the user types.

You will be given the following static list of names to use as your data source. Do not hardcode the filtered results. The filtering must be computed from this array:

```js
["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona", "George", "Hannah"]
```

The filter should match any name that **contains** the typed text, and it must be **case-insensitive**.

---

**Requirements:**

1. Render a text input that the user can type into.
2. Render a list of names that updates in real time as the user types.
3. When the input is empty, all names are displayed.
4. The filter is case-insensitive and matches any name containing the typed characters.
5. If no names match, display the message: `No results found.`
==================================================
REFLECTION
==================================================

What I learned:
-Controlled inputs need an initial value of the appropriate type, using useState() without an initial value caused an uncontrolled -> controlled warning in the browser.
-The input's state represents the user's filter text, not necessarily something that needs to be rendered directly.
-includes() can determine whether a name contains the user's search text.

What I struggled with:
-Translating the filtering requirement into a concrete algorithm.
-Initially overcomplicating the problem by thinking about iterating through individual characters.
-Keeping track of the challenge's requirements while focusing heavily on figuring out the filtering mechanism.
-Connecting the event handler, input state, filtering logic, and rendered output.

What I figured out without AI
-That the filtering should involve checking each name against the input text.
That the boolean result should determine whether the current name is retained.

What I would do differently next time:
-Re-read the acceptance criteria when I become stuck instead of continuing to reason from memory.
-Start from the required data flow before exploring alternative implementations.
-Avoid decomposing a problem into lower-level operations when JavaScript likely already provides an abstraction for it.

Important insight:
-The main difficulty was not understanding the desired filtering relationship once it was identified, it was translating that relationship into implementation while maintaining awareness of the full requirements.
*/
