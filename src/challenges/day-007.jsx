/*
import { useState } from "react"

export default function Day007() {
  const [password, setPassword] = useState("");
  const passwordStrength = 0;
// first approach(wrong)
  // // check for strong password
  // function passwordChecker() {
  //   if (password.length >= 8) {
  //     passwordStrength += 1
  //   }
  //   if (password.test()) {
  //     passwordStrength += 1
  //   }
  //   return
  // }

  function handleChange(event) {
    setPassword(() => password.event.value.target)
    return
  }


    return (
      <div>
        <input placeholder="Type password" type="password" value={password} onChange={handleChange}></input>
        <p>{passwordStrength <= 1 ? "Weak" : passwordStrength <= 3 ? "Medium" : "Strong"} Password</p>


        <button >Submit</button>
      </div>
  )
  }
}

==================================================
CHALLENGE
==================================================

**Day:** 7
**Title:** Password Strength Meter
**Type:** Feature
**Difficulty:** 3
**Estimated Implementation Time:** ~25 minutes

**Concepts:**
- React functional components
- useState (controlled input)
- Controlled input (single textarea/input)
- Event handlers (onChange)
- Derived state (multiple computed values from one input)
- Conditional rendering (strength indicator, requirement checklist)
- String methods (length, regex/test, character classification)
- Object destructuring (optional, for requirement checks)

---

### Why this challenge:

Your last two sessions (Day 5: Dynamic Welcome Message, Day 6: Filterable Name List) both scored 0/5 on acceptance criteria while practicing controlled inputs and derived state. The recurring weakness is **relational reasoning**—connecting input → state → derived values → multiple downstream UI elements. This challenge isolates that exact pattern: one controlled input feeding *multiple* derived states (strength level, individual requirement checks, visual indicators) that all update in real time. It varies the surface problem (password strength vs. welcome message vs. name filter) while keeping the core unstable relational chain consistent.

---

### Task:

Build a password input with a real-time strength meter and requirement checklist.

---

### Requirements:

1. **Single controlled password input** (type="password") tied to React state
2. **Four requirement checks** (derived from input value, not stored in state):
   - Minimum 8 characters
   - Contains at least one uppercase letter
   - Contains at least one number
   - Contains at least one special character (!@#$%^&*)
3. **Strength level** (derived): Weak / Medium / Strong based on how many requirements pass
   - 0-1: Weak
   - 2-3: Medium
   - 4: Strong
4. **Visual requirement checklist**: Show all four requirements with a ✓/✗ indicator that updates as the user types
5. **Strength indicator**: Text label (Weak/Medium/Strong) with color coding (red/yellow/green)
6. **Submit button**: Disabled until strength is "Strong"

---

### Constraints:

- Use functional components only
- Use `useState` for the password input value only
- All requirement checks and strength level must be **derived during render** (computed from the input value), not stored in separate state
- Do not use external libraries for validation or strength calculation
- Keep all logic in one file (`PasswordStrengthMeter.jsx`)

---

### Acceptance Criteria:

1. Password input updates state on every keystroke (controlled input works)
2. All four requirement checks display and update in real time as the user types
3. Each requirement shows a visual pass/fail indicator (✓/✗ or similar)
4. Strength level (Weak/Medium/Strong) updates in real time and matches the requirement count
5. Strength label has distinct color coding for each level
6. Submit button is disabled until all four requirements pass (Strong)

---

### Optional Stretch:

Add a "Show/Hide Password" toggle button that switches the input between `type="password"` and `type="text"` without losing the current value or breaking the real-time feedback.

==================================================
REFLECTION
==================================================

What I learned:
-Regex can be used to check whether a string contains certain character types, such as uppercase letters, numbers, and special characters.
-React state updates trigger a re-render, where derived values can be recalculated from the updated state.

What I struggled with:

 Understanding how to use regex and .test() correctly.
 Translating the four password requirements into individual boolean checks.
 Connecting the four requirement checks into a single strength value.
 Understanding the exact structure of the event object when getting the input value.
 Initially trying to calculate and mutate passwordStrength inside the event handler instead of deriving it from state.

What I figured out without AI:
-None 

What I would do differently next time:
-Spend more time planning the data flow before writing the implementation.
-Break the problem into the four individual requirement checks before thinking about the final strength calculation.
-Research and practice regex separately before trying to incorporate it into a larger React problem.
-Write down what each variable represents before deciding whether it should be state or a derived value.

Important insight:
-I can understand individual concepts like useState, controlled inputs, regex, and derived state, but I still struggle to connect multiple concepts into one working data flow. The important pattern I need to practice is input → state → derived values → UI.
-Today's performance was relatively weaker compared to other days but it happens. Keep going.
*/
