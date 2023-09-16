function generateCertificateItems() {
  const certificateItems = [
    {
      certificateIssuer: "Dicoding",
      certificateName: "Menjadi iOS Developer Expert",
      issued: "Dec 2022",
    },
    {
      certificateIssuer: "Udemy",
      certificateName: "Pemrograman Go-Lang",
      issued: "Apr 2022",
    },
    {
      certificateIssuer: "Dicoding",
      certificateName: "Menjadi Android Developer Expert",
      issued: "Dec 2021",
    },
    {
      certificateIssuer: "Dicoding",
      certificateName: "Belajar Fundamental Aplikasi Flutter",
      issued: "Nov 2021",
    },
    {
      certificateIssuer: "Dicoding",
      certificateName: "Belajar Android Jetpack Pro",
      issued: "Jun 2021",
    },
    {
      certificateIssuer: "Udemy",
      certificateName: "Android Jetpack Masterclass in Kotlin",
      issued: "Apr 2021",
    },
    {
      certificateIssuer: "Udemy",
      certificateName:
        "The Complete Android 12 & Kotlin Development Masterclass",
      issued: "Nov 2020",
    },
    {
      certificateIssuer: "Udemy",
      certificateName: "The Complete Flutter Development Bootcamp with Dart",
      issued: "Sep 2020",
    },
    {
      certificateIssuer: "Dicoding Indonesia",
      certificateName: "Belajar Prinsip Pemrograman SOLID",
      issued: "Aug 2020",
    },
    {
      certificateIssuer: "Cambridge Certification Authority",
      certificateName: "CCA - Java Level 2",
      issued: "Aug 2020",
    },
    {
      certificateIssuer: "Cambridge Certification Authority",
      certificateName: "CCA - Java Level 1",
      issued: "Jul 2020",
    },
    {
      certificateIssuer: "Dicoding Indonesia",
      certificateName: "Memulai Pemrograman dengan Kotlin",
      issued: "May 2020",
    },
  ];

  const certificateContainer = document.getElementById("certificate-items");

  certificateItems.forEach((item) => {
    const section = document.createElement("section");
    section.innerHTML = `
          <h4>${item.certificateIssuer} - ${item.certificateName}</h4>
          <p>Issued: ${item.issued}</p>
        `;
    certificateContainer.appendChild(section);
  });
}

document.addEventListener("DOMContentLoaded", generateCertificateItems);
