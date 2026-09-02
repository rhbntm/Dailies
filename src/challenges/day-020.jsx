/*
import { isValidElement } from "react";
import { useState } from "react";

function OrderingComponent() {
  const [passQty, setPassQty] = useState("");
  const [catalog, setCatalog] = useState("General Admission");
  const [passList, setPassList] = useState([]);

  const normalizedPassQty = Number(passQty);

  const isEmpty = passQty.trim() === "";

  const isValid = !isEmpty &&
    Number.isInteger(normalizedPassQty) &&
    normalizedPassQty >= 1 && normalizedPassQty <= 4;

  let errorMsg = "";

  if (isEmpty) {
    errorMsg = "No empty";
  } else if (!Number.isNaN(normalizedPassQty)) {
    errorMsg = "Numbers only"
  } else if (!Number.isInteger(normalizedPassQty)) {
    errorMsg = "Whole numbers only"
  }


  const catalogPrices = {
    "General Admission": 40.00,
    "VIP Access": 80.00,
    "Student Pass": 25.00
  }



  function handlePass() {
    return(console.log("Test"))
  }
  return (
    <>
      <div>
        <select name="catalogs" value={catalog} onChange={(e) => setCatalog(e.target.value)}>
          <option value="General Admission">General Admission</option>
          <option value="VIP Acess">VIP Acess</option>
          <option value="Student Pass">Student Pass</option>
        </select>
        <button
          value={passList}
          // onClick={handlePass}

        >Sex</button>

        <input
          value={passQty}
          onChange={(e) => setPassQty(e.target.value)}
        />
      </div>

      <div>
        {isValid ? errorMsg: "No"}
      </div>
    </>
  )
}

function Day020() {
  return (
    <>
      <OrderingComponent />
    </>
  )
}

export default Day020;


---
  CHALLENGE
---

Day: 20
Title: Conference Workshop Pass Manager
Type: Feature
Difficulty: 5
Estimated Implementation Time: ~25 minutes

Concepts:
* Array state management in React (adding items, merging duplicates, and removing items)
* Controlled form inputs with string-to-number normalization
* Form input validation and user feedback messages
* Dynamic array operations (`map`, `filter`, `reduce`)
* Derived state for itemized and grand total calculations
* Conditional rendering for empty vs. non-empty state displays

Why this challenge:
On Day 19, managing an array of objects in React state while coordinating input values and derived calculations proved to be an active struggle area. Deliberately practicing this pattern with a fresh surface problem allows you to reinforce how state updates flow from user input into an array of objects, how array operations manipulate that state, and how totals are derived without unnecessary stored state.

Task:
Build a workshop pass ordering component where users select pass types, specify quantities, add or merge them into a pass order list, remove individual items, and view a derived order summary with threshold-based discounts.

Requirements:

1. Pass Catalog & Pricing:
   - "General Admission": $40.00
   - "VIP Access": $80.00
   - "Student Pass": $25.00
2. Add Pass Form:
   - A dropdown select element to pick the pass type.
   - A numeric text input to enter quantity.
   - An "Add Pass" button.
3. Input & Order Validation:
   - Quantity must be a valid whole number between 1 and 4 inclusive. Display a clear error message when invalid input is provided and prevent adding to the list.
   - If the selected pass type already exists in the order list, merge/add the new quantity to the existing item's quantity rather than adding a duplicate entry.
4. Order List & Item Removal:
   - Render each added item in a list showing pass name, unit price, quantity, and line subtotal.
   - Include a "Remove" button next to each line item to delete it from the order list.
5. Order Summary (Derived State):
   - Calculate and display total count of individual passes ordered.
   - Calculate and display overall subtotal across all passes.
   - Apply a 10% discount to the subtotal if the subtotal reaches or exceeds $100.00.
   - Display the final total price after discount.
   - When the order list is empty, display a "No passes registered" message and hide the calculation summary.

Constraints:

* Store the order list as an array of objects in React state.
* Do not store line subtotals, subtotal totals, discount amounts, or grand totals in React state; derive them on render.
* Explicitly normalize DOM input strings into numbers before validating or updating state.
* Rely strictly on native HTML elements without external packages or external state management.

Acceptance Criteria:

1. Renders controlled form inputs (select dropdown, quantity input) and an "Add Pass" button.
2. Validates quantity inputs (1–4 inclusive) and displays an error message while preventing invalid additions.
3. Manages an array state for added passes: adds new pass items, updates quantity for existing items when a duplicate pass type is added, and allows removing items via a "Remove" button.
4. Correctly derives and displays total pass count, subtotal, 10% discount (if subtotal >= $100.00), and final total for non-empty orders, or displays an empty state message when no passes exist.

Optional Stretch:
Add inline "+ / -" buttons on each line item row in the order list to allow increasing or decreasing pass quantities directly, automatically removing the item if its quantity reaches 0.

---
  REFLECTION
---

Not much time for today and the upcoming days. I did hackathon webinar and presented our capstone earlier and tomorrow I'll be going to the hackathon face to face this time. I'll keep my sessions short just to be consistent. At least 30 minutes everyday until I free up some time again.
 */
