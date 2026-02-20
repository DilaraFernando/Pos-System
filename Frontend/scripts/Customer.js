// script.js - Customers Page (NOW WORKING)

console.log("Customers script LOADED!");

lucide.createIcons();

let customers = [
    { id: "#1001", name: "John Doe", email: "john@example.com", phone: "+94 77 123 4567", orders: 24 },
    { id: "#1002", name: "Sara Perera", email: "sara@gmail.com", phone: "+94 71 987 6543", orders: 15 }
];

function loadCustomers() {
    const tbody = document.getElementById("customerTableBody");
    if (!tbody) {
        console.error("customerTableBody not found!");
        return;
    }

    tbody.innerHTML = "";

    customers.forEach(cust => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${cust.id}</td>
            <td>${cust.name}</td>
            <td>${cust.email}</td>
            <td>${cust.phone}</td>
            <td>${cust.orders}</td>
            <td>
                <button class="edit-btn"><i data-lucide="edit"></i></button>
                <button class="delete-btn"><i data-lucide="trash-2"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });

    lucide.createIcons();
}

// Modal controls
const modal = document.getElementById("newCustomerModal");
const openBtn = document.getElementById("newCustomerBtn");
const closeBtn = document.getElementById("closeModal");
const cancelBtn = document.getElementById("cancelBtn");
const form = document.getElementById("newCustomerForm");

if (openBtn) {
    openBtn.addEventListener("click", () => {
        console.log("Add Customer clicked – opening modal");
        if (modal) modal.style.display = "flex";
    });
}

if (closeBtn) closeBtn.addEventListener("click", () => modal.style.display = "none");
if (cancelBtn) cancelBtn.addEventListener("click", () => modal.style.display = "none");

window.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
});

// Add new customer
if (form) {
    form.addEventListener("submit", e => {
        e.preventDefault();

        const name = form.querySelector('[name="name"]').value.trim();
        const email = form.querySelector('[name="email"]').value.trim();
        const phone = form.querySelector('[name="phone"]').value.trim();
        const orders = 0; // new customer

        if (!name || !phone) {
            alert("Name සහ Phone අනිවාර්යයි!");
            return;
        }

        const newId = "#" + (customers.length + 1001);

        customers.push({ id: newId, name, email, phone, orders });

        loadCustomers();

        modal.style.display = "none";
        form.reset();

        alert("Customer එක එකතු වුණා!");
    });
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("Page ready – loading customers");
    loadCustomers();
});