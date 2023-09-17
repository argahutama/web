function scrollToActiveNavLink() {
  const activeLink = document.querySelector("a.nav-link.active");

  if (activeLink) {
    const activeNavLi = activeLink.parentElement;
    const nav = document.querySelector("nav");

    if (activeNavLi) {
      nav.scrollTo({
        left: activeNavLi.offsetLeft - nav.offsetWidth / 2,
        behavior: "smooth",
      });
    }
  }
}

function setActiveNavLink(targetId) {
  document.querySelectorAll("a.nav-link").forEach((link) => {
    link.classList.remove("active");
  });

  const activeLink = document.querySelector(
    `a.nav-link[data-section="${targetId}"]`
  );

  if (activeLink) {
    activeLink.classList.add("active");
    scrollToActiveNavLink();
  }
}

document.querySelectorAll("a.nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("data-section");
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 50,
      behavior: "smooth",
    });
  });
});

const firstLink = document.querySelector("a.nav-link[data-section]");
if (firstLink) {
  firstLink.classList.add("active");
}

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  const aboutSection = document.getElementById("about");
  const skillsSection = document.getElementById("skills");
  const threshold = 50;

  if (
    scrollPosition <
    aboutSection.offsetTop + aboutSection.offsetHeight - threshold
  ) {
    setActiveNavLink("about");
  } else if (
    scrollPosition >= skillsSection.offsetTop - threshold &&
    scrollPosition <
      skillsSection.offsetTop + skillsSection.offsetHeight - threshold
  ) {
    setActiveNavLink("skills");
  } else {
    document.querySelectorAll(".card").forEach((section) => {
      const sectionId = section.getAttribute("id");
      const sectionOffset = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionOffset - threshold &&
        scrollPosition < sectionOffset + sectionHeight - threshold
      ) {
        setActiveNavLink(sectionId);
      }
    });
  }
});
