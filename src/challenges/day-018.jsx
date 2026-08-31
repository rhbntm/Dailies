/*
import { useState } from "react";

function OrderBuilderComponent() {
  const [menu, setMenu] = useState("Coffee");
  const [days, setDays] = useState("");
  const [orderQty, setOrderQty] = useState("");
  const [orders, setOrders] = useState([]);

  const menuItems = {
    "Coffee": 4.00,
    "Sandwich": 9.00,
    "Pastry": 3.50
  }

  function addOrder() {
    let orders = {
      "Item": menuItems[menu],
      "Quantity": orderQty,
      "Subtotal": menuItems[menu] * orderQty
    }
    setOrders()
    console.log(orders)
    return orders

  }

  function addMenu(e) {
    setMenu(e.target.value)
  }

  return (
    <div>
      <div>
        <label>Menu items: </label>
        <select name="menu" value={menu} onChange={addMenu}>
          <option value="Coffee">Coffee</option>
          <option value="Sandwich">Sandwich</option>
          <option value="Pastry">Pastry</option>
        </select>
        <input
          value={orderQty}
          onChange={(e) => setOrderQty(e.target.value)}
          placeholder="Enter order quantity"
        />
        <button value={orders} onClick={() => setOrders(addOrder)}>Add item</button>

        <br />
        <label>Days: </label>
        <input
          value={days}
          onChange={(e) => setDays(e.target.value)}
          placeholder="Enter days"
        />
      </div>

      <div>
        <p>Order qty: {orderQty}</p>
        <p>Orders: {orders}</p>
        <p>Selected menu item: {menu}</p>
      </div>

    </div>
  )
}
function Day018() {
  return (
    <>
      <OrderBuilderComponent />
    </>
  )
}
export default Day018;


================================================
CHALLENGE
================================================

Day: 18
Title: Dynamic Order Builder & Cart Calculator
Type: Feature
Difficulty: 6
Estimated Implementation Time: ~25 minutes

Concepts:
* Array state management in React (adding, updating, and removing items)
* Controlled form inputs (select dropdown, numeric text input) with string-to-number normalization
* Input validation and duplicate handling
* Dynamic array operations (`map`, `filter`, `reduce`)
* Derived state and multi-item pricing logic
* Conditional rendering for empty list states and itemized summaries

Why this challenge:
Days 13 through 17 focused on single-item scalar forms and state derivation. To challenge your problem-solving and push into higher complexity, Day 18 introduces working with **array state**—managing a dynamic list of items where users can add items, prevent or handle duplicates, remove line items, and derive aggregate totals across multiple cart items using standard array methods.

Task:
Build an order builder component for a cafe where users can select items, specify quantities, add them to a live order list, remove items, and view a derived order summary with automatic discount rules.

Requirements:

1. Menu Items:
   - "Coffee": $4.00
   - "Sandwich": $9.00
   - "Pastry": $3.50
2. Add Item Form:
   - A dropdown select for menu items.
   - A numeric input for quantity.
   - An "Add Item" button.
3. Input & Cart Validation:
   - Quantity must be a valid whole number between 1 and 10 inclusive. Display a clear validation error message when the input is invalid.
   - If the selected item is already present in the order list, update its quantity (or merge it) rather than creating duplicate rows.
4. Order List & Item Removal:
   - Render an itemized list showing item name, unit price, quantity, and line-item subtotal.
   - Provide a "Remove" button next to each line item to delete it from the order list.
5. Order Summary (Derived State):
   - Display the total count of individual items.
   - Calculate the overall order subtotal across all items.
   - Apply a 10% discount to the order if the subtotal reaches or exceeds $30.00.
   - Display the final grand total.
   - When the order list is empty, display a "No items in order" message and hide the calculation summary.

Constraints:

* Do not store line subtotals, item totals, or grand totals in React state; derive them on render from the order list array.
* Store the order list as an array of objects in React state.
* Explicitly normalize DOM input strings into numbers before validating or calculating.
* Rely on native HTML elements without external state management or UI packages.

Acceptance Criteria:

1. Renders controlled form inputs (dropdown select, quantity input) and an "Add Item" button.
2. Validates quantity inputs (1–10 inclusive) and displays an error message while preventing invalid additions.
3. Adds items to an order list state array (updating quantity if the item already exists in the list) and allows deleting individual items via a "Remove" button.
4. Correctly derives and displays total item count, overall subtotal, 10% discount (if subtotal >= $30), and final grand total for non-empty orders, or an empty state message when no items exist.

Optional Stretch:
Add inline "+ / -" buttons on each line item row in the order list to allow increasing or decreasing item quantities directly, automatically removing the item if its quantity reaches 0.

================================================
REFLECTION
================================================

What I learned:
- How to think about the flow from controlled inputs → state → function → calculated object.
- I was introduced to the idea that this challenge requires thinking about arrays of objects rather than just individual scalar values.

What I struggled with:
- Understanding the relationship between the dropdown's selected value and the menuItems object containing the prices.
- Figuring out how to connect the button click to the addOrder function.
- Understanding how to take the order object I successfully created and actually store it inside the orders array state.
- I haven't yet figured out the array operations needed for removing specific items or handling duplicate items.
- The jump from managing individual pieces of state to managing an array of objects was significantly more difficult than the previous challenges and that's exactly what I need I feel great.

What I figured out without AI:
- I identified that my dropdown was returning the price because I was using the price lookup when updating the menu state.
- I corrected the dropdown logic so that menu stores the selected menu item's name.
- I figured out that onClick is the appropriate event for the "Add Item" button.
- I successfully got the basic order object to calculate correctly:

What I would do differently next time:
- I would spend less time trying to make the entire feature work at once and break the array-state problem into smaller pieces.
- When I get stuck on an unfamiliar array operation, I would research the relevant JavaScript array methods instead of trying to remember one from memory. - I would continue prioritizing the underlying logic before adding validation, normalization, and other requirements.

Important insight:
- Getting stuck is currently more valuable to me than simply completing the acceptance criteria. This challenge exposed a new level of difficulty because I am moving from scalar state to collections of objects. I want to encounter these situations where I don't immediately know the implementation, then reason through them, research when necessary, and gradually build the solution myself.

Questions I have:
- How should I structure the orders array so that each item contains everything needed for the order list and calculations?
- How do I add a new object to an existing React state array without losing the existing items?
- Which array method should I use when I need to remove a specific item rather than simply removing the last item aka pop()?
- How should I approach updating an existing order when the user adds the same menu item again?
*/
