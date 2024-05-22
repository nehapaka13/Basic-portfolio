document.addEventListener("DOMContentLoaded", function() {
    let navItems = document.querySelectorAll("nav ul li");
    navItems.forEach(function(navItem) {
        let sectionId = navItem.firstChild.getAttribute("href").substring(1);
        let section = document.getElementById(sectionId);
        let contents = section.querySelectorAll("*:not(h2)");

        contents.forEach(function(content) {
            content.style.display = "none";
        });

        navItem.addEventListener("mouseenter", function() {
            contents.forEach(function(content) {
                content.style.display = "block";
            });
        });

        navItem.addEventListener("mouseleave", function() {
            contents.forEach(function(content) {
                content.style.display = "none";
            });
        });
    });
});
