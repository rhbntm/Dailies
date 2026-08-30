/*
import { useState } from "react";

function BookingCalculator() {
  const [duration, setDuration] = useState("");
  const [isKeycard, setIsKeyCard] = useState(false);
  const [desks, setDesks] = useState("Hot desk")

  const normalizedDuration = Number(duration);

  const isEmpty = duration.trim() === "";

  const isValid = !isEmpty &&
    Number.isInteger(normalizedDuration) &&
    normalizedDuration >= 1 &&
    normalizedDuration <= 7;

  // error handling
  let errorMsg = "";

  if (isEmpty) {
    errorMsg = "Duration must not be empty.";
  } else if (Number.isNaN(normalizedDuration)) {
    errorMsg = "Duration must contain numbers only.";
  } else if (!Number.isInteger(normalizedDuration)) {
    errorMsg = "Duration must be a whole number only.";
  } else if (normalizedDuration < 1) {
    errorMsg = "Duration must not be lower than 1 days.";
  } else if (normalizedDuration > 7) {
    errorMsg = "Duration must not be higher than 7 days."
  }

  // cost logic
  const deskPrices = {
    "Hot desk": 25,
    "Dedicated desk": 40,
    "Private office": 75
  }

  const subtotal = isValid ? normalizedDuration * deskPrices[desks] : 0;

  const keycardFee = isValid && isKeycard ? 15 : 0;
  const multipleDaysDiscount = isValid && normalizedDuration >= 5 ? 20 : 0;

  const grandtotal = subtotal + keycardFee - multipleDaysDiscount;

  function changeDesk(e) {
    setDesks(e.target.value)
  }

  return (
    <div>

      <div name="inputs">
        <label>Choose a space desk: </label>
        <select name="desk" value={desks} onChange={changeDesk}>
          <option value="Hot desk">Hot desk</option>
          <option value="Dedicated desk">Dedicated desk</option>
          <option value="Private office">Private office</option>
        </select>
        <br /> <br />
        <label>Enter booking duration: </label>
        <input
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <br /> <br />
        <label>Keycard access: </label>
        <input
          type="checkbox"
          checked={isKeycard}
          onChange={(e) => setIsKeyCard(e.target.checked)}
        />
      </div>

      <div name="renders">


      </div>

      {!isValid ?
        errorMsg :
        <div>
          <p>Duration: {duration}</p>
          <p>Selected desk: {desks}</p><br />
          <p>Tier price: {deskPrices[desks]}</p>
          <p>Subtotal price: {subtotal}</p>
          <p>Keycard fee: {keycardFee}</p>
          <p>Multiple days discount: {multipleDaysDiscount}</p>
          <p>Grand total: {grandtotal}</p>
        </div>
      }

    </div>
  )
}

function Day017() {
  return (
    <>
      <BookingCalculator />
    </>
  )
}
export default Day017;

==================================================
CHALLENGE
==================================================

Day: 17
Title: Co-Working Desk Booking Calculator
Type: Feature
Difficulty: 4
Estimated Implementation Time: ~25 minutes

Concepts:
* React controlled inputs (select dropdown, numeric input, checkbox)
* Numeric string-to-number normalization
* Boundary validation and edge-case handling (empty, non-numeric, decimals, range limits)
* Derived state and multi-rule calculation logic
* Conditional rendering for error messages and line-item details

Why this challenge:
On Day 16, you completed a single-input calculator independently with zero AI assistance and no hints. To build on that progress, this challenge steps up to Difficulty 4 by combining multiple distinct input controls (a dropdown select, a bounded numeric input, and a boolean checkbox option). It reinforces your recurring strengths in deriving state while continuing to build stability in input normalization, boundary validation, and conditional rendering.

Task:
Build a co-working space desk booking calculator that allows users to select a desk tier, specify the number of days they plan to work during the week, and optionally add 24/7 keycard access to calculate their itemized weekly cost.

Requirements:

1. Desk Tiers:
   - "Hot Desk": $25 per day
   - "Dedicated Desk": $40 per day
   - "Private Office": $75 per day
2. Booking Duration: A numeric input for the number of days booked in a single week.
3. Keycard Access: An optional checkbox adding a flat $15 fee to the booking.
4. Multi-Day Discount: Bookings of 5 or more days receive a $20 discount applied to the desk subtotal before the keycard fee is added.
5. Input Validation: The booking duration must be a valid integer between 1 and 7 inclusive. If the input is empty, non-numeric, decimal, zero, negative, or greater than 7, a descriptive error message must be displayed.
6. Display Logic: When inputs are valid, show an itemized summary (subtotal, applied discount if eligible, keycard fee if selected, and final total). When the duration input is invalid, hide the calculation summary and display the validation error message.

Constraints:

* Do not store calculated pricing values, discounts, or totals in React state; derive them on render.
* Treat input values from DOM events as strings and explicitly normalize them before performing numeric validation or pricing calculations.
* Rely on native HTML form elements without external UI or state management libraries.

Acceptance Criteria:

1. Renders interactive inputs for desk tier selection, booking duration in days, and 24/7 keycard access.
2. Correctly calculates and displays the itemized pricing summary (subtotal, keycard fee if selected, final total) for valid inputs.
3. Applies the $20 multi-day discount if and only if the booking duration is 5 or more days.
4. Validates the duration input and displays a clear error message while hiding the cost summary whenever the input is empty, non-numeric, non-integer, or outside the 1 to 7 day range.

Optional Stretch:
Add a "Community Member" checkbox that applies an additional 10% discount to the final total after all subtotal calculations, multi-day discounts, and keycard fees have been computed.

==================================================
REFLECTION
==================================================

What I learned:
- How to connect the dropdown's value to

What I struggled with:
- Connecting html dropdown values to my logic handlers? Not sure what to label them.

What I figured out without AI:
- Creating an object for the multiple desk tier options
- Connecting the object I defined to the react render component

What I would do differently next time:
-

Important insight:
- I think I need harder challenges moving forward to force myself to struggle. Struggling is a good sign that learning is occuring.

Questions I have:
-

*/
