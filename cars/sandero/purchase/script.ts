// When the DOM is fully loaded, this function is executed
document.addEventListener('DOMContentLoaded', () => {
  // Retrieve the selections stored in localStorage or an empty array if no selections exist
  const selections = JSON.parse(localStorage.getItem('selections') || '[]') as string[];
  const orderSummary = document.getElementById('orderSummary') as HTMLDivElement;

  // Extract the last selected color and rims by filtering the relevant selections
  const lastColor = selections.filter(selection => selection.includes('Color changed to:')).pop()?.split(': ')[1];
  const lastRims = selections.filter(selection => selection.includes('Rims changed to:')).pop()?.split(': ')[1];

  // If a color was selected, display it on the page
  if (lastColor) {
    const colorElement = document.createElement('p');
    colorElement.textContent = `Selected Color: ${lastColor}`;
    orderSummary.appendChild(colorElement);
  }

  // If rims were selected, display them on the page
  if (lastRims) {
    const rimsElement = document.createElement('p');
    rimsElement.textContent = `Selected Rims: ${lastRims}`;
    orderSummary.appendChild(rimsElement);
  }
});

// Function to finalize the purchase
function finalizePurchase(): void {
  // Get the values from the name, address, and card number input fields
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const address = (document.getElementById('address') as HTMLInputElement).value;
  const cardNumber = (document.getElementById('cardNumber') as HTMLInputElement).value;

  // Create a summary of the customer's information
  const confirmationDetails = `
    <p>Name: ${name}</p>
    <p>Shipping Address: ${address}</p>
    <p>Card Number: ${cardNumber}</p>
  `;

  // Display the summary in the confirmation element
  const confirmationElement = document.getElementById('confirmationDetails') as HTMLParagraphElement;
  confirmationElement.innerHTML = confirmationDetails;

  // Hide the purchase form and show the confirmation section
  (document.getElementById('purchaseForm') as HTMLFormElement).style.display = 'none';
  (document.getElementById('confirmation') as HTMLDivElement).style.display = 'block';

  // Save the customer's data in localStorage
  localStorage.setItem('purchaseData', JSON.stringify({ name, address, cardNumber }));
}

// Function to edit the purchase
function editPurchase(): void {
  // Show the purchase form and hide the confirmation section
  (document.getElementById('purchaseForm') as HTMLFormElement).style.display = 'block';
  (document.getElementById('confirmation') as HTMLDivElement).style.display = 'none';
}

// Function to confirm the final purchase
function confirmPurchase(): void {
  // Retrieve the customer data and selections from localStorage
  const purchaseData = JSON.parse(localStorage.getItem('purchaseData') || '{}');
  const selections = JSON.parse(localStorage.getItem('selections') || '[]') as string[];

  // Extract the last selected color and rims
  const lastColor = selections.filter(selection => selection.includes('Color changed to:')).pop()?.split(': ')[1];
  const lastRims = selections.filter(selection => selection.includes('Rims changed to:')).pop()?.split(': ')[1];

  // Create a confirmation message with the order details
  const confirmationMessage = `
    <h2>Thank you for your purchase!</h2>
    <p>You have purchased a Renault Sandero with the following features:</p>
    <p>Selected Color: ${lastColor}</p>
    <p>Selected Rims: ${lastRims}</p>
    <p>Name: ${purchaseData.name}</p>
    <p>Shipping Address: ${purchaseData.address}</p>
  `;

  // Display the confirmation message in the respective element
  const confirmationElement = document.getElementById('confirmationDetails') as HTMLParagraphElement;
  confirmationElement.innerHTML = confirmationMessage;

  // Hide the confirm and edit buttons
  (document.getElementById('confirmationButton') as HTMLButtonElement).style.display = 'none';
  (document.getElementById('editButton') as HTMLButtonElement).style.display = 'none';
}

// Function to load purchase data from localStorage and display it in the form
function loadPurchaseData(): void {
  const purchaseData = JSON.parse(localStorage.getItem('purchaseData') || '{}');
  
  // If there is purchase data, load it into the corresponding fields
  if (purchaseData.name) {
    (document.getElementById('name') as HTMLInputElement).value = purchaseData.name;
    (document.getElementById('address') as HTMLInputElement).value = purchaseData.address;
    (document.getElementById('cardNumber') as HTMLInputElement).value = purchaseData.cardNumber;
  }
}

// Load the purchase data if it exists when the page loads
loadPurchaseData();
