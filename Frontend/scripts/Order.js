// lucide icons initialize
lucide.createIcons();

let cart = [];
let subtotal = 0;

// Add item to cart
document.getElementById('addItemBtn').addEventListener('click', function() {
    const itemSelect = document.getElementById('itemSelect');
    const qtyInput = document.getElementById('qty');

    if (!itemSelect.value || qtyInput.value < 1) {
        alert(' Item Quantity ');
        return;
    }

    const selectedOption = itemSelect.options[itemSelect.selectedIndex];
    const name = selectedOption.text.split(' - ')[0];
    const price = parseFloat(selectedOption.value);
    const qty = parseInt(qtyInput.value);

    const item = {
        name: name,
        price: price,
        qty: qty,
        subtotal: price * qty
    };

    cart.push(item);
    updateCart();

    // reset inputs
    itemSelect.selectedIndex = 0;
    qtyInput.value = 1;
});

// Cart update  function
function updateCart() {
    const tbody = document.getElementById('cartBody');
    tbody.innerHTML = '';

    if (cart.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" class="empty-cart">No items added</td></tr>';
    } else {
        cart.forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
        <td>${item.name}</td>
        <td>${item.price.toLocaleString('si-LK')}</td>
        <td>${item.qty}</td>
        <td>${item.subtotal.toLocaleString('si-LK')}</td>
      `;
            tbody.appendChild(tr);
        });
    }

    // totals calculate
    subtotal = cart.reduce((sum, item) => sum + item.subtotal, 0);
    document.getElementById('subtotal').textContent = subtotal.toLocaleString('si-LK', { minimumFractionDigits: 2 });
    document.getElementById('grandTotal').textContent = subtotal.toLocaleString('si-LK', { minimumFractionDigits: 2 });
}

// Clear button  (optional - full clear)
document.querySelector('.btn-outline').addEventListener('click', function() {
    if (confirm('Cart  clear ?')) {
        cart = [];
        updateCart();
    }
});