const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

const unlockBtn = document.getElementById("unlock-btn");
const submitBtn = document.getElementById("submit-btn");

unlockBtn.addEventListener("click", () => {
  // Enable submit button
  submitBtn.disabled = false;
  // Dispose of all tooltips
  tooltipList.forEach((tooltip) => tooltip.dispose());
});

//if you want to only select 1 tooltip , you can use
//const tooltip = new bootstrap.Tooltip(document.querySelector('[data-bs-toggle="tooltip"]'));
//tooltip.dispose(); // ✅ This works because it's just one tooltip
