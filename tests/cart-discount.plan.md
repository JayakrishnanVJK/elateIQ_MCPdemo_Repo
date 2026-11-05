# Discount code below minimum cart value

## Application Overview

Verify that SAVE10 cannot be applied when the cart value is below the minimum eligible amount of Rs 500, and that the cart total remains unchanged.

## Test Scenarios

### 1. Discount code minimum cart value validation

**Seed:** `tests/cart.spec.ts`

#### 1.1. negative: Rs 499 rejects SAVE10 without changing the total

**File:** `tests/cart.spec.ts`

**Steps:**
  1. Start from a fresh cart page at /cart with no prior discount application.
    - expect: The cart page is displayed and the cart value field is available.
  2. Set the Cart value (Rs) field to 499.
    - expect: The cart value is displayed as Rs 499.
  3. Enter SAVE10 in the Discount code field.
    - expect: The discount code field contains SAVE10.
  4. Click Apply code.
    - expect: The status message reads exactly: Add items worth Rs 500 or more to use this code.
    - expect: The discount is not applied.
    - expect: The total to pay remains Rs 499.
    - expect: No Rs 100 discount is shown.
