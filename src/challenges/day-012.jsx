/*
import { useState } from "react";


function CalculatorComponent() {
  const [hoursParked, setHoursParked] = useState()
  const [isChecked, setIsChecked] = useState(false)
  const baseRate = 4
  const subtotal = baseRate * hoursParked

  function handleHours(e) {
    setHoursParked(() => e.target.value)
  }
  function handleCheckbox(e) {
    setIsChecked(() => e.target.checked)
  }
  return (
    <div>
      <input
        placeholder="Enter hours parked"
        value={hoursParked}
        onChange={handleHours}
      />
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckbox}
      />
      <p>Base rate: {baseRate}$</p>
      <p>Hours parked: {hoursParked}</p>

      <div>
        <p>Subtotal: { hoursParked >= 5 ? subtotal - 5: subtotal }$</p>
      </div>
    </div>


  )
}

function Day012() {
  return (
    <div>
      <CalculatorComponent />
    </div>
  )
}

export default Day012;



==================================================
CHALLENGE
==================================================

Day: 12
Title: Parking Fee Calculator
Type: Feature
Difficulty: 3
Estimated Implementation Time: ~25 minutes

Concepts:
* React controlled inputs
* Numeric string-to-number normalization
* Handling empty, invalid, or negative inputs
* Derived state and conditional calculations
* Conditional UI rendering

Why this challenge:
On Days 10 and 11, you demonstrated good progress using React state for inputs and deriving calculated values directly during render. However, safely normalizing string-to-number inputs from HTML form controls, handling empty/invalid numbers, and managing conditional boundary rules remain unstable. This challenge provides focused practice on numeric input normalization, edge-case validation, and boundary-safe derived calculations without producing `NaN` or invalid states.

Task:
Build a React component that calculates the total parking fee based on hours parked and an optional reserved spot surcharge.

Requirements:
1. Create a controlled numeric input for "Hours Parked".
2. Create a controlled checkbox for "Reserved Spot" (adds a flat $5 fee).
3. Parking rate structure:
   - Base rate: $4 per hour.
   - Multi-hour discount: If hours parked is 5 or more, subtract $5 from the subtotal.
   - Reserved spot surcharge: If checked, add $5 to the total.
   - Final total fee cannot drop below $0.
4. Input validation and normalization:
   - Convert string input from the HTML form control to a valid number.
   - If the input is empty, negative, or non-numeric, treat billable hours as 0 and display a helpful validation message (e.g., "Please enter a valid number of hours").
   - Ensure calculations never display `NaN` or negative monetary amounts in the UI.

Constraints:
* Do not store calculated totals, subtotals, or discounts in `useState`; derive them directly during render.
* Focus on working logic, normalization, and meeting acceptance criteria within the 25-minute implementation budget rather than CSS/styling.

Acceptance Criteria:
1. Controlled inputs: Hours input and reserved spot checkbox are controlled using React state.
2. Input normalization: Empty strings, negative values, and non-numeric inputs are safely handled so calculations never produce `NaN` or negative amounts.
3. Derived calculations: Base charge, applicable discount (if hours >= 5), reserved spot surcharge, and total fee are derived correctly during render.
4. Validation UI: Renders a clear validation message when the input is negative or non-numeric.

Optional Stretch:
Cap the total fee at a daily maximum of $30 so that the calculated total fee never exceeds $30 regardless of hours entered.

==================================================
REFLECTION
==================================================

What I learned:
- I reinforced that calculated values like the subtotal, discount, surcharge, and final total should be derived instead of stored in state.
- I practiced applying conditional calculations based on multiple independent conditions.
- I reinforced that HTML input values are strings and need to be normalized before being safely used for calculations.

What I struggled with:

- Handling the relationship between the multi-hour discount and the reserved spot surcharge.
- I initially tried to combine both conditions into nested conditional logic, which made the calculation more complicated than necessary.
- I also struggled with input normalization and validation for empty, invalid, and negative values.

What I figured out without AI:
- I figured out how to calculate the basic subtotal and apply the $5 discount when hours parked is 5 or more.
- I recognized that the reserved spot surcharge can be derived directly from the checkbox state.

What I would do differently next time:
- I would think about input normalization and validation earlier instead of starting with the calculations immediately.
- I would avoid trying to represent every possible combination of conditions with nested if/else or ternaries.

Important insight:
- Multiple calculation rules don't always need to be represented as mutually exclusive conditions. When rules are independent, I can treat each one as an adjustment to the same derived value.


*/
