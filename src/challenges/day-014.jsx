/*
import { useState } from "react";


function OrderCalculatorComponent() {
  const [quantity, setQuantity] = useState("")
  const [isCustom, setIsCustom] = useState(false)
  const normalizedQuantity = Number(quantity)
  const shirtPrice = 15;

  const isEmpty = quantity.trim() === ""

  const isValid =
    !isEmpty &&
    Number.isInteger(normalizedQuantity) &&
    normalizedQuantity >= 1

  let errorMessage = "";

  if (isEmpty) {
    errorMessage = "Please enter the quantity of the t-shirt"
  } else if (!Number.isInteger(normalizedQuantity)) {
    errorMessage = "Shirt quantity must be a whole number"
  } else if (normalizedQuantity < 1) {
    errorMessage = "Shirt quantity must at least be 1"
  }

  // price calculations
  const baseAmount = isValid ? normalizedQuantity * shirtPrice : 0
  const customAmount = isValid && isCustom ? 20 : 0
  const discountAmount = isValid && normalizedQuantity >= 10 ? baseAmount * .10 : 0
  const finalAmount = isValid && discountAmount + customAmount + baseAmount

  function handleCustom(e) {
    console.log(e.target.checked)
    setIsCustom(e.target.checked)
  }
  return (
    <div>
      <div>
        <input
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Enter shirt quantity"
        />
        <label>
          <input
            type="checkbox"
            checked={isCustom}
            onChange={handleCustom}
          /> Custom print
        </label>
        {!isValid &&
          (<p style={{ color: "red" }}>
          {errorMessage}
        </p>)
        }
      </div>

      <div>
        <p>Shirt price is: {shirtPrice}</p>
        <p>Base price is: {baseAmount}</p>
        <p>Custom amount is: {customAmount}</p>
        <p>Discount amount is: {discountAmount}</p>
        <p>Final amount is: {finalAmount}</p>
        {isValid && normalizedQuantity >= 10 && (
          <p>Congratulations you are qualified for a discount!</p>
        )}
      </div>
    </div>


  )
}

function Day014() {
  return (
    <>
      <OrderCalculatorComponent />
    </>
  )
}

export default Day014;

==================================================
CHALLENGE
==================================================

I will inspect `practice-log.json` to review your practice history, current progress, and areas to reinforce before generating today's challenge.

I will now read `practice-log.json` to inspect your recent sessions and learning trajectory.

I will read the recent session entries in `practice-log.json` to understand the latest practice history.

Day: 14
Title: T-Shirt Order Calculator
Type: Feature
Difficulty: 3
Estimated Implementation Time: ~25 minutes

Concepts:

* React controlled inputs
* Numeric string-to-number normalization and validation
* Derived state and calculations
* Conditional rendering (`&&` vs. ternary)
* Validation messaging

Why this challenge:
Your recent sessions show strong progress in keeping calculated values derived rather than storing them in React state. However, input validation (handling empty, zero, negative, or non-numeric inputs) and conditional UI rendering remain key areas needing deliberate practice. This challenge provides a fresh surface task to reinforce normalizing user inputs before performing derived calculations and conditionally displaying status/error messages.

Task:
Build a T-Shirt Order Calculator component where users specify the quantity of shirts they wish to order and choose whether to add a custom back-print. The component calculates pricing based on quantity, applies a bulk discount when applicable, adds optional custom print fees, and validates user input.

Requirements:

1. Base price is $15 per shirt.
2. Custom back-print adds a flat fee of $20 to the overall order.
3. Orders of 10 or more shirts qualify for a 10% discount on the base shirt total (the custom print fee is not discounted).
4. The quantity input must be controlled via React state. A valid quantity must be a positive integer (1 or more).
5. If the quantity input is invalid (empty string, zero, negative, or non-numeric), calculations must not produce invalid outputs (such as `NaN` or negative totals) and a validation error message must be displayed.
6. Display a discount notification message when the order qualifies for the bulk discount.

Constraints:

* Do not store derived calculations (subtotal, discount, total price, or error status) in React state.
* Use React controlled components for inputs.
* Pure React (no third-party utility or UI libraries).

Acceptance Criteria:

1. Renders controlled inputs for shirt quantity and custom back-print option.
2. Calculates and displays the correct final total price for valid inputs, applying the $20 custom print fee and 10% bulk discount when ordering 10 or more shirts.
3. Displays a clear validation error message when the quantity input is invalid (empty, zero, negative, or non-numeric), preventing `NaN` or invalid totals from displaying.
4. Conditionally renders a bulk discount notification message only when the order qualifies for the discount.

Optional Stretch:
When the quantity is valid but under 10 shirts (1 to 9 shirts), conditionally render a message stating how many additional shirts are needed to unlock the 10% bulk discount.

==================================================
REFLECTION
==================================================

What I learned:
- Input normalization
- Much more readable approach of error handling

What I struggled with:
- Proper naming conventions
- Ensuring validation covers everything
- Calculation of price

What I figured out without AI:
- Most of the challenge criteria but with minimal research assistance

What I would do differently next time:
- Review the past challenges like what I did today if I'm really stuck at the same recurring problems like input validation

Important insight:
-

Questions I have:
- I wonder how the solution here will look like if I used functions

*/
