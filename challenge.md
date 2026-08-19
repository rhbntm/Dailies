# Placeholder for daily challenges

This file contains the active challenge for the current session.

Historical challenge records live in `src/challenges/`.
Structured progression data lives in `practice-log.json`.

---

Listed directory Dailies
Viewed practice-log.json:1-259

---

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

---

**Constraints:**

* Use React functional components.
* Do not use any external libraries for filtering logic.
* The filtering must be derived from state, not stored as a separate filtered array in state.
* Use object destructuring where applicable.

---

**Acceptance Criteria:**

1. The text input is a controlled input — its value is tracked in component state.
2. The displayed list reflects the filter in real time as the user types.
3. Filtering is case-insensitive and matches partial names (e.g. typing `an` shows `Hannah`).
4. When the input is cleared, all names reappear.
5. When no names match, the text `No results found.` is displayed instead of the list.

---

**Optional Stretch:**

Add a second component, `NameItem`, that receives a single name as a prop and renders it. Refactor the list rendering to use `NameItem` instead of rendering the names inline.
