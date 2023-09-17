function generateProjectItems() {
  const projectItems = [
    {
      title: "GetPlus",
      imageSrc: "assets/images/project/getplus.png",
      url: "https://play.google.com/store/apps/details?id=com.getplus.application",
      downloads: "500K+",
      description:
        "GetPlus is a multi-brand loyalty program that offers you the fastest way to earn points across all payment methods out of your everyday shopping. From groceries to travel, banking to fashion, GetPlus offers deals by well-known brands. ",
    },
    {
      title: "Zenius",
      imageSrc: "assets/images/project/zenius.png",
      url: "https://play.google.com/store/apps/details?id=net.zenius.mobile",
      downloads: "5M+",
      description:
        "An online learning application that can help you keep track of school materials and focus on exam preparation, from PTS, PAS, PAT, UTBK, to Independent Examinations (SIMAK UI, UM UGM, etc.)!",
    },
    {
      title: "Zenpro",
      imageSrc: "assets/images/project/zenpro.png",
      url: "https://play.google.com/store/apps/details?id=net.zenpro.mobile",
      downloads: "50K+",
      description:
        "Certified Training Platform for Professionals, Pre-Employment Card Participants and New Graduates!",
    },
    {
      title: "OKHOME",
      imageSrc: "assets/images/project/okhome.png",
      url: "https://play.google.com/store/apps/details?id=id.co.okhome.okhomeapp",
      downloads: "100K+",
      description:
        "OKHOME is reliable and trusted lifestyle service in Indonesia. OKHOME provides residential cleaning services, AC cleaning services, and disinfectants for houses and apartments.",
    },
    {
      title: "Planet Indonesia",
      imageSrc: "assets/images/project/planet.webp",
      url: "https://play.google.com/store/apps/details?id=com.oddy.customer",
      downloads: "100K+",
      description:
        "PLANET helps people maintain their vehicle with proper service, easy to order, scheduled and recorded in detail.",
    },
  ];

  const projectContainer = document.getElementById("project-items");

  projectItems.forEach((item) => {
    const section = document.createElement("section");
    const hasUrl = !!item.url;

    section.innerHTML = `
      <h4>${
        hasUrl
          ? `<a href="${item.url}" target="_blank">${item.title}</a>`
          : item.title
      }</h4>
      <img class="featured-image rounded-image" src="${item.imageSrc}" alt="${
      item.title
    }" />
      <p>${item.description}</p>
      <p>Downloads: <b>${item.downloads}<b/></p>
    `;

    projectContainer.appendChild(section);
  });
}

document.addEventListener("DOMContentLoaded", generateProjectItems);
