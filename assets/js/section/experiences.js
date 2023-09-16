function generateExperienceItems() {
  const experienceItems = [
    {
      company: "GetPlus",
      period: "Jun 2023 — Present",
      jobTitle: "Senior Android Developer",
    },
    {
      company: "Zenius",
      period: "May 2022 — Jun 2023",
      jobTitle: "Senior Android Engineer",
    },
    {
      company: "OKHOME",
      period: "Nov 2021 — May 2022",
      jobTitle: "Senior Android Developer",
    },
    {
      company: "Planet Indonesia",
      period: "May 2021 — Nov 2021",
      jobTitle: "Android Developer",
    },
    {
      company: "Elisoft Technology",
      period: "Jan 2021 — Apr 2021",
      jobTitle: "Android Developer Intern",
    },
  ];

  const experienceContainer = document.getElementById("experience-items");

  experienceItems.forEach((item) => {
    const section = document.createElement("section");
    section.innerHTML = `
          <h4>${item.company} - ${item.jobTitle}</h4>
          <p>Period: ${item.period}</p>
        `;
    experienceContainer.appendChild(section);
  });
}

document.addEventListener("DOMContentLoaded", generateExperienceItems);
