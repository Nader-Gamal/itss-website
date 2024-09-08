$(document).ready(function () {
  // Check if Waypoints is loaded

  $(".serv1").waypoint(
    function () {
      $(".sec-tittle")
        .removeClass("hidden")
        .addClass("animate__fadeIn animate__animated");
      $(".card")
        .removeClass("hidden")
        .addClass("animate__fadeInLeft animate__animated ");
    },
    {
      offset: "100%", // Trigger when the element is 50% into the viewport
    }
  );
  $(".serv2").waypoint(
    function () {
      $(".card2")
        .removeClass("hidden")
        .addClass("animate__fadeInRight animate__animated ");
    },
    {
      offset: "10%", // Trigger when the element is 50% into the viewport
    }
  );

  $(document).ready(function () {
    $(".scroller").waypoint(
      function () {
        $(".sec-tittle1")
          .removeClass("hidden")
          .addClass("animate__fadeIn animate__animated");
        console.log("Waypoint triggered"); // Debugging
      },
      {
        offset: "10%", // Trigger when the element is 50% into the viewport
      }
    );

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

  // drop down
  $(".dropbtn").click(function () {
    $(".dropdown-content").toggleClass("show");
  });

  // Close the dropdown if the user clicks outside of it
  $(window).click(function (event) {
    if (!$(event.target).closest(".dropdown").length) {
      $(".dropdown-content").removeClass("show");
    }
  });

  // toogle up and down arrows for mob nav
  $("label[for='showDrop']").click(function () {
    const icon = $(this).find("i");

    // Toggle between the down and up arrows
    if (icon.hasClass("fa-chevron-down")) {
      icon.removeClass("fa-chevron-down").addClass("fa-chevron-up");
    } else {
      icon.removeClass("fa-chevron-up").addClass("fa-chevron-down");
    }
  });
  $("label[for='showMega']").click(function () {
    const icon = $(this).find("i");

    // Toggle between the down and up arrows
    if (icon.hasClass("fa-chevron-down")) {
      icon.removeClass("fa-chevron-down").addClass("fa-chevron-up");
    } else {
      icon.removeClass("fa-chevron-up").addClass("fa-chevron-down");
    }
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

// navBar select
// Select all nav links
const navLinks = document.querySelectorAll(".nav-link");

// Add click event to each link
navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    // Prevent default anchor click behavior

    // Remove active class from all links
    navLinks.forEach((link) => link.classList.remove("active"));

    // Add active class to the clicked link
    // this.classList.add("active");

    // Scroll to the corresponding section
    const targetId = this.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

// clients testimonial carsoul
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("default-carousel");
  const slides = carousel.querySelectorAll("[data-carousel-item]");
  const indicators = carousel.querySelectorAll("[data-carousel-slide-to]");
  const totalSlides = slides.length;
  let currentIndex = 0;
  const intervalTime = 5000; // 2 seconds

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("hidden", i !== index);
    });
    indicators.forEach((indicator, i) => {
      indicator.setAttribute("aria-current", i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  // Initialize the carousel to show the first slide
  showSlide(currentIndex);

  // Set up the interval for automatic sliding
  const slideInterval = setInterval(nextSlide, intervalTime);
});

// itss numbers
const counts = document.querySelectorAll(".count");
const speed = 15;

function startCounting(counter) {
  function upDate() {
    const target = Number(counter.getAttribute("data-target"));
    const count = Number(counter.innerText);
    const inc = target / speed;
    if (count < target) {
      counter.innerText = Math.floor(inc + count);
      setTimeout(upDate, 99);
    } else {
      counter.innerText = target;
    }
  }
  upDate();
}

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startCounting(entry.target);
        observer.unobserve(entry.target); // Stop observing once the animation has started
      }
    });
  },
  {
    threshold: 0.5, // You can adjust this value based on when you want to trigger the counting effect
  }
);

counts.forEach((count) => {
  observer.observe(count);
});

// tabs of services
document.addEventListener("DOMContentLoaded", function () {
  let tabHeader = document.querySelector(".tab-header");
  let tabsPane = tabHeader.querySelectorAll("div");
  let tabBody = document.querySelector(".tab-body");
  let tabIndicator = document.querySelector(".tab-indicator");

  tabsPane.forEach((tab, i) => {
    tab.addEventListener("click", function () {
      // Remove active class from all tabs and contents
      tabHeader.querySelector(".active").classList.remove("active");
      tabBody.querySelector(".active").classList.remove("active");

      // Add active class to clicked tab and corresponding content
      tab.classList.add("active");
      tabBody.children[i].classList.add("active");

      // Move the tab indicator
      tabIndicator.style.left = `calc((100% / ${tabsPane.length}) * ${i})`;
    });
  });
  console.log("Tab Index:", i);
});

// hide and show tab content
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  // Function to reset tabs and remove their content from DOM
  function resetTabs() {
    tabs.forEach((tab) => tab.classList.remove("active"));
    contents.forEach((content) => {
      content.classList.remove("active");
      content.classList.add("hidden"); // Remove content from DOM
    });
  }

  // Function to load content dynamically based on tab ID
  function loadContent(tabId) {
    switch (tabId) {
      case "tab1":
        return `
           <!-- First Tab Content (Odoo ERP) -->
            <p class="mt-10 text-center text-lg text-gray-700 dark:text-gray-400">
              ITSS’s portfolio of services is designed to cater to the diverse needs of modern businesses, ensuring that every client receives a tailored solution that fits their unique requirements.            
              </p>
            <div class="contain-1 flex gap-5">
              <div
                class="w-1/2 p-6 mt-16 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:-translate-y-2 transition-transform"
              >
                <i
                  class="fa-solid fa-list-check fa-2xl text-left mb-8 text-[#3ea4db]"
                ></i>
                <a href="https://www.itss-c.com/ar/contactus">
                  <h5
                    class="mb-2 text-2xl font-semibold tracking-tight text-gray-600 dark:text-white"
                  >
                    Odoo ERP Implementation
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  Comprehensive customization and deployment of Odoo ERP systems
                  to streamline business processes.
                </p>
                <a
                  href="https://www.itss-c.com/contactus"
                  class="inline-flex font-medium items-center text-[#3ea4db] hover:underline"
                >
                  Learn more
                  <svg
                    class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                    />
                  </svg>
                </a>
              </div>
              <div
                class="w-1/2 p-6 mt-16 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:-translate-y-2 transition-transform"
              >
                <i
                  class="fa-solid fa-shapes fa-2xl text-left mb-8 text-[#3ea4db]"
                ></i>
                <a href="https://www.itss-c.com/ar/contactus">
                  <h5
                    class="mb-2 text-2xl font-semibold tracking-tight text-gray-600 dark:text-white"
                  >
                    Custom Development
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  Beyond standard implementations, ITSS offers custom
                  development services to enhance existing ERP systems or build
                  new modules from scratch.
                </p>
                <a
                  href="https://www.itss-c.com/contactus"
                  class="inline-flex font-medium items-center text-[#3ea4db] hover:underline"
                >
                  Learn more
                  <svg
                    class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div class="contain-2 flex gap-5">
              <div
                class="w-1/2 p-6 mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:-translate-y-2 transition-transform"
              >
                <i
                  class="fa-solid fa-right-left fa-2xl text-left mb-8 text-[#3ea4db]"
                ></i>
                <a href="https://www.itss-c.com/ar/contactus">
                  <h5
                    class="mb-2 text-2xl font-semibold tracking-tight text-gray-600 dark:text-white"
                  >
                    Migration Services
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  Assistance with migrating from older ERP systems to Odoo,
                  ensuring data integrity and system functionality.
                </p>
                <a
                  href="https://www.itss-c.com/contactus"
                  class="inline-flex font-medium items-center text-[#3ea4db] hover:underline"
                >
                  Learn more
                  <svg
                    class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                    />
                  </svg>
                </a>
              </div>
              <div
                class="w-1/2 p-6 mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:-translate-y-2 transition-transform"
              >
                <i
                  class="fa-solid fa-network-wired fa-2xl text-left mb-8 text-[#3ea4db]"
                ></i>
                <a href="https://www.itss-c.com/ar/contactus">
                  <h5
                    class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"
                  >
                    Integration Services
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  Seamlessly integrating Odoo with other business systems (CRM,
                  eCommerce, accounting, etc.) for enhanced data synergy.
                </p>
                <a
                  href="https://www.itss-c.com/ar/contactus"
                  class="inline-flex font-medium items-center text-[#3ea4db] hover:underline"
                >
                  Learn more
                  <svg
                    class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div class="contain-2 flex gap-5">
              <div
                class="w-1/2 p-6 mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:-translate-y-2 transition-transform"
              >
                <i
                  class="fa-solid fa-chalkboard-user fa-2xl text-left mb-8 text-[#3ea4db]"
                ></i>
                <a href="https://www.itss-c.com/ar/contactus">
                  <h5
                    class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"
                  >
                    Odoo Training
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  Our great Implementation methodology comes with comprehensive
                  training. Yet if all you need is training for your staff, our
                  consultants will provide your team the training they need.
                </p>
                <a
                  href="https://www.itss-c.com/ar/contactus"
                  class="inline-flex font-medium items-center text-[#3ea4db] hover:underline"
                >
                  Learn more
                  <svg
                    class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                    />
                  </svg>
                </a>
              </div>
              <div
                class="w-1/2 p-6 mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:-translate-y-2 transition-transform"
              >
                <i
                  class="fa-solid fa-headset fa-2xl text-left mb-8 text-[#3ea4db]"
                ></i>
                <a href="https://www.itss-c.com/ar/contactus">
                  <h5
                    class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"
                  >
                    Technical Support and Maintenance
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  Ongoing support and maintenance services to ensure ERP systems
                  run smoothly post-implementation.
                </p>
                  <a
                  href=https://www.itss-c.com/ar/contactus"
                  class="inline-flex font-medium items-center text-[#3ea4db] hover:underline"
                >
                  Learn more
                  <svg
                    class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                    />
                  </svg>
                </a>
              </div>
            </div>`;
      case "tab2":
        return `
            <p class="mt-10 text-center text-lg text-gray-700 dark:text-gray-400">
              ITSS's solutions are versatile, catering to a wide range of industries such as
            </p>
            <div class="contain-1 flex gap-5">
              <div
                class="w-1/2 p-6 mt-16 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:-translate-y-2 transition-transform"
              >
                <i
                  class="fa-solid fa-store fa-2xl text-left mb-8 text-[#3ea4db]"
                ></i>
                <a href=" https://www.itss-c.com/ar/contactus">
                  <h5
                    class="mb-2 text-2xl font-semibold tracking-tight text-gray-600 dark:text-white"
                  >
                   Retail
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  Streamlining inventory, sales, and customer relationships, bringing these key functions together in a cohesive platform. This integration reduces manual tasks, minimizes errors, and ensures a seamless flow of information across departments, improving operational efficiency and customer satisfaction.
                </p>
                <a
                  href="https://www.itss-c.com/ar/contactus"
                  class="inline-flex font-medium items-center text-[#3ea4db] hover:underline"
                >
                  Learn more
                  <svg
                    class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                    />
                  </svg>
                </a>
              </div>
              <div
                class="w-1/2 p-6 mt-16 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:-translate-y-2 transition-transform"
              >
                <i
                  class="fa-solid fa-dolly fa-2xl text-left mb-8 text-[#3ea4db]"
                ></i>
                <a href="https://www.itss-c.com/ar/contactus">
                  <h5
                    class="mb-2 text-2xl font-semibold tracking-tight text-gray-600 dark:text-white"
                  >
                    Trading
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                    Integrating key functions, such as inventory management, order processing, and customer relationship management (CRM), providing a cohesive platform that simplifies trading workflows. 
                </p>
                <a
                  href="https://www.itss-c.com/ar/contactus"
                  class="inline-flex font-medium items-center text-[#3ea4db] hover:underline"
                >
                  Learn more
                  <svg
                    class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                    />
                  </svg>
                </a>
              </div>
            </div>

             <div class="contain-2 flex gap-5">
              <div
                class="w-1/2 p-6 mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:-translate-y-2 transition-transform"
              >
                <i
                  class="fa-solid fa-industry fa-2xl text-left mb-8 text-[#3ea4db]"
                ></i>
                <a href="https://www.itss-c.com/ar/contactus">
                  <h5
                    class="mb-2 text-2xl font-semibold tracking-tight text-gray-600 dark:text-white"
                  >
                   Manufacturing
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                    Facilitating the seamless flow of information between procurement, manufacturing, and distribution departments, ensuring that materials are sourced efficiently, production runs smoothly, and finished products are shipped on time.                </p>
                <a
                  href="https://www.itss-c.com/ar/contactus"
                  class="inline-flex font-medium items-center text-[#3ea4db] hover:underline"
                >
                  Learn more
                  <svg
                    class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                    />
                  </svg>
                </a>
              </div>
              <div
                class="w-1/2 p-6 mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:-translate-y-2 transition-transform"
              >
                <i
                  class="fa-solid fa-car fa-2xl text-left mb-8 text-[#3ea4db]"
                ></i>
                <a href="https://www.itss-c.com/ar/contactus">
                  <h5
                    class="mb-2 text-2xl font-semibold tracking-tight text-gray-600 dark:text-white"
                  >
                    Car Rental
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                    Managing fleet inventory, allowing companies to track available vehicles, monitor maintenance schedules, and manage vehicle turnover. This ensures cars are ready for rental, minimizing downtime and maximizing revenue.                 </p>
                <a
                  href="https://www.itss-c.com/ar/contactus"
                  class="inline-flex font-medium items-center text-[#3ea4db] hover:underline"
                >
                  Learn more
                  <svg
                    class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div class="contain-3 flex gap-5">
              <div
                class="w-1/2 p-6 mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:-translate-y-2 transition-transform"
              >
                <i
                  class="fa-solid fa-utensils fa-2xl text-left mb-8 text-[#3ea4db]"
                ></i>
                <a href="https://www.itss-c.com/ar/contactus">
                  <h5
                    class="mb-2 text-2xl font-semibold tracking-tight text-gray-600 dark:text-white"
                  >
                   Food and Beverage
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                    Handling complex operation process, ensuring compliance with regulatory requirements, and providing businesses with a comprehensive approach to integrate supply chain management functions, helping companies oversee procurement, production, and distribution processes seamlessly.                 <a
                  herf="https://www.itss-c.com/ar/contactus"    
                  class="inline-flex font-medium items-center text-[#3ea4db] hover:underline"
                >
                  Learn more
                  <svg
                    class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                    />
                  </svg>
                </a>
              </div>
              <div
                class="w-1/2 p-6 mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:-translate-y-2 transition-transform"
              >
                <i
                  class="fa-solid fa-building-ngo fa-2xl text-left mb-8 text-[#3ea4db]"
                ></i>
                <a href="https://www.itss-c.com/ar/contactus">
                  <h5
                    class="mb-2 text-2xl font-semibold tracking-tight text-gray-600 dark:text-white"
                  >
                    Government and Non-profits
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                    Integrating financial management functions, offering real-time monitoring of budgets, expenditures, and revenue streams, ensuring efficient allocation of resources. This transparency reduces the risk of misuse and allows stakeholders to track financial performance, enhancing trust and credibility. </p>
                <a
                  href="https://www.itss-c.com/ar/contactus"
                  class="inline-flex font-medium items-center text-[#3ea4db] hover:underline"
                >
                  Learn more
                  <svg
                    class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                    />
                  </svg>
                </a>
              </div>
            </div>
        `;
      case "tab3":
        return `
            <p class="mt-10 text-center text-lg text-gray-700 dark:text-gray-400">
            Engaging with ITSS involves a client-centric approach that ensures businesses receive the most out of their ERP investment
            </p>

        <div class="contain-1 flex gap-5">
        <div
          class="w-1/2 p-6 mt-16 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:-translate-y-2 transition-transform"
        >
          <i
            class="fa-solid fa-comments fa-2xl text-left mb-8 text-[#3ea4db]"
          ></i>
          <a href="https://www.itss-c.com/ar/contactus">
            <h5
              class="mb-2 text-2xl font-semibold tracking-tight text-gray-600 dark:text-white"
            >
             Initial Consultation
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Understanding the client’s business needs and challenges.          </p>
          <a
            href="https://www.itss-c.com/ar/contactus"
            class="inline-flex font-medium items-center text-[#3ea4db] hover:underline"
          >
            Learn more
            <svg
              class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
              />
            </svg>
          </a>
        </div>
        <div
          class="w-1/2 p-6 mt-16 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:-translate-y-2 transition-transform"
        >
          <i
            class="fa-solid fa-pen-to-square fa-2xl text-left mb-8 text-[#3ea4db]"
          ></i>
          <a href="https://www.itss-c.com/ar/contactus">
            <h5
              class="mb-2 text-2xl font-semibold tracking-tight text-gray-600 dark:text-white"
            >
              Solution Designing
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Crafting a customized Odoo implementation plan. 
          </p>
          <a
            href="https://www.itss-c.com/ar/contactus"
            class="inline-flex font-medium items-center text-[#3ea4db] hover:underline"
          >
            Learn more
            <svg
              class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
              />
            </svg>
          </a>
        </div>
      </div>

       <div class="contain-2 flex gap-5">
        <div
          class="w-1/2 p-6 mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:-translate-y-2 transition-transform"
        >
          <i
            class="fa-solid fa-file-lines fa-2xl text-left mb-8 text-[#3ea4db]"
          ></i>
          <a href="https://www.itss-c.com/ar/contactus">
            <h5
              class="mb-2 text-2xl font-semibold tracking-tight text-gray-600 dark:text-white"
            >
             Implementation and Testing
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Deploying the system and ensuring it meets all requirements through rigorous testing.
          </p>
          <a
            href="https://www.itss-c.com/ar/contactus"
            class="inline-flex font-medium items-center text-[#3ea4db] hover:underline"
          >
            Learn more
            <svg
              class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
              />
            </svg>
          </a>
        </div>
        <div
          class="w-1/2 p-6 mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:-translate-y-2 transition-transform"
        >
          <i
            class="fa-solid fa-ranking-star fa-2xl text-left mb-8 text-[#3ea4db]"
          ></i>
          <a href="https://www.itss-c.com/ar/contactus">
            <h5
              class="mb-2 text-2xl font-semibold tracking-tight text-gray-600 dark:text-white"
            >
             Training and Go-live Support
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
          Training client teams and providing support during the go-live phase.   
          </p>
          <a
            href="https://www.itss-c.com/ar/contactus"
            class="inline-flex font-medium items-center text-[#3ea4db] hover:underline"
          >
            Learn more
            <svg
              class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
              />
            </svg>
          </a>
        </div>
      </div>

      <div class="contain-3 flex gap-5">
        <div
          class="w-1/2 p-6 mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:-translate-y-2 transition-transform"
        >
          <i
            class="fa-solid fa-life-ring fa-2xl text-left mb-8 text-[#3ea4db]"
          ></i>
          <a href="https://www.itss-c.com/ar/contactus">
            <h5
              class="mb-2 text-2xl font-semibold tracking-tight text-gray-600 dark:text-white"
            >
             Post-sales Support
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
          Ongoing support to address any operational issues.
          </p>
          <a
            href="https://www.itss-c.com/ar/contactus"
            class="inline-flex font-medium items-center text-[#3ea4db] hover:underline"
          >
            Learn more
            <svg
              class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
              />
            </svg>
          </a>
        </div>`;
      case "tab4":
        return `
        <p class="mt-10 text-center text-lg text-gray-700 dark:text-gray-400">
        In addition to offering services directly linked to Odoo's ERP solutions, ITSS provides a variety of other services, positioning itself not just as an ERP solutions vendor, but as a provider of a comprehensive business transformation experience. This holistic approach empowers businesses across various sectors while reducing the headache and cost associated with managing multiple vendors. These services include
        </p>

        <div class="contain-1 flex gap-5">
        <div
          class="w-1/2 p-6 mt-16 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:-translate-y-2 transition-transform"
        >
          <i
            class="fa-solid fa-mobile-screen-button fa-2xl text-left mb-8 text-[#3ea4db]"
          ></i>
          <a href="https://www.itss-c.com/ar/contactus">
            <h5
              class="mb-2 text-2xl font-semibold tracking-tight text-gray-600 dark:text-white"
            >
             Mobile Applications
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
              ITSS's development team is always prepared to innovate in Mobile Application Development, offering both Odoo custom mobile interfaces and standalone mobile apps. This flexibility allows businesses to adapt to changing market needs and technology trends, providing users with seamless, mobile-friendly experiences that enhance productivity and engagement.     
              </p>
          <a
            href="https://www.itss-c.com/ar/contactus"
            class="inline-flex font-medium items-center text-[#3ea4db] hover:underline"
          >
            Learn more
            <svg
              class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
              />
            </svg>
          </a>
        </div>
        <div
          class="w-1/2 p-6 mt-16 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:-translate-y-2 transition-transform"
        >
          <i
            class="fa-solid fa-laptop-code fa-2xl text-left mb-8 text-[#3ea4db]"
          ></i>
          <a href="https://www.itss-c.com/ar/contactus">
            <h5
              class="mb-2 text-2xl font-semibold tracking-tight text-gray-600 dark:text-white"
            >
              Website Development
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
              To ensure the businesses' online presence aligns with their goals and objectives, ITSS helps clients create websites that resonate with their audience, offering useful content and a customer-centric design. This vital service helps businesses effectively communicate their value propositions and cater to their target markets.
          </p>
          <a
            href="https://www.itss-c.com/ar/contactus"
            class="inline-flex font-medium items-center text-[#3ea4db] hover:underline"
          >
            Learn more
            <svg
              class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
              />
            </svg>
          </a>
        </div>
      </div>

       <div
          class="w-1/2 p-6 mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:-translate-y-2 transition-transform"
        >
          <i
            class="fa-solid fa-cloud fa-2xl text-left mb-8 text-[#3ea4db]"
          ></i>
          <a href="https://www.itss-c.com/ar/contactus">
            <h5
              class="mb-2 text-2xl font-semibold tracking-tight text-gray-600 dark:text-white"
            >
              Cloud Services
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
            ITSS offers unique Cloud Services, featuring a running release system that provides real-time updates, including security enhancements and new features. This service is designed to grow with businesses, from startups to large enterprises, adapting to their needs and scaling as they expand. This ensures companies can continually benefit from up-to-date technology, improving operational efficiency and driving long-term success.
          </p>
          <a
            href="https://www.itss-c.com/ar/contactus"
            class="inline-flex font-medium items-center text-[#3ea4db] hover:underline"
          >
            Learn more
            <svg
              class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
              />
            </svg>
          </a>
        </div>
      </div>
        `;
      default:
        return "";
    }
  }

  // Function to handle tab switching
  function switchTab(tabId) {
    resetTabs();
    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add("active");
    const content = document.getElementById(`content${tabId.slice(-1)}`);
    content.classList.add("active");
    content.innerHTML = loadContent(tabId); // Load content dynamically
    content.classList.remove("hidden"); // Remove content from DOM
  }

  // Automatically load the first tab content on page load
  switchTab("tab1");

  // Add click event listeners to each tab
  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      switchTab(this.id);
    });
  });
});
// success stroies
const playButton = document.getElementById("playButton");
const videoPlayer = document.getElementById("videoPlayer");

playButton.addEventListener("click", () => {
  // Play the video using YouTube's API
  videoPlayer.contentWindow.postMessage(
    '{"event":"command","func":"playVideo","args":""}',
    "*"
  );
  // Hide the play button after the video starts playing
  playButton.style.display = "none";
});

// Ensure YouTube API is ready before sending commands
function onYouTubeIframeAPIReady() {
  videoPlayer.contentWindow.postMessage(
    '{"event":"command","func":"playVideo","args":""}',
    "*"
  );
}
