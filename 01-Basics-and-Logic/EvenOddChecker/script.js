/* Even/Odd Checker – JavaScript Demo
 *
 * This updated script now handles both:
 *   - Clicking the "Check" button.
 *   - Pressing Enter while focused on the input field.
 *
 * It uses a shared `handleParityCheck` function that calls `checkNumberParity`,
 * which returns a Promise resolving/rejecting based on even/odd.
 */

const submitBtn = document.getElementById('submitButton');
const numberInput = document.getElementById('enterValue1');

// Shared handler used by both events
function handleParityCheck() {
  checkNumberParity()
    .then((success) => alert(success))
    .catch((fail) => alert(fail));
}

// Button click
submitBtn.addEventListener('click', handleParityCheck);

// Enter key in the input field
numberInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault(); // prevent form submission or default behavior
    handleParityCheck();
  }
});

function checkNumberParity() {
  return new Promise((resolve, reject) => {
    const enteredValue = numberInput.value;
    const isEven = enteredValue % 2 === 0;
    if (isEven) {
      resolve('Value is even');
    } else {
      reject('Value is odd');
    }
  });
}
