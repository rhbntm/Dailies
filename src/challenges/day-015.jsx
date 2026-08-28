/*
import { useState } from "react";

function WorkshopRegistration() {
  const [attendees, setAttendees] = useState("")
  const [isEarly, setIsEarly] = useState(false)

  const normalizedAttendees = Number(attendees)


  const isEmpty = attendees.trim() === ""

  const isValid = !isEmpty &&
    Number.isInteger(normalizedAttendees) &&
    normalizedAttendees >= 1

  let errorMessage = ""

  if (isEmpty) {
    errorMessage = "Attendees must not be empty"
  } else if (!Number.isInteger(normalizedAttendees)) {
    errorMessage = "Attendees must be a number"
  } else if (normalizedAttendees < 1) {
    errorMessage = "Attendees must be greater than 0"
  }


  const baseFee = 50
  const subTotal = isValid ? normalizedAttendees * baseFee : 0
  const earlyDiscount = isValid && isEarly ? 15 : 0
  const isFiveAbove = isValid && normalizedAttendees >= 5 ? subTotal * 0.10 : 0
  const finalTotal = isValid && subTotal - isFiveAbove -  earlyDiscount

  return (
    <div>
      <input
        value={attendees}
        onChange={(e) => setAttendees(e.target.value)}
        placeholder="Enter attendees"
      />
      <input
        type="checkbox"
        checked={isEarly}
        onChange={(e) => setIsEarly(e.target.checked)}
      />


      {isValid ? (
        <div>
          <p>Sub total: {subTotal}</p>
          <p>Final total: {finalTotal}</p>
          <p>Early bird discount amount: {earlyDiscount}</p>
          {attendees >= 5 ? "10% discount applied" : ""}
          {attendees >= 5 &&
            <p>You saved {isFiveAbove}$ from the 10% discount</p>
          }
        </div>
      ) : <p>{errorMessage}</p>
      }
    </div>
  )
}

function Day015() {
  return (
    <>
      <WorkshopRegistration />
    </>
  )
}
export default Day015;


---
  CHALLENGE
---

I will locate and read `practice-log.json` to analyze your recent practice history and determine the right focus for today's challenge.

I will now read `practice-log.json` to inspect your past session performance, difficulty levels, concepts, and strengths/weaknesses.

I will read the most recent sessions in `practice-log.json` to inspect recent performance and recommendations.

Day: 15
Title: Workshop Registration Fee Calculator
Type: Feature
Difficulty: 3
Estimated Implementation Time: ~25 minutes

Concepts:
* React controlled inputs
* Numeric string-to-number normalization
* Input validation (empty, non-numeric, boundary conditions)
* Derived state and calculations
* Conditional rendering for UI error messages

Why this challenge:
Recent sessions show strong progress in using React state for inputs and deriving calculated values. However, numeric input normalization, handling empty/invalid input states, and conditional messaging remain unstable and benefit from deliberate repetition in a new domain.

Task:
Build a React component that calculates total workshop registration fees based on the number of attendees and an optional early-bird discount toggle. The component must validate inputs, handle edge cases, derive pricing totals, and conditionally present messages or fee breakdowns.

Requirements:
1. Provide a controlled text or numeric input for entering the number of attendees (base fee is $50 per attendee).
2. Provide a controlled checkbox input for applying an early-bird discount ($15 flat discount off the subtotal).
3. If the attendee count is 5 or more, apply a 10% group discount to the subtotal (calculated before subtracting any early-bird discount). The total fee cannot fall below $0.
4. Validate the attendee input. Valid input must be an integer greater than 0. If the input is empty, zero, negative, or non-numeric, display a clear error message and suppress the pricing output.
5. All calculations (subtotal, discounts, final total) must be derived during render rather than stored in React state.

Constraints:
* Do not store calculated values (subtotal, discount amounts, final total) in React state.
* Do not use external calculation or UI libraries.
* Gracefully handle invalid inputs (empty string, zero, negative numbers, decimals, non-numeric strings) without crashing or displaying `NaN`.

Acceptance Criteria:
1. Entering a valid positive integer updates the attendee input and displays the subtotal and final total.
2. Checking or unchecking the early-bird discount updates the final total accordingly.
3. Entering 5 or more attendees applies the 10% group discount to the derived total.
4. Entering an empty, non-numeric, zero, negative, or decimal value displays an error message and hides the cost calculation summary.

Optional Stretch:
Add an itemized discount breakdown section that displays the exact dollar amount saved from the group discount(when applicable) and the early - bird discount(when checked).


---
  REFLECTION
---

I have limited time today. I focused on learning cybersecurity earlier today and it's 10PM rn. It's late
*/
