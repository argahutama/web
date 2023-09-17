function generateEducationItems() {
  const educationItems = [
    {
      title: "Mercu Buana University",
      degree: "Bachelor's degree",
      field: "Computer Science",
      grade: "3.74 of 4.00",
    },
    {
      title: "SMK SMTI Yogyakarta",
      degree: "Vocational High School",
      field: "Chemical Engineering",
      grade: null,
    },
  ];

  const educationContainer = document.getElementById("education-items");

  educationItems.forEach((item) => {
    const section = document.createElement("section");

    section.innerHTML = `
        <h4>${item.title}</h4>
        <p class="education-degree-field">${item.degree} - ${item.field}</p>
        ${item.grade ? `<p>Grade: <b>${item.grade}<b/></p>` : ``}
      `;

    educationContainer.appendChild(section);
  });
}

document.addEventListener("DOMContentLoaded", generateEducationItems);
