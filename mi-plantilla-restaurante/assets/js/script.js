'use strict';

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".nav-toggle");
  const primaryNav = document.querySelector("#primary-nav");
  const categoryTabs = document.querySelectorAll(".category-tab");
  const menuItems = document.querySelectorAll(".menu-item");

  // Reservation links use the device's native tel: handler to call the restaurant.
  // Toggle the compact navigation on touch-sized screens.
  if (menuToggle && primaryNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
      primaryNav.classList.toggle("is-open", !isOpen);
    });

    primaryNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menú");
        primaryNav.classList.remove("is-open");
      });
    });
  }

  // Filter menu items by the category selected by the visitor.
  categoryTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      categoryTabs.forEach((item) => item.setAttribute("aria-pressed", "false"));
      tab.setAttribute("aria-pressed", "true");

      const category = tab.dataset.category;
      menuItems.forEach((item) => {
        item.hidden = category !== "todos" && item.dataset.category !== category;
      });
    });
  });

  // Keep the copyright year current without editing the template each year.
  const currentYear = document.querySelector("#year");
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }
});
