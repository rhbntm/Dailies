/*

import { useState } from "react";

function EquipmentRentalCalculator() {
  const [rental, setRental] = useState("")
  const [isChecked, setIsChecked] = useState(false);
  // validation
  const rentalNumber = Number(rental);
  const isEmpty = rental.trim() === "";
  const isValid = rental.trim() !== "" && Number.isInteger(rentalNumber)
  // price calculation
  const baseCost = 30
  const discount = 0.15
  const expressSurcharge = 15
  const subtotal = rental * baseCost

  // event handlers
  function handleRental(e) {
    setRental(e.target.value)
  }
  function handleExpress(e) {
    setIsChecked(e.target.checked)
  }


  return (
    <div>
      // input
      <div>
        <input
          value={rental}
          onChange={handleRental}
          placeholder="Enter rental"
        />
        <input
          type="checkbox"
          onChange={handleExpress}
          checked={isChecked}
        />

        {!isEmpty && !isValid && (
          <p>No characters allowed. Please type a number.</p>
        )}
      </div>
      // Breakdwon summary
      <div>
        <p>Base cost: {baseCost}</p>
        <p>Discount amount: {rental >= 5 ? subtotal * discount : 0}</p>
        <p>Subtotal fee: {subtotal}</p>
        <p>Surcharge amount: {isChecked ? expressSurcharge: 0 }</p>
        <p>Final fee: { rental >= 5? subtotal * discount: 0 }</p>
      </div>

    </div>
  )
}
function Day013() {
  return (
    <div>
      <EquipmentRentalCalculator />
    </div>
  )
}

export default Day013;

==================================================
CHALLENGE
==================================================

I will inspect `practice-log.json` to understand your practice history and determine the right challenge for today.

Day: 13
Title: Equipment Rental Calculator
Type: Feature
Difficulty: 3
Estimated Implementation Time: ~25 minutes

Concepts:

* React controlled inputs
* Numeric string-to-number normalization
* Input validation (empty, non-numeric, non-positive values)
* Derived calculations
* Conditional rendering and error messaging

Why this challenge:
Your practice history shows strong progress in using React state as the single source of truth and deriving values without redundant state. However, numeric input normalization (handling empty strings, invalid inputs, and negative or zero values) and combining conditional pricing adjustments remain key areas to reinforce. This challenge applies those core concepts in a new scenario (equipment rental pricing) to help build consistent habits around normalizing user inputs before calculating derived UI values.

Task:
Build an Equipment Rental Calculator component that allows a user to specify the number of rental days and optional express delivery, then presents a breakdown of the total cost.

Requirements:

1. Provide a controlled numeric input for the number of rental days and a checkbox for express delivery.
2. Normalize and validate the rental days input, properly handling empty inputs, non-numeric values, and values less than 1.
3. Calculate all pricing figures dynamically as derived values:
   * Base cost: $30 per day.
   * Long-term discount: If rental days is 5 or more, apply a 15% discount to the base cost.
   * Express delivery surcharge: If express delivery is selected, add a flat $15 fee.
4. Display a clear validation error message when the input is empty, non-numeric, or less than 1.
5. Display the breakdown summary (base cost, discount amount, express fee, and final total) when valid input is provided.

Constraints:

* Do not store calculated pricing values (base cost, discount, express fee, total) in React state; derive them during render.
* Do not use external libraries or state management libraries.

Acceptance Criteria:

1. Changing the rental days or express delivery selection updates component state and updates all derived cost values immediately.
2. Entering an empty input, non-numeric value, 0, or a negative number displays a validation error message and suppresses the cost breakdown.
3. For valid inputs of 5 or more days, a 15% discount is correctly calculated on the base cost and subtracted in the total calculation.
4. Selecting express delivery adds the $15 flat surcharge to the final calculated total.

Optional Stretch:
Add an "Equipment Type" option (e.g. Standard at $30/day vs Pro at $50/day) that dynamically updates the daily rate used across all calculations.

==================================================
REFLECTION
==================================================

What I learned:
-I know Ternary can be used for conditional rendering, but today I learned it can be done with &&.


What I struggled with:
-Understanding the difference between the ternary operator and && for conditional rendering.
-How and when to apply && for conditional rendering

What I figured out without AI:
-Almost all of the validation criteria

What I would do differently next time:
-

Important insight:
-I was procrastinating throughout the day doing this supposed "morning" daily coding challenge. Instead, I did the challenge at 7PM. I might benefit from doing/implementing first then thinking/planning later. Hence why I just dove straight into the challenge for today without having a timer for the planning/priming/outlining phase.


Questions I have:
-How should I validate different types of input, such as decimals, negative numbers, and text?
-When should I use && versus a ternary for conditional rendering?

 */
