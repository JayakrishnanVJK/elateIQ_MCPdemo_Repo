# Boundary discount eligibility at Rs 500

## Application Overview

Verify that the SAVE10 discount applies at the exact minimum cart value of Rs 500, giving Rs 50 off and reducing the payable total to Rs 450.

## Test Scenarios

### 1. Discount code minimum cart value boundary validation

**Seed:** `tests/cart.spec.ts`

#### 1.1. boundary: Rs 500 with SAVE10 gets Rs 50 off and a total of Rs 450

**File:** `tests/cart.spec.ts`

**Steps:**
  1. Start from a fresh cart page at /cart with no prior discount application.
    - expect: The cart page is displayed and the Cart value (Rs) field is available.
  2. Set the Cart value (Rs) field to 500.
    - expect: The cart value is displayed as Rs 500.
  3. Enter SAVE10 in the Discount code field.
    - expect: The Discount code field contains SAVE10.
  4. Click Apply code.
    - expect: The status message reads exactly: Code applied: Rs 50 off.
    - expect: The discount is applied successfully at the minimum eligible cart value.
    - expect: The total to pay is Rs 450.
