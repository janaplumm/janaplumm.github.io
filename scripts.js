// ACCESSIBILITY FOR USERS USING KEYBOARD

document.addEventListener('keydown', function(e) {
  if (e.key === 'Tab' || e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
    document.body.classList.add('user-is-tabbing');
  }
});

document.addEventListener('mousedown', function() {
  document.body.classList.remove('user-is-tabbing');
});

// DOWNLOAD CV BUTTON

document.getElementById("downloadCV").addEventListener("click", function () {
  // Path to your CV file
  const cvFilePath = "cv/Jana-Plumm-CV-2024.pdf";

  // Create an 'a' element to open the file in a new tab
  const link = document.createElement("a");
  link.href = cvFilePath;
  link.target = "_blank";

  // Append the link to the body and simulate a click
  document.body.appendChild(link);
  link.click();

  // Clean up: remove the link from the DOM after the click
  document.body.removeChild(link);
});

// SCROLL DOWN ANIMATION INDICATOR

document.addEventListener("DOMContentLoaded", function () {
  const scrollIndicator = document.querySelector(".scroll-down-indicator");

  if (scrollIndicator) {
    let fadingOut = false; // Flag to track if fade-out animation is already in progress

    window.addEventListener("scroll", function () {
      if (!fadingOut && window.scrollY > 100) {
        // Adjust the scroll position threshold as needed
        fadingOut = true; // Start fade-out animation
        let opacity = 1;
        const intervalId = setInterval(function () {
          opacity -= 0.1; // Adjust the decrement value for smoother or quicker fade-out
          scrollIndicator.style.opacity = opacity;

          if (opacity <= 0) {
            clearInterval(intervalId);
            scrollIndicator.style.visibility = "hidden"; // Hide the indicator after fading out
          }
        }, 50); // Adjust the interval duration for smoother animation
      } else if (window.scrollY <= 100) {
        scrollIndicator.style.opacity = "1";
        scrollIndicator.style.visibility = "visible"; // Show the indicator when scrolling back up
        fadingOut = false; // Reset the flag
      }
    });
  }
});

// SCROLL DOWN REVEAL EFFECT

document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < windowHeight - 50) {
        element.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Run on initial load
});

// CUSTOM CURSOR

document.addEventListener("DOMContentLoaded", (event) => {
  const cursor = {
    delay: 8,
    _x: 0,
    _y: 0,
    endX: window.innerWidth / 2,
    endY: window.innerHeight / 2,
    cursorVisible: true,
    cursorEnlarged: false,
    $dot: document.querySelector(".cursor-dot"),
    $outline: document.querySelector(".cursor-dot-outline"),

    init: function () {
      // Set up element sizes
      this.dotSize = this.$dot.offsetWidth;
      this.outlineSize = this.$outline.offsetWidth;

      this.setupEventListeners();
      this.animateDotOutline();
    },

    setupEventListeners: function () {
      const self = this;

      document.querySelectorAll("a").forEach(function (el) {
        el.addEventListener("mouseover", function () {
          self.cursorEnlarged = true;
          self.toggleCursorSize();
        });
        el.addEventListener("mouseout", function () {
          self.cursorEnlarged = false;
          self.toggleCursorSize();
        });
      });

      document.addEventListener("mousedown", function () {
        self.cursorEnlarged = true;
        self.toggleCursorSize();
      });
      document.addEventListener("mouseup", function () {
        self.cursorEnlarged = false;
        self.toggleCursorSize();
      });

      document.addEventListener("mousemove", function (e) {
        self.cursorVisible = true;
        self.toggleCursorVisibility();
        self.endX = e.pageX;
        self.endY = e.pageY;
        self.$dot.style.top = self.endY + "px";
        self.$dot.style.left = self.endX + "px";
      });

      document.addEventListener("mouseenter", function () {
        self.cursorVisible = true;
        self.toggleCursorVisibility();
        self.$dot.style.opacity = 1;
        self.$outline.style.opacity = 1;
      });

      document.addEventListener("mouseleave", function () {
        self.cursorVisible = false;
        self.toggleCursorVisibility();
        self.$dot.style.opacity = 0;
        self.$outline.style.opacity = 0;
      });
    },

    animateDotOutline: function () {
      const self = this;
      self._x += (self.endX - self._x) / self.delay;
      self._y += (self.endY - self._y) / self.delay;
      self.$outline.style.top = self._y + "px";
      self.$outline.style.left = self._x + "px";
      requestAnimationFrame(this.animateDotOutline.bind(self));
    },

    toggleCursorSize: function () {
      const self = this;
      if (self.cursorEnlarged) {
        self.$dot.style.transform = "translate(-50%, -50%) scale(0.75)";
        self.$outline.style.transform = "translate(-50%, -50%) scale(1.5)";
      } else {
        self.$dot.style.transform = "translate(-50%, -50%) scale(1)";
        self.$outline.style.transform = "translate(-50%, -50%) scale(1)";
      }
    },

    toggleCursorVisibility: function () {
      const self = this;
      if (self.cursorVisible) {
        self.$dot.style.opacity = 1;
        self.$outline.style.opacity = 1;
      } else {
        self.$dot.style.opacity = 0;
        self.$outline.style.opacity = 0;
      }
    },
  };

  cursor.init();
});

// GREETING ANIMATION LOAD AND RUBBERBAND EFFECT

document.addEventListener("DOMContentLoaded", function () {
  const squares = document.getElementsByClassName("greetingLetter");

  // Function to add the animation class with a delay
  function addAnimationWithDelay(element, delay) {
    setTimeout(function () {
      element.classList.add("rubberBand");
      element.addEventListener(
        "animationend",
        function () {
          this.classList.remove("rubberBand");
        },
        false
      );
    }, delay);
  }

  // Add animation sequentially with a delay
  for (let i = 0; i < squares.length; i++) {
    addAnimationWithDelay(squares[i], i * 100); // Adjust the delay (100ms) as needed
  }

  // Hover animation (already existing)
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseenter", function () {
      this.classList.add("rubberBand");
      this.addEventListener(
        "animationend",
        function () {
          this.classList.remove("rubberBand");
        },
        false
      );
    });
  }
});

// COLLAPSIBLES
document.querySelectorAll('.collapsible-button').forEach(button => {
  button.addEventListener('click', () => {
      button.classList.toggle('active');
      const content = button.nextElementSibling;
      if (button.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + 'px';
      } else {
          content.style.maxHeight = 0;
      }
  });
});