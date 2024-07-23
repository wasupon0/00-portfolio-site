/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  // for (i = 0; i < skillsContent.length; i++) {
  //   skillsContent[i].className = "skills__content skills__close";
  // }

  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  } else {
    this.parentNode.className = "skills__content skills__close";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

/*==================== PORTFOLIO SWIPER  ====================*/
// let swiperPortfolio = new Swiper(".portfolio__container", {
//   cssMode: true,
//   loop: true,

//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

/*==================== TESTIMONIAL ====================*/
// let swiperTestimonial = new Swiper(".testimonial__container", {
//   loop: true,
//   grabCursor: true,
//   spaceBetween: 48,

//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     dynamicBullets: true,
//   },
//   breakpoints: {
//     568: {
//       slidesPerView: 2,
//     },
//   },
// });

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL TOP ====================*/
function scrollTop() {
  let scrollTop = document.getElementById("scroll-top");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 200) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  console.log(getCurrentTheme());
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());

  // project-01: toggle dark/light diagram
  if (getCurrentTheme() === "light") {
    document.getElementById("project-01-diagram").src =
      "./assets/img/project-01-light.png";
  } else {
    document.getElementById("project-01-diagram").src =
      "./assets/img/project-01-dark.png";
  }
});

// Show more button
// const buttonShow = document.getElementById("btn--show");
// const buttonHide = document.getElementById("btn--hide");
// const projectNext = document.querySelectorAll(".hide-project");
// buttonHide.style.display = "none";

// buttonShow.addEventListener("click", () => {
//   projectNext.forEach((n) => n.classList.add("show-project"));
//   buttonShow.style.display = "none";
//   buttonHide.style.display = "flex";
// });

// buttonHide.addEventListener("click", () => {
//   projectNext.forEach((n) => n.classList.remove("show-project"));
//   buttonShow.style.display = "flex";
//   buttonHide.style.display = "none";
//   window.location = "#projects";
// });

// Change intro text on click
const nameTextElement = document.getElementById("nameText");
const jobTextElement = document.getElementById("jobText");
const countryBtnElement = document.getElementById("countryBtn");
const introTextElement = document.getElementById("introText");

let isEnglish = false;

countryBtnElement.addEventListener("click", () => {
  if (isEnglish) {
    nameTextElement.textContent = "Hi, I'm Wasupon";
    jobTextElement.textContent = "Front-End Engineer";
    introTextElement.textContent = `I am a front-end engineer based in Tokyo, passionate about
    creating dynamic and responsive websites using React, Next.js,
    and Tailwind CSS. With experience in various projects, including
    websites, mobile apps, and cloud. I am dedicated to delivering
    engaging and high-performance user experiences.`;

    isEnglish = false;
  } else {
    nameTextElement.innerHTML = `こんにちは！<br/>ワスポンです。`;
    jobTextElement.textContent = `フロントエンドエンジニア`;
    introTextElement.textContent = `東京に住むフロントエンドエンジニアで、React、Next.js、およびTailwind
    CSSを使用してダイナミックでレスポンシブWebデザインを作成することに情熱を持っています。ウェブサイト、モバイルアプリ、クラウドなど、さまざまなプロジェクトの経験があり、魅力的で高性能なユーザー体験を提供することに専念しています。`;

    isEnglish = true;
  }
});

// Play intro voice on logo click
const myLogo = document.getElementById("myLogo");
const audioEnglish = new Audio("assets/audio/my_intro_en.m4a");
audioEnglish.volume = 0.35;
const audioJapanese = new Audio("assets/audio/my_intro_jp.m4a");
audioJapanese.volume = 0.35;

myLogo.addEventListener("click", () => {
  console.log(`myLogo click`);
  audioEnglish.pause();
  audioEnglish.currentTime = 0;
  audioJapanese.pause();
  audioJapanese.currentTime = 0;

  if (!isEnglish) {
    audioEnglish.play();
  } else {
    audioJapanese.play();
  }
});

// project-02: fix hover logic on mobile
countryBtnElement.addEventListener("touchstart", () => {
  countryBtnElement.classList.add("hover");
});

countryBtnElement.addEventListener("touchend", () => {
  countryBtnElement.classList.remove("hover");
});

countryBtnElement.addEventListener("mouseenter", () => {
  countryBtnElement.classList.add("hover");
});

countryBtnElement.addEventListener("mouseleave", () => {
  countryBtnElement.classList.remove("hover");
});
