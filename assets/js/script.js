"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// Testimonials-related JavaScript (Comment out below)

/*
// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector(
      "[data-testimonials-title]"
    ).innerHTML;
    modalText.innerHTML = this.querySelector(
      "[data-testimonials-text]"
    ).innerHTML;

    testimonialsModalFunc();
  });
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);
*/

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
let form, formInputs, submitBtn;

function initializeFormElements() {
  form = document.querySelector("[data-form]");
  formInputs = document.querySelectorAll("[data-form-input]");
  submitBtn = document.querySelector("[data-form-btn]");

  if (!form) return;

  // Basic form validation
  function validateForm() {
    let isValid = true;
    formInputs.forEach((input) => {
      if (!input.value.trim()) {
        isValid = false;
        input.style.borderColor = "var(--bittersweet-shimmer)";
      } else {
        input.style.borderColor = "var(--jet)";
      }
    });
    return isValid;
  }

  // Email validation
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      showToast("Please fill in all fields", "error");
      return;
    }

    const emailInput = form.querySelector('input[type="email"]');
    if (!validateEmail(emailInput.value)) {
      showToast("Please enter a valid email address", "error");
      return;
    }

    submitBtn.disabled = true;
    submitBtn.innerHTML = "<span>Sending...</span>";

    try {
      // Get reCAPTCHA token
      const token = await grecaptcha.execute(
        "6LfkJlArAAAAAHqi_yrki8TnnTfbPrXxXOm1ofGh",
        {
          action: "submit",
        }
      );

      // Add token to form data
      const formData = new FormData(form);
      formData.append("recaptcha_token", token);

      // Submit form to Formspree
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        showToast("Message sent successfully!", "success");
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      showToast("Failed to send message. Please try again.", "error");
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = "<span>Send Message</span>";
    }
  });

  // Real-time validation
  formInputs.forEach((input) => {
    input.addEventListener("input", () => {
      if (input.value.trim()) {
        input.style.borderColor = "var(--jet)";
      }
      if (input.type === "email" && input.value.trim()) {
        input.style.borderColor = validateEmail(input.value)
          ? "var(--jet)"
          : "var(--bittersweet-shimmer)";
      }
    });
  });
}

// Initialize form elements when DOM is loaded
document.addEventListener("DOMContentLoaded", initializeFormElements);

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

//CV
// Get the modal
var modal = document.getElementById("cvModal");

// Get the button that opens the modal
var btn = document.getElementById("cvLink");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.classList.add("show");
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.classList.remove("show");
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.remove("show");
  }
};

//RESUME
//UNI
function toggleDetails(id) {
  var moreInfo = document.getElementById(id);
  var button = document.querySelector(
    "button[onclick=\"toggleDetails('" + id + "')\"]"
  );
  if (moreInfo.style.display === "none") {
    moreInfo.style.display = "block";
    button.textContent = "Show Less";
  } else {
    moreInfo.style.display = "none";
    button.textContent = "Show More";
  }
}

// Theme toggling
const themeToggle = document.querySelector(".theme-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Check for saved theme preference or use system preference
const currentTheme =
  localStorage.getItem("theme") ||
  (prefersDarkScheme.matches ? "dark" : "light");
if (currentTheme === "light") {
  document.body.classList.add("light-theme");
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  const theme = document.body.classList.contains("light-theme")
    ? "light"
    : "dark";
  localStorage.setItem("theme", theme);
});

// Toast notifications
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <ion-icon name="${
      type === "success" ? "checkmark-circle" : "alert-circle"
    }"></ion-icon>
    <span>${message}</span>
  `;

  document.querySelector(".toast-container").appendChild(toast);

  setTimeout(() => {
    toast.style.animation = "slideOut 0.3s ease-out forwards";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
