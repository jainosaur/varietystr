function showAll(){
		var imageContainer = document.querySelector('.all');
		imageContainer.style.display='block';
		var imageContainer = document.querySelector('.jeans');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.shirt');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.perf');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.sando');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.toys');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.checkout');
		imageContainer.style.display='none';
	}
	function showJeans(){
		var imageContainer = document.querySelector('.jeans');
		imageContainer.style.display='block';
		var imageContainer = document.querySelector('.all');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.shirt');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.perf');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.sando');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.toys');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.checkout');
		imageContainer.style.display='none';
	}
	function showShirt(){
		var imageContainer = document.querySelector('.shirt');
		imageContainer.style.display='block';
		var imageContainer = document.querySelector('.all');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.jeans');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.perf');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.sando');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.toys');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.checkout');
		imageContainer.style.display='none';
	}
	function showPerfume(){
		var imageContainer = document.querySelector('.perf');
		imageContainer.style.display='block';
		var imageContainer = document.querySelector('.all');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.jeans');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.shirt');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.sando');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.toys');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.checkout');
		imageContainer.style.display='none';
	}
	function showSando(){
		var imageContainer = document.querySelector('.sando');
		imageContainer.style.display='block';
		var imageContainer = document.querySelector('.all');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.jeans');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.shirt');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.perf');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.toys');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.checkout');
		imageContainer.style.display='none';
	}
	function showToys(){
		var imageContainer = document.querySelector('.toys');
		imageContainer.style.display='block';
		var imageContainer = document.querySelector('.all');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.jeans');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.shirt');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.perf');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.sando');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.checkout');
		imageContainer.style.display='none';
	}
	function showCheckout(){
		var imageContainer = document.querySelector('.checkout');
		imageContainer.style.display='block';
		var imageContainer = document.querySelector('.all');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.jeans');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.shirt');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.perf');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.sando');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.toys');
		imageContainer.style.display='none';
	}

const checkboxes = document.querySelectorAll('.checkbox');
const quantities = document.querySelectorAll('.quantity');
const totalSpan = document.getElementById('total');
let remainingStock = []; 

checkboxes.forEach((checkbox, index) => {
  checkbox.addEventListener('change', updateTotal);
  quantities[index].addEventListener('change', updateTotal);
  remainingStock.push(parseInt(checkbox.parentElement.getAttribute('data-stock')));
});

function updateTotal() {
  let total = 0;
  let outOfStock = false;
  checkboxes.forEach((checkbox, index) => {
    if (checkbox.checked) {
      const price = parseInt(checkbox.value);
      const quantity = parseInt(quantities[index].value);
      const updatedStock = remainingStock[index] - 1;
      
      if (updatedStock < 0) {
        outOfStock = true;
        checkbox.checked = false; 
        quantities[index].disabled = true;
      } else {
        total += price * quantity;
      }
      
      remainingStock[index] = Math.max(updatedStock, 0);
      checkbox.parentElement.querySelector('.stock').textContent = `Stock: ${remainingStock[index]}`;
    }
  });
  

  if (!outOfStock) {
    totalSpan.textContent = total;
  } else {
    totalSpan.textContent = 0;
  }

  if (outOfStock) {
    alert("Out of stock!");
  }
}

let originalTotal = 0; // To store the original total

function applyDiscount(discountRate) {
    // Get the current total
    let totalElement = document.getElementById('total');
    let total = parseFloat(totalElement.textContent);

    // Save the original total on the first discount application
    if (originalTotal === 0) {
        originalTotal = total;
    }

    // Calculate the discount amount
    let discountAmount = originalTotal * discountRate;

    // Subtract the discount amount from the original total
    let newTotal = originalTotal - discountAmount;

    // Update the total displayed
    totalElement.textContent = newTotal.toFixed();
}


function addToCart(button) {
  const label = button.parentElement;
  const checkbox = label.querySelector('.checkbox');
  const quantityInput = label.querySelector('.quantity');

  if (checkbox.checked) {

    alert("Item added to cart!");
  } else {
    alert("Please check the item before adding to cart.");
  }
}

function cancelOrder(button) {
  const label = button.parentElement;
  const checkbox = label.querySelector('.checkbox');
  const quantityInput = label.querySelector('.quantity');
  const stock = parseInt(label.getAttribute('data-stock')); // Get the initial stock value

  checkbox.checked = false;
  quantityInput.value = 1;
  updateTotal();

  
  label.setAttribute('data-stock', stock);
  label.querySelector('.stock').textContent = `Stock: ${stock}`;
}



function clearSelection() {
  checkboxes.forEach((checkbox, index) => {
    checkbox.checked = false;
    checkbox.parentElement.querySelector('.stock').textContent = `Stock: ${remainingStock[index]}`;
  });
  quantities.forEach((quantity) => {
    quantity.value = 1;
  });
  updateTotal();
}


