$(document).ready(function () {
  function isInViewport(element) {
    var top_of_element = $(element).offset().top;
    var bottom_of_element = $(element).offset().top + $(element).outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    return (
      bottom_of_screen > top_of_element && top_of_screen < bottom_of_element
    );
  }
  // Add scroll event listener
  $(window).on("scroll", function () {
    if (isInViewport($("#about-sec2"))) {
      $("#about-sec2").addClass("animate__animated animate__fadeLeft");
    }
  });
  // about sec img
  $(window).on("scroll", function () {
    if (isInViewport($("#about-img"))) {
      $("#about-img").addClass("animate__animated animate__fadeRight");
    }
  });
  // Trigger animations when items come into view
  $(window).on("scroll", function () {
    $(".timeline-item").each(function () {
      if (isInViewport(this)) {
        $(this).addClass("animate__animated animate__fadeInDown");
      }
    });
  });
  // togle mobile icons
  $("#menu-icon").click(function () {
    $("#menu-icon").hide(); // Hide the menu button
    $("#close-icon").show(); // Show the close button
  });

  $("#close-icon").click(function () {
    $("#close-icon").hide(); // Hide the close button
    $("#menu-icon").show(); // Show the menu button
  });
});
// show and hide loader
window.addEventListener("load", function () {
  // Show the loader for 3 seconds
  setTimeout(function () {
    document.getElementById("loader").style.display = "none";
  }, 3000); // 3000ms = 1 seconds
});
window.addEventListener("loader", function () {
  // Disable scrolling
  document.body.classList.add("no-scroll");

  // Show the loader for 3 seconds
  setTimeout(function () {
    // Hide the loader
    document.querySelector("#loader").style.display = "none";

    // Enable scrolling
    document.body.classList.remove("no-scroll");
  }, 1000); // 1000ms = 1 seconds
});
window.addEventListener("load", function () {
  // Disable scrolling
  document.body.classList.add("no-scroll");

  // Show the loader for 3 seconds
  setTimeout(function () {
    // Hide the loader
    document.getElementById("loader").style.display = "none";

    // Enable scrolling
    document.body.classList.remove("no-scroll");
  }, 1000); // 1000ms = 1 seconds
});
