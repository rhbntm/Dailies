/*
import { useState } from "react";

function ShippingCalculator() {
  const [quantity, setQuantity] = useState(0);
  let subtotalPrice = quantity * 20;
  let finalPrice = subtotalPrice + 5;
  function handleChange(e) {
      setQuantity(() => e.target.value)
  }

  // function isFree() {
  //   finalPrice = subtotalPrice;
  // }
  return (
    <div>
      <input
        type="number"
        value={quantity}
        onChange={handleChange}
      />
      <p>Subtotal Price is: { e.target.value > 0 ? "Invalid": subtotalPrice }</p>
      <p>Shipping Fee Price is: { 5 }</p>
      <p>Total Fee Price is: { finalPrice >= 50 ? subtotalPrice: finalPrice }</p>
    </div>
  );
}

function Day010() {
  return (
    <div>
      <ShippingCalculator />
    </div>
  );
}

export default Day010;

==================================================
CHALLENGE
==================================================

Day: 10
Title: Shipping Calculator
Type: Feature
Difficulty: 3
Estimated Implementation Time: ~25 minutes

Concepts:

* React controlled inputs
* useState
* Event handling
* Derived state and calculations
* Conditional rendering

Why this challenge:
Your Day 9 practice demonstrated strong execution of controlled inputs and deriving metrics from state without creating redundant state variables. To build on that success and continue reinforcing relational reasoning (connecting input events → state → multiple dependent derived values → UI output), this challenge requires calculating several dependent metrics (subtotal, shipping fee, grand total, and free shipping status message) from a single numeric state value.

Task:
Build a Shipping Calculator component where the user enters the quantity of an item they wish to purchase. The component dynamic calculates and displays the subtotal, shipping cost, and total order cost, along with dynamic messaging indicating whether the order qualifies for free shipping.

Requirements:

1. Provide a controlled numeric input for item quantity (assuming a fixed item price, e.g., $20 per item).
2. Store the item quantity as state.
3. Derive the subtotal, shipping fee, and grand total from state on render (e.g., standard shipping is $5, but shipping is $0 if the subtotal is $50 or higher).
4. Display the calculated subtotal, shipping cost, and total price in the interface.
5. Conditionally render a message informing the user whether they qualify for free shipping or how much more money they need to add to reach the free shipping threshold.

Constraints:

* Do not store subtotal, shipping fee, grand total, or messaging in React state; derive them during render.
* Handle invalid, empty, or negative inputs gracefully (e.g., treat empty or negative input as 0 quantity without displaying `NaN`).
* Use plain React (`useState`) without external helper libraries or complex state management libraries.

Acceptance Criteria:

1. Typing in the quantity input updates the quantity state and recalculates downstream values automatically.
2. Subtotal, shipping cost, and grand total correctly reflect the item price ($20) and shipping rule ($5 standard shipping, $0 if subtotal is $50 or greater).
3. A conditional status message displays "You qualify for Free Shipping!" when the subtotal is $50 or more, and "Add $X more to get Free Shipping!" when the subtotal is under $50.
4. Clearing the input or entering invalid/negative numbers displays $0 totals and does not result in `NaN` or runtime errors.

Optional Stretch:
Add an "Express Delivery" toggle option (e.g., checkbox) that adds $10 to the shipping fee regardless of subtotal, recalculating the total dynamically.

==================================================
REFLECTION
==================================================

What I learned:
- The difference between derived state and React state.
- Derived values can be calculated during render instead of being stored as separate state.

What I struggled with:
- How to use state derivation to directly calculate the total prices.
- How to correctly use the quantity state from the input during the render phase (JSX).
- Handling invalid, empty, and negative input values.

What I figured out without AI:
- Some of the requirements in the challenge.
- How to store the input quantity in state and derive the subtotal from it.
- That the calculated prices do not need their own state.

What I would do differently next time:
- I'd say research more if I want to finish the challenge, but the fact that I'm struggling on my own is good too if I don't care about finishing the challenge and merely want to learn.
- I could spend more time breaking the requirements into smaller relationships before implementing them.

Important insight:
- Struggling to solve the challenge independently can still be valuable even when I don't finish it.
- If my goal is specifically to complete the challenge, however, I should be more willing to research the concepts I'm stuck on rather than remaining stuck indefinitely.

*/
