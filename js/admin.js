// --- Admin Product Management Btns ---
const addProductBtn = document.querySelector("#add-product-menu");
const removeProductBtn = document.querySelector("#remove-product-menu");

// Admin Management Containers
const addContainer = document.querySelector(".add-container");
const removeContainer = document.querySelector(".remove-container");

// Admin Side URL
const adminSRC = "C:\Users\ASUS\Downloads\mit-canteen-site-master\mit-canteen-site-master/admin-side.html";

// --- Admin Side ---
if (adminSRC === window.location.href) {
  console.log("admin side");
  // Admin Management Btns
  addProductBtn.addEventListener("click", () => {
    addContainer.classList.toggle("show-container");
    removeContainer.classList.remove("show-container");
  });

  // Admin Management Btns
  removeProductBtn.addEventListener("click", () => {
    removeContainer.classList.toggle("show-container");
    addContainer.classList.remove("show-container");
  });
}
