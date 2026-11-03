const greeting = document.getElementById("greeting");
const nameInput = document.getElementById("nameInput");
const greetBtn = document.getElementById("greetBtn");
const boxes = document.querySelectorAll(".box");

// Change the header text when the button is clicked
const greetUser = () => {
  const name = nameInput.value.trim();
  greeting.textContent = name ? `Hello, ${name}` : "Hello";
};

greetBtn.addEventListener("click", greetUser);

// Allow pressing Enter in the input field as well
nameInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") greetUser();
});

// Fill each box with the colour written in it when clicked
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    const colour = box.textContent.trim().toLowerCase();
    box.style.backgroundColor = colour;
    box.style.color = colour === "yellow" ? "#222" : "#fff"; // keep text readable
  });
});