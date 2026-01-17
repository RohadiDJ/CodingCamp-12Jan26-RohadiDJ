// ===== Navbar Toogle =====
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// ===== Wellcome Client =====
const nameInput = document.getElementById("nameInput");
const saveNameBtn = document.getElementById("saveNameBtn");
const greetingText = document.getElementById("greetingText");
const nameInputBox = document.getElementById("nameInputBox");
const changeNameBtn = document.getElementById("changeNameBtn");

function setGuestState() {
  greetingText.textContent = "Hi, Guest 👋";
  nameInputBox.style.display = "flex";
  changeNameBtn.style.display = "none";
}

function setUserState(name) {
  greetingText.textContent = `Hi, ${name} 👋`;
  nameInputBox.style.display = "none";
  changeNameBtn.style.display = "inline-block";
}

// ===== Simpan Data Wellcome Client =====
const savedName = localStorage.getItem("userName");
if (savedName) {
  setUserState(savedName);
} else {
  setGuestState();
}

saveNameBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();

  if (name === "") {
    alert("Please enter your name!");
    return;
  }

  localStorage.setItem("userName", name);
  nameInput.value = "";
  setUserState(name);
});

// ===== Change Name Client =====
changeNameBtn.addEventListener("click", () => {
  localStorage.removeItem("userName");
  setGuestState();
});

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
  });

  slides[index].classList.add("active");
  dots[index].classList.add("active");
  currentSlide = index;
}

function autoSlide() {
  let nextSlide = (currentSlide + 1) % slides.length;
  showSlide(nextSlide);
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
  });
});

setInterval(autoSlide, 4000);


// ===== Message Us Procces =====
const messageForm = document.getElementById("messageForm");

const fullNameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("messageText");

const errorName = document.getElementById("errorName");
const errorEmail = document.getElementById("errorEmail");
const errorMessage = document.getElementById("errorMessage");

const messageResult = document.getElementById("messageResult");
const resultName = document.getElementById("resultName");
const resultEmail = document.getElementById("resultEmail");
const resultMessage = document.getElementById("resultMessage");

// Email regex sederhana
function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

messageForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  // Reset error
  errorName.textContent = "";
  errorEmail.textContent = "";
  errorMessage.textContent = "";

  // Validate name
  if (fullNameInput.value.trim() === "") {
    errorName.textContent = "Name is required";
    isValid = false;
  }

  // Validate email
  if (emailInput.value.trim() === "") {
    errorEmail.textContent = "Email is required";
    isValid = false;
  } else if (!isValidEmail(emailInput.value.trim())) {
    errorEmail.textContent = "Email is not valid";
    isValid = false;
  }

  // Validate message
  if (messageInput.value.trim() === "") {
    errorMessage.textContent = "Message is required";
    isValid = false;
  }

  // If valid, show result
  if (isValid) {
    resultName.textContent = fullNameInput.value;
    resultEmail.textContent = emailInput.value;
    resultMessage.textContent = messageInput.value;

    messageResult.style.display = "block";

    // Reset form
    messageForm.reset();

    // Scroll to result
    messageResult.scrollIntoView({ behavior: "smooth" });
  }
});
