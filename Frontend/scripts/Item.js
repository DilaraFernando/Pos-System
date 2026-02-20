lucide.createIcons();

// Items data (demo –  backend  replace )
const items = [
    { code: "1001", name: "Teacup", price: 250.00, qty: 45 },
    { code: "1002", name: "Plate", price: 400.00, qty: 30 }
];

// Table load  function (Items page )
function loadItems() {
    const tbody = document.getElementById('itemTableBody');
    if (!tbody) return; // Customers page   skip

    tbody.innerHTML = '';

    items.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
      <td>${item.code}</td>
      <td>${item.name}</td>
      <td>${item.price.toFixed(2)}</td>
      <td>${item.qty}</td>
      <td class="actions-cell">
        <button class="edit-btn" title="Edit"><i data-lucide="pencil"></i></button>
        <button class="delete-btn" title="Delete"><i data-lucide="trash-2"></i></button>
      </td>
    `;
        tbody.appendChild(row);
    });
}

// Modal handling (New Item)
const itemModal = document.getElementById('newItemModal');
const newItemBtn = document.getElementById('newItemBtn');
const closeItemModal = document.getElementById('closeModal');
const cancelItemBtn = document.getElementById('cancelBtn');
const itemForm = document.getElementById('newItemForm');

if (newItemBtn) {
    newItemBtn.addEventListener('click', () => {
        itemModal.style.display = 'flex';
    });
}

if (closeItemModal) {
    closeItemModal.addEventListener('click', () => {
        itemModal.style.display = 'none';
    });
}

if (cancelItemBtn) {
    cancelItemBtn.addEventListener('click', () => {
        itemModal.style.display = 'none';
    });
}

window.addEventListener('click', (e) => {
    if (e.target === itemModal) {
        itemModal.style.display = 'none';
    }
});

// Form submit (demo only)
if (itemForm) {
    itemForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('New Item successfully! (Demo mode)');
        itemModal.style.display = 'none';
        itemForm.reset();

    });
}


document.addEventListener('DOMContentLoaded', () => {
    loadItems();
});