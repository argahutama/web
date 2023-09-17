function generateCertificateItems() {
  const certificateItems = [
    {
      certificateIssuer: "Dicoding",
      certificateName: "Menjadi iOS Developer Expert",
      issued: "Dec 2022",
      url: "https://www.dicoding.com/certificates/NVP7943VWZR0",
    },
    {
      certificateIssuer: "Udemy",
      certificateName: "Pemrograman Go-Lang",
      issued: "Apr 2022",
      url: "http://ude.my/UC-57f31a9b-2916-4136-b085-b433e88971e3",
    },
    {
      certificateIssuer: "Dicoding",
      certificateName: "Menjadi Android Developer Expert",
      issued: "Dec 2021",
      url: "https://dicoding.com/certificates/RVZK176KOPD5",
    },
    {
      certificateIssuer: "Dicoding",
      certificateName: "Belajar Fundamental Aplikasi Flutter",
      issued: "Nov 2021",
      url: "https://www.dicoding.com/certificates/0LZ03NDKRZ65",
    },
    {
      certificateIssuer: "Dicoding",
      certificateName: "Belajar Android Jetpack Pro",
      issued: "Jun 2021",
      url: "https://www.dicoding.com/certificates/72ZD2NLOJZYW",
    },
    {
      certificateIssuer: "Udemy",
      certificateName: "Android Jetpack Masterclass in Kotlin",
      issued: "Apr 2021",
      url: "http://ude.my/UC-0323a87c-b826-48dc-8ab4-b5526607b66e/",
    },
    {
      certificateIssuer: "Udemy",
      certificateName:
        "The Complete Android 12 & Kotlin Development Masterclass",
      issued: "Nov 2020",
      url: "http://ude.my/UC-7f6d989d-1188-4636-86be-dbba12234b98",
    },
    {
      certificateIssuer: "Udemy",
      certificateName: "The Complete Flutter Development Bootcamp with Dart",
      issued: "Sep 2020",
      url: "http://ude.my/UC-8b4a325e-789b-4fcf-aeb0-2198497a48ab",
    },
    {
      certificateIssuer: "Dicoding Indonesia",
      certificateName: "Belajar Prinsip Pemrograman SOLID",
      issued: "Aug 2020",
      url: "https://www.dicoding.com/users/589462/academies",
    },
    {
      certificateIssuer: "Cambridge Certification Authority",
      certificateName: "CCA - Java Level 2",
      issued: "Aug 2020",
      url: "https://drive.google.com/file/d/1NMTROJ3CdkY5evaOTRRwsvJ0dyQwbV_7/view?usp=drive_link",
    },
    {
      certificateIssuer: "Cambridge Certification Authority",
      certificateName: "CCA - Java Level 1",
      issued: "Jul 2020",
      url: "https://drive.google.com/file/d/1XFIT1PeV4UTl3CO9bG6iOjfCUG8im2Wr/view?usp=drive_link",
    },
    {
      certificateIssuer: "Dicoding Indonesia",
      certificateName: "Memulai Pemrograman dengan Kotlin",
      issued: "May 2020",
      url: "https://www.dicoding.com/users/589462/academies",
    },
  ];

  const certificateContainer = document.getElementById("certificate-items");

  certificateItems.forEach((item) => {
    const section = document.createElement("section");
    const urlHTML = item.url ? `<a href="${item.url}" target="_blank">` : "";
    const closingTag = item.url ? "</a>" : "";

    section.innerHTML = `
      <h4>${urlHTML}${item.certificateIssuer} - ${item.certificateName}${closingTag}</h4>
      <p>Issued: ${item.issued}</p>
    `;

    certificateContainer.appendChild(section);
  });
}

document.addEventListener("DOMContentLoaded", generateCertificateItems);
