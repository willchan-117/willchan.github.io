// Get all the category buttons
const categories = document.querySelectorAll(".skill-category");
// Get all skill groups
const groups = document.querySelectorAll(".skills-group");

categories.forEach(category => {
  category.addEventListener("mouseenter", () => {
    
    // Hide all groups first
    groups.forEach(g => g.style.display = "none");

    // Show the one that matches the hovered category
    const id = "skills-" + category.dataset.skill;
    document.getElementById(id).style.display = "flex";
  });
});