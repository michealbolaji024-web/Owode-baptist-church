// OWODE BAPTIST CHURCH - JAVASCRIPT

document.addEventListener("DOMContentLoaded", () => {
  // Current year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Navbar active link while scrolling
  const sections = document.querySelectorAll("section[id], header[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function setActiveLink() {
    let current = "home";

    sections.forEach(section => {
      const top = section.offsetTop - 130;
      if (window.scrollY >= top) current = section.id;
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", setActiveLink);
  setActiveLink();

  // Close mobile navbar after clicking a link
  document.querySelectorAll("#navMenu .nav-link, #navMenu .btn").forEach(link => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("navMenu");
      if (menu.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });

  // Back to top
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("show", window.scrollY > 500);
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Demo prayer form
  const prayerForm = document.getElementById("prayerForm");
  const prayerMessage = document.getElementById("prayerMessage");

  prayerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    prayerMessage.textContent =
      "Thank you. Your prayer request has been received on this demo page. Connect this form to your email or backend before publishing.";
    prayerMessage.style.display = "block";
    prayerForm.reset();
  });
});
