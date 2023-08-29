 
 document.addEventListener("DOMContentLoaded", function () {
  const tabLinks = document.querySelectorAll(".tabbing-links li");
  const tabContents = document.querySelectorAll(".tabs");

  tabLinks.forEach((tabLink) => {
    tabLink.addEventListener("click", () => {
      // Remove current class from all tab links and contents
      tabLinks.forEach((link) => link.classList.remove("current"));
      tabContents.forEach((content) => content.classList.remove("current"));

      // Add current class to the clicked tab link and corresponding content
      const targetTab = tabLink.getAttribute("data-targetit");
      document.querySelector(`.${targetTab}`).classList.add("current");
      tabLink.classList.add("current");
    });
  });


});










document.getElementById("read-more-btn").addEventListener("click", function() {
  var morePackages = document.querySelector(".more-packages");
  morePackages.classList.toggle("show");
});
