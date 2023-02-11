import { useState } from "react";

/**
 * Challenge 2 of 5: Swap two form fields
 *
 * This form lets you enter first and last name. It also has a checkbox
 * controlling which field goes first. When you tick the checkbox, the
 * “Last name” field will appear before the “First name” field.
 *
 * It almost works, but there is a bug. If you fill in the “First name”
 * input and tick the checkbox, the text will stay in the first input (which
 * is now “Last name”). Fix it so that the input text also moves when you
 * reverse the order.
 */
export default function Index() {
  return <SwapTwoFormFields />;
}

function SwapTwoFormFields() {
  const [reverse, setReverse] = useState(false);

  let checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={function (e) {
          setReverse(e.target.checked);
        }}
      />{" "}
      Reverse order
    </label>
  );

  if (reverse) {
    return (
      <>
        <Field label="Last name" />
        <Field label="First name" />
        {checkbox}
      </>
    );
  } else {
    return (
      <>
        <Field label="First name" />
        <Field label="Last name" />
        {checkbox}
      </>
    );
  }
}

function Field() {}
