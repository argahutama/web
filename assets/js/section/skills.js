function generateSkillsList() {
  const skills = [
    "Android Kotlin & Java",
    "iOS Swift",
    "Flutter",
    "Jetpack Compose",
    "SwiftUI",
    "Springboot",
    "NestJS",
    "Go",
  ];
  const skillsList = document.getElementById("skills-list");

  skills.forEach((skill) => {
    const listItem = document.createElement("li");
    listItem.textContent = skill;
    skillsList.appendChild(listItem);
  });
}

document.addEventListener("DOMContentLoaded", generateSkillsList);
