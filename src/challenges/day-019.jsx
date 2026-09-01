/*
import { useState } from "react";


function EquipmentCalculator() {
  const [equipment, setEquipment] = useState("Projector");
  const [quantity, setQuantity] = useState("0")
  const equipmentLists = [];

  // validation

  const normalizedQuantity = Number(quantity);
  const isEmpty = quantity.trim() === "";

  const isValid = !isEmpty &&
    Number.isInteger(normalizedQuantity) &&
    normalizedQuantity <= 5 && normalizedQuantity >= 1;

  let errorMsg = "";

  if (isEmpty) {
    errorMsg = "Enter a number";
  } else if (Number.isNaN(normalizedQuantity)) {
    errorMsg = "Quantity must be a number"
  } else if (!Number.isInteger(normalizedQuantity)) {
    errorMsg = "Quantity must be a whole number."
  } else if (normalizedQuantity < 1 && normalizedQuantity > 5) {
    errorMsg = "Quantity must be between 1-5 only."
  }

  const equipmentPrices = {
    "Projector": 50.00,
    "Speaker": 30.00,
    "Microphone": 15.00
  }



  function handleEquipment(equipmentLists) {
    console.log(equipmentLists)
    equipmentLists = {
      "equipment": equipmentPrices[equipment],
      "quantity": quantity,
      "subototal": equipmentPrices * quantity
    }
    return equipmentLists
  }

  return (
    <>
      <div>
        <select name="equipment" value={equipment} onChange={setEquipment}>
          <option value="Projector">Projector</option>
          <option value="Speaker">Speaker</option>
          <option value="Microphone">Microphone</option>
        </select>
        <button
          onClick={handleEquipment}
        >Add equipment</button>

        <input
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>


    </>
  )
}

function Day019() {
  return (
    <>
      <EquipmentCalculator />
    </>
  )
}

export default Day019;

================================================
CHALLENGE
================================================

Day: 19
Title: Equipment Rental Builder & Total Calculator
Type: Feature
Difficulty: 6
Estimated Implementation Time: ~25 minutes

Concepts:
* Array state management in React (adding, updating, and removing items)
* Controlled form inputs (select dropdown, numeric text input) with string-to-number normalization
* Input validation and duplicate item handling in array state
* Dynamic array operations (`map`, `filter`, `reduce`)
* Derived state and multi-item pricing logic
* Conditional rendering for empty list states vs. itemized summaries

Why this challenge:
On Day 18, you began transitioning from scalar state to managing an array of objects in React state. Because working with collections of objects, handling duplicate updates, deleting items with `filter`, and deriving summary totals are crucial full-stack React skills, Day 19 reinforces these exact core concepts with a fresh surface problem to help consolidate your mental model and relational reasoning.

Task:
Build an equipment rental calculator component where users select equipment items, specify rental quantities, add them to a live rental list, remove items, and view a derived summary with automatic volume discount rules.

Requirements:

1. Equipment Catalog & Prices:
   - "Projector": $50.00
   - "Speaker": $30.00
   - "Microphone": $15.00
2. Add Equipment Form:
   - A dropdown select for equipment items.
   - A numeric input for quantity.
   - An "Add Equipment" button.
3. Input & Cart Validation:
   - Quantity must be a valid whole number between 1 and 5 inclusive. Display a clear validation error message when the input is invalid.
   - If the selected item is already present in the equipment list, update its quantity (merge it) rather than creating duplicate rows.
4. Rental List & Item Removal:
   - Render an itemized list displaying item name, unit price, quantity, and line-item subtotal.
   - Provide a "Remove" button next to each line item to delete it from the equipment list.
5. Order Summary (Derived State):
   - Display the total count of individual items rented.
   - Calculate the overall subtotal across all items.
   - Apply a 15% discount to the subtotal if the subtotal reaches or exceeds $100.00.
   - Display the final grand total.
   - When the equipment list is empty, display a "No equipment added" message and hide the calculation summary.

Constraints:

* Do not store line subtotals, item totals, or grand totals in React state; derive them on render from the equipment list array.
* Store the equipment list as an array of objects in React state.
* Explicitly normalize DOM input strings into numbers before validating or calculating.
* Rely on native HTML elements without external state management or UI packages.

Acceptance Criteria:

1. Renders controlled form inputs (dropdown select, quantity input) and an "Add Equipment" button.
2. Validates quantity inputs (1–5 inclusive) and displays an error message while preventing invalid additions.
3. Adds items to an equipment list state array (updating quantity if the item already exists in the list) and allows deleting individual line items via a "Remove" button.
4. Correctly derives and displays total item count, overall subtotal, 15% discount (if subtotal >= $100.00), and final grand total for non-empty lists, or an empty state message when no items exist.

Optional Stretch:
Add inline "+ / -" buttons on each line item row in the equipment list to allow increasing or decreasing item quantities directly, automatically removing the item if its quantity reaches 0.

================================================
REFLECTION
================================================

What I learned:
- I started learning how array state differs from managing individual scalar values in React.
- I practiced connecting controlled inputs, string-to-number normalization, and validation before attempting to update application data.

What I struggled with:
- Understanding how to manage and update an array of objects in React state.
- Connecting the selected equipment, its price, quantity, and the equipment list together.
- Maintaining focus and reasoning through a more difficult challenge because I was mentally tired and sleepy.

What I figured out without AI:
-

What I would do differently next time:
- Attempt a difficult challenge when I am more mentally rested and able to focus.
- Focus first on understanding the relationship between existing state, a user action, and the new state.

Important insight:
- My main difficulty is increasingly becoming relational reasoning: understanding how different pieces of data connect together.
- For this challenge, the important mental model is understanding the flow from form inputs → validation → updating an array of objects → deriving values from that array → rendering the result.

Questions I have:
- How can I build a stronger mental model for updating arrays of objects in React?
- How do I better distinguish between data that should be stored in state and data that should be derived from state?
- How can I improve my ability to reason through the relationships between multiple pieces of data before I start implementing?
*/
