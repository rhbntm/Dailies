/*
import { useState } from "react";

function CostCalculator() {
  const [ticket, setTicket] = useState("");
  const [isVip, setIsVip] = useState(false);

  const normalizedTicket = Number(ticket);

  const isEmpty = ticket.trim() === "";

  const isValid = !isEmpty &&
    Number.isInteger(normalizedTicket) &&
    normalizedTicket > 0;

  let errorMsg = "";

  if (isEmpty) {
    errorMsg = "Please enter a ticket number"
  } else if (Number.isNaN(normalizedTicket)) {
    errorMsg = "Ticket number must contain numbers only."
  } else if (!Number.isInteger(normalizedTicket)) {
    errorMsg = "Ticket must be a whole number only."
  } else if (normalizedTicket < 1) {
    errorMsg = "Ticket number must not be less than 1."
  }

  const baseTicket = 25;
  const subtotalFee = isValid ? baseTicket * normalizedTicket : 0;
  const vipFee = isValid && isVip ? 15 : 0;
  const groupDiscount = isValid && normalizedTicket >= 10 ? subtotalFee * 0.10 : 0;
  const totalFee = subtotalFee + vipFee - groupDiscount
  return (
    <div>
      <input
        value={ticket}
        placeholder="Enter ticket amount"
        onChange={(e) => setTicket(e.target.value)}
      />
      <input
        type="checkbox"
        checked={isVip}
        onChange={(e) => setIsVip(e.target.checked)}
      />

      {isValid ? (
        <div>
          <p>Base ticket fee:{baseTicket}</p>
          <p>Subtotal fee:{subtotalFee}</p>
          {normalizedTicket >= 10 && <p>Discount fee: {groupDiscount}</p>}
          {isVip ? <p>Vip fee: {vipFee}</p> : ""}
          <p>Total fee: {totalFee}</p>
        </div>
      ) : <p>{errorMsg}</p>}

    </div>
  )

}

function Day016() {
  return (
    <>
      <CostCalculator />
    </>
  )
}
export default Day016;


==================================================
CHALLENGE
==================================================

I will check the repository for `practice-log.json` to review your practice history and current learning progression before generating today's challenge.

I will read `practice-log.json` to inspect your recent sessions and determine the appropriate concepts and difficulty for today.

I will read the most recent sessions from `practice-log.json` to inspect the latest day number, difficulty level, concepts practiced, and areas needing reinforcement.

Day: 16
Title: Event Ticket Cost Calculator
Type: Feature
Difficulty: 3
Estimated Implementation Time: ~25 minutes

Concepts:
* React controlled inputs
* Numeric string-to-number normalization
* Input validation and error handling
* Derived calculations
* Conditional rendering

Why this challenge:
Your practice log shows consistent strength in deriving calculated values directly from state. However, string-to-number normalization, handling edge cases during input validation, and ensuring conditional UI messaging strictly matches validation state remain areas needing reinforcement. This challenge exercises these exact patterns in a fresh domain with distinct calculation rules and boundary conditions.

Task:
Build an Event Ticket Cost Calculator component in React that lets users select a ticket quantity and toggle VIP access, rendering a dynamic pricing breakdown and total cost while properly validating user input.

Requirements:
1. Base ticket price is $25 per ticket.
2. Provide a controlled input for ticket quantity and a controlled checkbox for optional VIP access ($15 flat fee total for the booking).
3. Validate ticket quantity input: it must be a non-empty, whole positive integer (greater than 0). Empty strings, non-numeric characters, zero, negative values, and decimals are invalid.
4. When input is invalid, display a clear validation error message and hide the calculated pricing breakdown.
5. If the ticket quantity is 10 or more, apply a 10% group discount to the ticket subtotal.
6. Derive all pricing calculations (subtotal, discount amount, VIP surcharge, total) directly from state without storing calculated values in state.

Constraints:
* Do not store calculated pricing values in React state.
* Perform numeric string normalization before attempting arithmetic calculations or validation comparisons.
* Do not use external libraries.

Acceptance Criteria:
1. **Controlled State & Normalization**: Ticket quantity input is managed via React controlled state, and raw string values are normalized to numeric values prior to validation and calculation.
2. **Validation & Error Rendering**: Displays an explicit validation error message when ticket quantity is empty, non-numeric, zero, negative, or a decimal, while hiding the calculation display.
3. **Derived Calculations**: Correctly calculates subtotal ($25/ticket), group discount (10% off subtotal when quantity ≥ 10), VIP surcharge ($15 flat when checked), and final total without placing derived values into state.
4. **Conditional Display**: Displays the discount and VIP surcharge line items only when they apply, and presents the full pricing summary only when the ticket quantity input is valid.

Optional Stretch:
Add an optional "Member ID" text input field. If filled with any non-empty string, apply an additional $5 flat discount to the final total when the ticket quantity is valid.

==================================================
REFLECTION
==================================================

What I learned:
- Just practicing the pattern today

What I struggled with:
- Mostly time constraints. I basically got the pattern here.

What I figured out without AI:
- The overall pattern for this type of problem.
- The criteria

What I would do differently next time:
-

Important insight:
- I might need to change the type of problem slightly now.

Questions I have:
- How should I structure validation when a form has many different types of invalid input without creating a long chain of conditional statements?

 */
