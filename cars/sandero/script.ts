interface ChangeRequest {
  color?: string;
  rims?: string;
}

let selections: string[] = [];
let undoStack: string[] = [];
let selectedColor: string | null = null;
let selectedRims: string | null = null;
let redoStack: string[] = [];

function changeCarColor(color: string): void {
  // Change the car image and update selections
  const carImage = document.getElementById('carImage') as HTMLImageElement;
  carImage.src = `img_sandero_${color}.jpg`;
  selections.push(`Color changed to: ${color}`);
  undoStack.push(`Color changed to: ${color}`);
  redoStack = []; // Clear the redo stack
  selectedColor = color;
  updateButtonStyles();
  checkOrderButton();
  console.log(selections);
}

function changeRims(rims: string): void {
  // Update selections with the new rims
  selections.push(`Rims changed to: ${rims}`);
  undoStack.push(`Rims changed to: ${rims}`);
  redoStack = []; // Clear the redo stack
  selectedRims = rims;
  updateButtonStyles();
  checkOrderButton();
  console.log(selections);
}

// Function to process the car order
function orderCar(): void {
  // Check if both color and rims are selected before proceeding with the order
  if (selectedColor && selectedRims) {
    // Save the selections to localStorage and redirect to the purchase page
    localStorage.setItem('selections', JSON.stringify(selections));
    window.location.href = 'purchase/purchase.html';
  } else {
    // Alert the user if either color or rims are missing
    alert('Please select both the color and rims before ordering.');
  }
}

function undoLastAction(): void {
  if (undoStack.length > 0) {
      const lastAction = undoStack.pop();
      redoStack.push(lastAction!); // Move the action to the redo stack
      selections = selections.filter(selection => selection !== lastAction);
      if (lastAction?.includes('Color changed to:')) {
          selectedColor = null;
      } else if (lastAction?.includes('Rims changed to:')) {
          selectedRims = null;
      }
      updateButtonStyles();
      checkOrderButton();
      console.log('Action undone:', lastAction);
      console.log('Current selections:', selections);
  }
}

function redoLastAction(): void {
  if (redoStack.length > 0) {
      const lastUndoneAction = redoStack.pop();
      undoStack.push(lastUndoneAction!); // Move the action back to the undo stack
      selections.push(lastUndoneAction!);
      if (lastUndoneAction?.includes('Color changed to:')) {
          selectedColor = lastUndoneAction.split(': ')[1];
      } else if (lastUndoneAction?.includes('Rims changed to:')) {
          selectedRims = lastUndoneAction.split(': ')[1];
      }
      updateButtonStyles();
      checkOrderButton();
      console.log('Action redone:', lastUndoneAction);
      console.log('Current selections:', selections);
  }
}

// Function to update the styles of the buttons (selected or not)
function updateButtonStyles(): void {
  // Update styles for color buttons
  const colorButtons = document.querySelectorAll('button[onclick^="changeCarColor"]');
  colorButtons.forEach(button => {
    const btn = button as HTMLButtonElement;
    // Highlight the button if the color matches the selected one
    if (btn.innerText.toLowerCase() === selectedColor) {
      btn.classList.add('selected');
    } else {
      btn.classList.remove('selected');
    }
  });

  // Update styles for rims buttons
  const rimsButtons = document.querySelectorAll('button[onclick^="changeRims"]');
  rimsButtons.forEach(button => {
    const btn = button as HTMLButtonElement;
    // Highlight the button if the rims match the selected ones
    if (btn.innerText.toLowerCase() === selectedRims) {
      btn.classList.add('selected');
    } else {
      btn.classList.remove('selected');
    }
  });
}

// Function to enable or disable the order button based on selections
function checkOrderButton(): void {
  const orderButton = document.getElementById('orderButton') as HTMLButtonElement;
  // Enable the button only if both color and rims are selected
  if (selectedColor && selectedRims) {
    orderButton.disabled = false;
  } else {
    orderButton.disabled = true;
  }
}

// Ensure the order button state is correct when the page loads
document.addEventListener('DOMContentLoaded', checkOrderButton);
