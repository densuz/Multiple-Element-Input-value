
// Fungsi untuk menginisialisasi Choices.js pada elemen select
function initializeChoices() {
    const selectElements = document.querySelectorAll(".choices");
    selectElements.forEach(function(selectElement) {
        new Choices(selectElement, {
            removeItemButton: true,
            allowHTML: true,
            searchEnabled: true,
            placeholderValue: 'Pilih opsi...',
        });
    });
}

// Fungsi untuk menambahkan baris baru
function addRow() {
    const tableBody = document.getElementById("row-template");
    const newRow = tableBody.rows[0].cloneNode(true);
    
    // Kosongkan pilihan select di baris baru
    const selects = newRow.querySelectorAll("select");
    selects.forEach(select => {
        select.selectedIndex = -1; // Kosongkan pilihan
    });

    tableBody.appendChild(newRow);
    
    // Inisialisasi Choices.js pada select baru
    initializeChoices();
}

// Fungsi untuk menghapus baris
function removeRow(button) {
    const row = button.closest("tr");
    const tableBody = document.getElementById("row-template");

    if (tableBody.rows.length > 1) {
        row.remove();
    } else {
        alert("Tidak dapat menghapus semua baris!");
    }
}

// Inisialisasi Choices.js saat halaman dimuat
document.addEventListener("DOMContentLoaded", initializeChoices);
