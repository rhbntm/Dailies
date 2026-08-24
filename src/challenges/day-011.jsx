/*
import { useState } from "react";

function TicketCalculator() {
  const [ticketqty, setTicketqty] = useState(0);
  const [ticketprice, setTicketprice] = useState(0);
  const subtotal = ticketqty * ticketprice
  // const final = if(ticketqty > 5) { return subtotal / 0.10 }

  function handleTicketQty(e) {
    setTicketqty(() => e.target.value)
  }
  function handleTicketPrice(e) {
    setTicketprice(() => e.target.value)
  }

  return (
    <div style={{textAlign: "center", border: "solid 3px"}}>
      <div style={{ borderBottom: "solid 3px", paddingBottom: "5px" }}>
        <h1>Inputs</h1>
        <input value={ticketqty} onChange={handleTicketQty} placeholder="Type quantity"></input>
        <input value={ticketprice} onChange={handleTicketPrice} placeholder="Type quantity"></input>
      </div>
      <div>
        <p>Ticket quantity: {ticketqty}</p>
        <p>Ticket price: {ticketprice}</p>
        <p>Subtotal: {subtotal}</p>
        <p>Final: {ticketqty > 5 ? subtotal * 0.90 : subtotal}</p>
      </div>
      <div>
        <p>Final: {ticketqty > 5 ? subtotal * 0.90 : subtotal}</p>

      </div>
    </div>
  )
}

function Day011() {
  return (
    <div>
      <TicketCalculator />
    </div>
  )
}

export default Day011;

================================================

CHALLENGE

================================================

Day: 11
Title: Event Ticket Calculator
Type: Feature
Difficulty: 3
Estimated Implementation Time: ~25 minutes

Concepts:

* React controlled numeric inputs
* useState
* Event handling
* Derived state and calculations
* Input validation and normalization
* Conditional rendering and messaging

Why this challenge:
Your previous session highlighted struggles with normalizing numeric inputs, performing derived calculations without redundant state, and handling conditional UI logic. This challenge provides targeted practice in managing numeric state, safely handling edge cases (such as empty or negative input values), calculating derived totals during render, and updating conditional status messaging.

Task:
Build an Event Ticket Calculator component in React where users can enter a ticket quantity and price per ticket to calculate order subtotal, volume discounts, and final total.

Requirements:

1. Allow the user to input both ticket quantity and price per ticket.
2. Safely parse and normalize inputs to handle empty, non-numeric, or negative values cleanly.
3. Calculate subtotal, bulk discount, and total cost dynamically based on current input values.
4. Apply a bulk discount rule when ticket quantity meets a specific threshold.
5. Display summary values and conditional feedback informing the user of their discount status.

Constraints:

* Do not store calculated values (subtotal, discount, final total) in React state or update them inside `useEffect`.
* Invalid or negative input values must not produce `NaN` or negative price displays in the UI.

Acceptance Criteria:

1. Ticket quantity and price per ticket are managed as controlled inputs using React state.
2. Subtotal, discount amount, and final total are derived directly during render from the input state.
3. Empty, negative, or invalid input values are handled gracefully so summary displays show valid default numbers (e.g. 0) without `NaN`.
4. A 10% discount is applied to the subtotal whenever the ticket quantity is 5 or more.
5. The UI conditionally displays a message indicating whether the bulk discount has been applied or how many additional tickets are needed to qualify for the discount.

Optional Stretch:
Add a checkbox toggle for a "VIP Pass" option ($15 per ticket surcharge) that recalculates totals while maintaining derived state constraints.

================================================

REFLECTION

================================================

What I learned:

 - I practiced using controlled numeric inputs with useState.
 - I reinforced the idea that calculated values like subtotal and final total should be derived during render instead of stored in state.
 - I practiced conditional calculations for applying a discount based on ticket quantity.
 - I was reminded that input values need to be normalized before using them for calculations.

What I struggled with:

- Handling empty, invalid, and negative numeric input values.
- Remembering that values from HTML inputs come through as strings.
- Getting the discount condition exactly right.
- I also spent too much of my limited time working on the CSS instead of finishing the functionality.

What I figured out without AI:

- I figured out the basic controlled input setup myself.
- I figured out how to derive the subtotal from the quantity and price state.
- I figured out how to conditionally apply the 10% discount using the subtotal.
- I was able to structure the component and get the basic calculator working without needing AI to write it for me.

What I would do differently next time:

- I would prioritize completing all functional requirements before spending time on CSS.
- I would plan the input normalization and edge cases before implementing the calculations.
- I would leave optional UI improvements until after the acceptance criteria are complete.

Important insight:

- The important pattern I need to keep reinforcing is input → state → normalized/valid value → derived calculation → UI. I understand the basic React state and derived-state relationship, but I still need more practice handling the messy values that can come from real user input.
*/
