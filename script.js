// Get references to input elements and output div
const textInput = document.getElementById('text');
const delayInput = document.getElementById('delay');
const outputDiv = document.getElementById('output');
const submitButton = document.getElementById('btn');

// Function to delay execution
const delay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// Function to display text on the webpage after a delay
const displayTextWithDelay = async () => {
  // Retrieve user-provided text and delay values
  const text = textInput.value;
  const delayValue = parseInt(delayInput.value);

  // Check if text and delay are provided
  if (!text || isNaN(delayValue)) {
    outputDiv.textContent = '';
    return;
  }

  // Display loading message
  // outputDiv.textContent = 'Loading...';

  // Introduce delay before resolving the promise
  await delay(delayValue);

  // Display the user-provided text after the delay
  outputDiv.textContent = text;
	 document.getElementById('text').value = "";
 document.getElementById('delay').value = "";
};

// Event listener for submit button click
submitButton.addEventListener('click', displayTextWithDelay);
