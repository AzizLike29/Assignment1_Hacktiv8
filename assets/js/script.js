// Menjalankan menu hamburger
const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector(".navbar ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

// Membuat Event click pada button
document.getElementById("submitButton").addEventListener("click", function () {
  // Ambil nilai dari input form
  // Fungsi dari .value mengambil elemen input, textarea dll
  const name = document.getElementById("inputName").value;
  const role = document.getElementById("inputRole").value;
  const availability = document.getElementById("inputAvailability").value;
  const age = document.getElementById("inputAge").value;
  const location = document.getElementById("inputLocation").value;
  const experience = document.getElementById("inputExperience").value;
  const email = document.getElementById("inputEmail").value;

  // Ganti nilai dalam elemen-elemen profil dengan nilai dari form
  // Fungsi dari textContent mengambil teks dari html seperti h3, p, span
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

  // Mengembalikan nilai input string jadi kosong ketika sudah klik button
  document.getElementById("inputName").value = "";
  document.getElementById("inputRole").value = "";
  document.getElementById("inputAvailability").value = "";
  document.getElementById("inputAge").value = "";
  document.getElementById("inputLocation").value = "";
  document.getElementById("inputExperience").value = "";
  document.getElementById("inputEmail").value = "";

  // Menampilkan notif ketika button sudah diklik
  alert("Data kamu berhasil disimpan!");
});
