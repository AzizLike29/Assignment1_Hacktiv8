// Menjalankan menu hamburger
const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector(".navbar ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

// Membuat DOM selection
document.getElementById("submitButton").addEventListener("click", function () {
  // Ambil nilai dari input form
  const name = document.getElementById("inputName").value;
  const role = document.getElementById("inputRole").value;
  const availability = document.getElementById("inputAvailability").value;
  const age = document.getElementById("inputAge").value;
  const location = document.getElementById("inputLocation").value;
  const experience = document.getElementById("inputExperience").value;
  const email = document.getElementById("inputEmail").value;

  // Ganti nilai dalam elemen-elemen profil dengan nilai dari form
  document.getElementById("profilName").textContent = name;
  document.getElementById("profileRole").textContent = role;
  document.getElementById(
    "availability"
  ).textContent = `Availability: ${availability}`;
  document.getElementById("age").textContent = `Age: ${age}`;
  document.getElementById("location").textContent = `Location: ${location}`;
  document.getElementById(
    "experience"
  ).textContent = `Experience: ${experience} Tahun`;
  document.getElementById("email").textContent = `Email: ${email}`;
});
